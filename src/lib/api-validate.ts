import { z } from "zod";

const slugSchema = z
  .string()
  .min(1, "Slug required")
  .max(100)
  .transform((s) => s.trim().toLowerCase().replace(/[^a-z0-9-_]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, "") || "my-vcard");

const emailSchema = z.string().min(1, "Email required").max(320).email("Invalid email");

export const createVCardSchema = z.object({
  slug: slugSchema,
  title: z.string().max(200).optional(),
  description: z.string().max(5000).optional(),
}).passthrough();

export const inquirySchema = z.object({
  name: z.string().min(1, "Name required").max(200).transform((s) => s.trim()),
  email: emailSchema,
  phone: z.string().max(50).optional().transform((s) => (s == null || s === "" ? undefined : s.trim())),
  message: z.string().min(1, "Message required").max(5000).transform((s) => s.trim()),
  website: z.string().max(500).optional(), // honeypot; should be empty
});

export const subscribeSchema = z.object({
  email: emailSchema.transform((s) => s.trim().toLowerCase()),
});

export const slugCheckSchema = z.object({
  slug: slugSchema,
  excludeId: z.string().optional(),
});

export type CreateVCardInput = z.infer<typeof createVCardSchema>;
export type InquiryInput = z.infer<typeof inquirySchema>;
export type SubscribeInput = z.infer<typeof subscribeSchema>;
