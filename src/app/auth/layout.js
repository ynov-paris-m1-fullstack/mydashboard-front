import styles from "./layout.module.scss";
import Image from "../../../public/image.png";
export default function Layout({ children }) { 
    return (
        <div className={styles.wrapper}>
            <div className={styles.left__part}>
                <img src={Image.src} alt="auth" />
            </div>
            <div className={styles.right__part}>
                {children}
            </div>
        </div>
    )
}