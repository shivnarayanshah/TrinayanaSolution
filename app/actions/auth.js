"use server";

import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function registerUser(formData) {
    try {
        await dbConnect();

        const { name, email, password } = formData;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { success: false, message: "A user with this email already exists." };
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        // First user is automatically assigned ADMIN role
        const userCount = await User.countDocuments();
        const role = userCount === 0 ? "ADMIN" : "USER";

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role,
        });

        await newUser.save();

        return { success: true, message: "Registration successful! You can now access your account." };
    } catch (error) {
        console.error("Registration Error:", error);
        return { success: false, message: "Something went wrong during registration." };
    }
}
