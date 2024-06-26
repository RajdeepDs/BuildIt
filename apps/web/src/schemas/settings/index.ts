import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  bio: z.string().optional(),
});
