'use client';
import HomeIcon from "../../../public/home.svg";
import SalesIcon from "../../../public/sales.svg";
import ProfilIcon from "../../../public/user.svg";
import LogoutIcon from "../../../public/logout.svg";
import MenuItem from "@/components/MenuItem";
import Button from "@/components/Button";
import style from "./index.module.scss";

const Index = () => {

    const menu = [
        {
            label: "Dashboard",
            path: "/",
            icon: HomeIcon.src
        },
        {
            label: "Sales",
            path: "/sales",
            icon: SalesIcon.src
        },
        {
            label: "Profil",
            path: "/profil",
            icon: ProfilIcon.src
        }
    ]

    return (
        <aside className={style.sidebar}>
            <nav>
                <ul>
                    {
                        menu.map((itemMenu, index) => (
                            <MenuItem key={index} item={itemMenu } />
                        ))
                    }
                </ul>
            </nav>
            <div className={style.sidebar__bottom}>
                <Button
                    label="log out"
                    type="button"
                    classes="btn__primary with__icon"
                    icon={LogoutIcon}
                    iconPosition="left"
                    handleClick={() => console.log("Logout")}
                />
            </div>
        </aside>
    )
}

export default Index;