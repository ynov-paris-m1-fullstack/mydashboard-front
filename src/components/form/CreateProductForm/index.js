'use client';
import { useState, useEffect } from "react";
import { fetchGraphql } from "@/services/fetchGraphql";
import { CREATE_PRODUCT } from "@/graphql/mutations/product";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Index = () => {

    const [form, setForm] = useState({
        name: "B",
        price: 0,
        brand: "",
        releaseYear: 2000,
        category: "",
    });

    //effectue une -opération à l' intialisation du composant
    useEffect(() => { 
        console.log(form);
    }, []);

    // effectue une opération à chaque fois que form change
    // useEffect(() => {
    //     console.log(form);
    // }, [form]);

    const submitAddProduct = async () => { 

        try {
            const data = await fetchGraphql({
                resolver: CREATE_PRODUCT,
                variables: {
                    input: form
                }
            });
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }

    }

    const handleInputChange = (e) => {
        // Si le type de l'input est number, on convertit la valeur en nombre
        setForm({
            ...form,
            [e.target.name]: e.target.type ==="number" ? Number(e.target.value) : e.target.value
        })
    }

    return (
        <form>
            <Input
                name="name"
                label="Name"
                type="text"
                value={form.name}
                handleChange={(e) => handleInputChange(e)}
                required={true}
            />
            <Input
                name="price"
                label="Price"
                type="number"
                value={form.price}
                handleChange={(e) => handleInputChange(e)}
                required={true}
            />
            <Input
                name="brand"
                label="brand"
                type="text"
                value={form.brand}
                required={true}
                handleChange={(e) => handleInputChange(e)}
            />
            <Input
                name="releaseYear"
                label="Release year"
                type="number"
                value={form.releaseYear}
                handleChange={(e) => handleInputChange(e)}
            />
            <Input
                name="category"
                label="Category"
                type="text"
                value={form.category}
                handleChange={(e) => handleInputChange(e)}
            />
            <Button
                handleClick={(e) => {
                    e.preventDefault();
                    console.log(form);
                    submitAddProduct();
                }}
                label="Create product"
                type="submit"
                classes="btn btn__primary"
            />
        </form>
    )
}

export default Index;