import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import styles from "./layout.module.scss";
export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <Sidebar />
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}