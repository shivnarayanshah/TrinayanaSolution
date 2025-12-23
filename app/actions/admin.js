"use server";

import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { auth } from "@/auth";

export async function getContacts() {
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized access. Admin privileges required.");
    }

    await dbConnect();
    try {
        const contacts = await Contact.find({}).sort({ createdAt: -1 });
        return JSON.parse(JSON.stringify(contacts));
    } catch (error) {
        console.error("Error fetching contacts:", error);
        return [];
    }
}

export async function updateContactStatus(id, status) {
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await dbConnect();
    try {
        await Contact.findByIdAndUpdate(id, { status });
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}

export async function deleteContact(id) {
    const session = await auth();
    if (!session || session.user.role !== "ADMIN") {
        throw new Error("Unauthorized");
    }

    await dbConnect();
    try {
        await Contact.findByIdAndDelete(id);
        return { success: true };
    } catch (error) {
        return { success: false, error: error.message };
    }
}
