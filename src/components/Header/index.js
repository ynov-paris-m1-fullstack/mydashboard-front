import Link from "next/link";
import Logo from "../../../public/logo.svg";
import styles from "./header.module.scss";

const Index = () => {

    return (
        <header className={styles.header__main}>
            <div className={styles.header__logo}>
                <img src={Logo.src} alt="Logo" />
                <h1>My Dashboard</h1>
            </div>
            <div className={styles.header__searchbar}>
                <div className={styles.input__wrapper}>
                    <svg width="28" height="21" viewBox="0 0 28 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.6291 15.5958L16.8726 12.8393C17.5362 11.9558 17.8945 10.8804 17.8933 9.77542C17.8933 6.95297 15.597 4.65668 12.7745 4.65668C9.95205 4.65668 7.65576 6.95297 7.65576 9.77542C7.65576 12.5979 9.95205 14.8942 12.7745 14.8942C13.8795 14.8954 14.9549 14.5371 15.8384 13.8735L18.5949 16.63C18.7345 16.7547 18.9164 16.8213 19.1035 16.8161C19.2906 16.8109 19.4686 16.7342 19.6009 16.6019C19.7333 16.4695 19.8099 16.2915 19.8152 16.1044C19.8204 15.9174 19.7538 15.7354 19.6291 15.5958ZM9.11826 9.77542C9.11826 9.05229 9.3327 8.34539 9.73445 7.74412C10.1362 7.14286 10.7072 6.67422 11.3753 6.39749C12.0434 6.12076 12.7786 6.04835 13.4878 6.18943C14.1971 6.33051 14.8485 6.67873 15.3599 7.19007C15.8712 7.7014 16.2194 8.35288 16.3605 9.06213C16.5016 9.77137 16.4292 10.5065 16.1524 11.1746C15.8757 11.8427 15.4071 12.4137 14.8058 12.8155C14.2045 13.2172 13.4976 13.4317 12.7745 13.4317C11.8052 13.4305 10.8759 13.0449 10.1904 12.3595C9.50501 11.6741 9.11942 10.7448 9.11826 9.77542Z" fill="#2D3748" />
                    </svg>
                    <input type="search" placeholder="Search sales"/>
                </div>
            </div>
            <div className={styles.cta}>
                <Link className="btn btn__primary" href="/dashboard/product/create">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
                    Add product
                </Link>
            </div>
        </header>
    );
}

export default Index;