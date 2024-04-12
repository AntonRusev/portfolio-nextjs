"use client";

import { z } from "zod";

// Schema for form validation
export const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(30, { message: "Name too long, must be no more than 30 characters." }),
    email: z.string().min(1, { message: "Email is required." }).email("Invalid email address."),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(5000, { message: "Message too long, must be at most 5000 characters." }),
});