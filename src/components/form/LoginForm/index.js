import Input from "@/components/Input";
import Button from "@/components/Button";

const Index = () => {
    return (
        <form>
            <Input label="email" name="email" />
            <Input label="password" name="password" type="password" />
            <Button
                classes="btn__primary"
                label="Login" />
        </form>
    )
}

export default Index;