import { z } from "zod";

export const addSchema = z.object({
  title: z.string().nullable(),
  completed: z.boolean(),
});
export const editSchema = z.object({
  title: z.string().nullable(),
  completed: z.boolean(),
});
