import { z } from "zod";

export const createUserSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(10, "Phone number must be at least 10 characters long"),
    email: z.string().email("Invalid email address"),
    gender: z.enum(["male", "female", "other", "prefer-not-to-say"]).optional(),
    passport: z.string().min(1, "Passport number is required"),
    healthInsurance: z.string().optional(),
    paymentMethod: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type CreateUserInput = z.infer<typeof createUserSchema>;
