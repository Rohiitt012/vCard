/**
 * API tests for GET /api/vcards/by-slug/[slug]
 * Uses mocked Prisma so no real DB is required.
 */

const mockFindFirst = jest.fn();

jest.mock("@/lib/prisma", () => ({
  getPrisma: () => ({
    vCard: {
      findFirst: mockFindFirst,
    },
  }),
}));

describe("GET /api/vcards/by-slug/[slug]", () => {
  beforeEach(() => {
    mockFindFirst.mockReset();
  });

  it("returns 404 when slug is not found", async () => {
    mockFindFirst.mockResolvedValue(null);
    const { GET } = await import("@/app/api/vcards/by-slug/[slug]/route");
    const res = await GET(
      new Request("http://localhost/api/vcards/by-slug/not-found"),
      { params: Promise.resolve({ slug: "not-found" }) }
    );
    expect(res.status).toBe(404);
  });

  it("returns 200 and card when slug exists and no password", async () => {
    mockFindFirst.mockResolvedValue({
      id: "id-1",
      slug: "my-card",
      data: { title: "My Card" },
      viewCount: 10,
      deletedAt: null,
    });
    const { GET } = await import("@/app/api/vcards/by-slug/[slug]/route");
    const res = await GET(
      new Request("http://localhost/api/vcards/by-slug/my-card"),
      { params: Promise.resolve({ slug: "my-card" }) }
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.slug).toBe("my-card");
    expect(json.requiresPassword).toBe(false);
  });

  it("returns requiresPassword true when card has password in data", async () => {
    mockFindFirst.mockResolvedValue({
      id: "id-2",
      slug: "locked",
      data: { title: "Locked", password: "secret" },
      viewCount: 0,
      deletedAt: null,
    });
    const { GET } = await import("@/app/api/vcards/by-slug/[slug]/route");
    const res = await GET(
      new Request("http://localhost/api/vcards/by-slug/locked"),
      { params: Promise.resolve({ slug: "locked" }) }
    );
    expect(res.status).toBe(200);
    const json = await res.json();
    expect(json.requiresPassword).toBe(true);
    expect(json.password).toBeUndefined();
  });
});
