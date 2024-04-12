"use server";

import React from "react";
import { Resend } from "resend";
import { z } from "zod";

import ContactFormEmail from "@/email/ContactFormEmail";
import { formSchema } from "@/lib/utils/formSchema";
import { getErrorMessage } from "@/lib/utils/getErrorMessage";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (values: z.infer<typeof formSchema>) => {
    const { name, email, message } = values;

    // simple server-side validation
    if (!name || !email || !message) {
        return {
            error: "Invalid message data."
        };
    };

    let data;

    try {
        // Sending the form data via email with the help of "Resend"
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: 'rsv.antn@gmail.com',
            subject: 'Contact form message',
            reply_to: email,
            react: React.createElement(ContactFormEmail, {
                name: name,
                email: email,
                message: message
            }),
        });
    } catch (error: unknown) {
        throw new Error(getErrorMessage(error));
    };

    return {
        data
    };
};