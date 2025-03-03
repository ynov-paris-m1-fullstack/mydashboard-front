'use client';
import {useState} from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Index = () => {

    const [form, setForm] = useState({
        name: "",
        price: "",
        brand: "",
        releaseYear: "",
        category: "",
    });

    return (
        <form action="">
            <Input
                name="name"
                label="Name"
                type="text"
                handleChange={(e) => {
                    console.log(form);
                    setForm({
                        ...form,
                        name: e.target.value
                    });
                }}
            />
            <Input
                name="price"
                label="Price"
                type="number"
                handleChange={(e) => {
                    console.log(form);
                    setForm({
                        ...form,
                        price: e.target.value
                    });
                }}
            />
            <Input
                name="brand"
                label="brand"
                type="text"
            />
            <Input
                name="releaseYear"
                label="Release year"
                type="number"
            />
            <Input
                name="Category"
                label="Category"
                type="number"
            />
            <Button
                handleClick={(e) => {
                    e.preventDefault();
                    console.log(productName);
                    console.log("Product created")
                }}
                label="Create product"
                type="submit"
                classes="btn btn__primary"
            />
        </form>
    )
}

export default Index;