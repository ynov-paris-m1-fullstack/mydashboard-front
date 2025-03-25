'use server';
import {cookies}  from "next/headers";

export default async function register(state, formData) {

    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const password = formData.get('password');

    const cookiesStore = await cookies();

    console.log(firstName, lastName, email, password);

    try {
        if (!firstName) {
            return {
                message: "First name is required",
                messageType: "TOASTER",
                success: false
            }
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const response = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
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
        if (!data.success) {
            return {
                message: data.message,
                success: false
            }
        }
        console.log(data);
        if (data.token) {
            cookiesStore.set("token", data.token, {
                maxAge: 60 * 60 * 24,
                path: "/",
                secure: process.env.NODE_ENV === "production",
                httpOnly: true,
                sameSite: "lax"
            });
            return {
                message: "user successfully registered",
                success: true,
                redirect: "/dashboard"
           }
        }
    }
    catch(err) {
        console.log(err);
        return {
            message: "Something went wrong",
            success: false
        }
    }
   
}