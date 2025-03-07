import Input from "@/components/Input";
import Button from "@/components/Button";

const Index = () => {
    return (
        <form>
            <Input label="first name" name="firstName"/>
            <Input label="last name" name="lastName" />
            <Input label="email" name="email" />
            <Input label="password" name="password" type="password" />
            <Button
                classes="btn__primary"
                label="Register" />
        </form>
    )
}

export default Index;