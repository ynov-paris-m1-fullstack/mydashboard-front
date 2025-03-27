import styles from "./index.module.scss";
const Index = ({message, type}) => {
    return (
        <div className={`${styles.wrapper} ${styles[type]}`}>
            <p>{message}</p>
        </div>
    );
}

export default Index;