'use client';
import { useActionState, useEffect } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import register from "@/actions/auth";

const initialState = {
   message: "",
}
const Index = () => {

    const [state, formAction, pending] = useActionState(register, initialState);
    console.log(state);

    useEffect(() => {
        if (state?.success && state.redirect) {
            window.location.href=state.redirect;
            //similaire:  router.push(state.redirect);
        }
     }, [state]); 
    
    return (
        <form action={formAction}>
            <Input
                type="text"
                required={true}
                label="first name"
                name="firstName" />
            <Input
                type="text"
                label="last name"
                name="lastName" />
            <Input
                type="email"
                label="email"
                name="email" />
            <Input
                type="password"
                label="password" name="password"
            />
            <Button
                type="submit"
                classes="btn__primary"
                disabled={pending}
                label={pending ? "loading..." : "register"} />
            {state?.message && <p>{state.message}</p>}
        </form>
    )
}

export default Index;