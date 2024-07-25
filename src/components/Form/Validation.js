import { z } from "zod";

export const nameSchema = z
  .string()
  .max(40)
  .regex(/^[a-zA-Z\s]+$/);

export const phoneNumberSchema = z.string().length(7).regex(/^\d+$/);
