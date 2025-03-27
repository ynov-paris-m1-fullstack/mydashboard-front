'use server';
import { redirect } from 'next/navigation';
import { cookies } from "next/headers";
import { fetchRestfull } from "@/services/fetchRestfull";

export async function register(state, formData) {

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

        const data = await fetchRestfull({
            endpoint: "auth/register",
            method: "POST",
            body: {
                firstName,
                lastName,
                email,
                password
            }
        });
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

export async function login(state, formData) { 
    const email = formData.get('email');
    const password = formData.get('password');
    const cookiesStore = await cookies();
    const data = await fetchRestfull({
        endpoint: "auth/login",
        method: "POST",
        body: {
            email,
            password
        }
    });
    console.log(data);
    if (!data.success) {
        return {
            message: data.message,
            success: false
        }
    }
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

export async function logout() { 
    const cookiesStore = await cookies();
    cookiesStore.delete("token");
    redirect("/auth/login");
}

export async function updateMe(state, formData) {
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const cookiesStore = await cookies();
    const token = cookiesStore.get('token');
    try {
        const user = await fetchRestfull({
            endpoint: "user/me",
            method: "PUT",
            body: {
                firstName,
                lastName,
                email
            },
            token: token.value
        });
        if(!user.success) {
            return {
                message: user.message,
                success: false
            }
        }
        return {
            message: "User successfully updated",
            success: true
        }
    }
    catch (err) {
        console.log(err);
        return {
            message: "Something went wrong",
            success: false
        }
    }
}