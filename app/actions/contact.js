"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";

export async function submitContactForm(formData) {
    try {
        await dbConnect();

        const newContact = new Contact({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: formData.service,
            message: formData.message,
        });

        await newContact.save();

        return { success: true, message: "Your message has been received. We will get back to you soon!" };
    } catch (error) {
        console.error("Database Error:", error);
        return { success: false, message: "Failed to send message. Please try again later." };
    }
}
