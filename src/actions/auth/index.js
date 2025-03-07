'use server';
import { redirect } from "next/navigation";
export default async function register(state, formData) {
    console.log("trigger");
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');
    console.log(firstName, lastName, email, password);
    if (!firstName) {
        return {
            message: "First name is required",
            messageType: "TOASTER",
            success: false
        }
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            password
        })
    });
    const data = await response.json();
    console.log(data);
    redirect("/dashboard");
}