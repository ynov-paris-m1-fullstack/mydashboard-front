'use client';
import {useState, useActionState} from 'react';
import Button from "@/components/Button";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import Notification from "@/components/Notification";
import { updateMe } from '@/actions/auth';

const initialState = {
    message: "",
}

const Index = ({user}) => {

    const [showModal, setShowModal] = useState(false);
    const [state, formAction, pending] = useActionState(updateMe, initialState);
    const [form, setForm] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
    });
    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="my__10">
            <Button
                handleClick={() => {setShowModal(true)}}
                label="Modifier"
                type="button"
                classes="btn__primary"
            />
            {
                showModal && (
                    <Modal close={() => { setShowModal(false) }} title="Modifier">
                        <form action={formAction}>
                            <Input 
                                value={form.firstName}
                                label="Prénom"
                                type="text"
                                name="firstName"
                                handleChange={(e) => handleInputChange(e)}
                            />
                            <Input 
                                value={form.lastName}
                                label="Nom" 
                                type="text" 
                                name="lastName" 
                                handleChange={(e) => handleInputChange(e)}
                            />
                            <Input 
                                value={form.email}
                                label="Email"
                                type="email"
                                name="email"
                                handleChange={(e) => handleInputChange(e)}
                            />
                            <Button
                                label={pending ? "loading..." : "Modifier"}
                                type="submit"
                                disabled={pending}
                                classes="btn__primary"
                            />
                            {
                                state && state.message && (
                                    <Notification
                                        message={state.message}
                                        type={state.success ? "success" : "error"}
                                    />
                                )
                            }
                        </form>
                    </Modal>
                )
            }
        </div>
    );
}

export default Index;