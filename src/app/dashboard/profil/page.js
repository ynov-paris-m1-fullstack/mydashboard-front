import { fetchRestfull } from "@/services/fetchRestfull";
import { cookies } from "next/headers";
import UpdateUserForm from "@/components/form/UpdateUserForm";
const Page = async () => { 

    const cookiesStore = await cookies();
    const token = cookiesStore.get('token');
    const {user} = await fetchRestfull({
        endpoint: "user/me",
        method: "GET",
        token: token.value
    });

    console.log(user);

    return (
        <div className="my__10">
            <h1>Profil</h1>
            <p>Nom: {user.firstName}</p>
            <p>Prénom: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <UpdateUserForm user={user} />
        </div>
    )
}
export default Page;