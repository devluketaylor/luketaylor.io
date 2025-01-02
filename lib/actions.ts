"use server"

import { Resend } from "resend";
import { FormResult, iFormData } from "@/lib/types";



export async function postForm({ formData }: { formData: iFormData }): Promise<FormResult> {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)

        resend.emails.send({
            from: "luke@luketaylor.io",
            to: "ltlukas@icloud.com",
            subject: "New Contact Form Submission",
            html: `
                <h1>New Contact Form Submission</h1>
                <p>Name: ${formData.name}</p>
                <p>Email: ${formData.email}</p>
                <p>Message: ${formData.message}</p>
            `
        })

        resend.emails.send({
            from: "luke@luketaylor.io",
            // to: formData.get('email'),
            to: formData.email,
            subject: "Thanks for reaching out!",
            html: `
                <h1>Thanks for reaching out!</h1>
                <p>I'll get back to you as soon as I can.</p>
            `
        })

        console.log("success")
        return FormResult.Success
    } catch (error) {
        console.error(error)

        return FormResult.Error
    }
}