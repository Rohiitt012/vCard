const EDIT_TOKENS_KEY = "vcard-edit-tokens";

export function getEditToken(vcardId: string): string | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(EDIT_TOKENS_KEY);
    if (!raw) return null;
    const map = JSON.parse(raw) as Record<string, string>;
    return map[vcardId] ?? null;
  } catch {
    return null;
  }
}

export function setEditToken(vcardId: string, token: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(EDIT_TOKENS_KEY);
    const map = (raw ? JSON.parse(raw) : {}) as Record<string, string>;
    map[vcardId] = token;
    localStorage.setItem(EDIT_TOKENS_KEY, JSON.stringify(map));
  } catch (_) {}
}

export function removeEditToken(vcardId: string): void {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(EDIT_TOKENS_KEY);
    if (!raw) return;
    const map = JSON.parse(raw) as Record<string, string>;
    delete map[vcardId];
    localStorage.setItem(EDIT_TOKENS_KEY, JSON.stringify(map));
  } catch (_) {}
}

export async function apiListVCards(includeDeleted = false): Promise<unknown[]> {
  const url = includeDeleted ? "/api/vcards?deleted=1" : "/api/vcards";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch vCards");
  return res.json();
}

export async function apiCheckSlug(slug: string, excludeId?: string): Promise<{ available: boolean }> {
  const params = new URLSearchParams({ slug });
  if (excludeId) params.set("excludeId", excludeId);

  try {
    const res = await fetch(`/api/vcards/check-slug?${params}`);
    if (!res.ok) throw new Error("Failed to check slug");
    return res.json();
  } catch {
    // Fallback: no backend (e.g. no DATABASE_URL). Validate against localStorage-only vCards.
    if (typeof window === "undefined") {
      return { available: true };
    }
    try {
      const raw = localStorage.getItem("vcards-local-storage");
      if (!raw) return { available: true };
      const list = JSON.parse(raw) as Array<{ id?: string; slug?: string; previewUrl?: string }>;
      const target = slug.toLowerCase();
      const exists = list.some((card) => {
        if (excludeId && card.id === excludeId) return false;
        let cardSlug = card.slug;
        if (!cardSlug && typeof card.previewUrl === "string") {
          cardSlug = card.previewUrl.replace(/^https?:\/\/[^/]+/, "").replace(/^\//, "");
        }
        return (cardSlug ?? "").toLowerCase() === target;
      });
      return { available: !exists };
    } catch {
      // If anything goes wrong while reading localStorage, don't block user.
      return { available: true };
    }
  }
}

export async function apiCreateVCard(payload: { slug: string; [k: string]: unknown }): Promise<{ id: string; editToken: string; [k: string]: unknown }> {
  const res = await fetch("/api/vcards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || "Failed to create vCard");
  }
  return res.json();
}

export async function apiGetVCard(id: string): Promise<unknown> {
  const res = await fetch(`/api/vcards/${id}`);
  if (!res.ok) throw new Error("Failed to fetch vCard");
  return res.json();
}

export async function apiUpdateVCard(id: string, payload: object, editToken: string): Promise<unknown> {
  const res = await fetch(`/api/vcards/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", "x-edit-token": editToken },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as { error?: string }).error || "Failed to update vCard");
  }
  return res.json();
}

export async function apiDeleteVCard(id: string, editToken: string): Promise<void> {
  const res = await fetch(`/api/vcards/${id}`, {
    method: "DELETE",
    headers: { "x-edit-token": editToken },
  });
  if (!res.ok) throw new Error("Failed to delete vCard");
}

export async function apiRestoreVCard(id: string, editToken: string): Promise<void> {
  const res = await fetch(`/api/vcards/${id}/restore`, {
    method: "POST",
    headers: { "x-edit-token": editToken },
  });
  if (!res.ok) throw new Error("Failed to restore vCard");
}

export async function apiIncrementView(id: string): Promise<void> {
  await fetch(`/api/vcards/${id}/view`, { method: "POST" });
}

export async function apiSubmitInquiry(id: string, body: { name: string; email: string; phone?: string; message: string; website?: string }): Promise<void> {
  const res = await fetch(`/api/vcards/${id}/inquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (res.status === 429) throw new Error("Too many requests. Try again later.");
  if (!res.ok) throw new Error("Failed to send message");
}

export async function apiSubscribe(vcardId: string, email: string): Promise<void> {
  const res = await fetch(`/api/vcards/${vcardId}/subscriptions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error("Failed to subscribe");
}

export async function apiListSubscriptions(vcardId: string, editToken: string): Promise<{ email: string; createdAt: string }[]> {
  const res = await fetch(`/api/vcards/${vcardId}/subscriptions`, {
    headers: { "x-edit-token": editToken },
  });
  if (!res.ok) throw new Error("Failed to fetch subscriptions");
  return res.json();
}
