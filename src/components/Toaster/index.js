import React, { useEffect } from "react";
import styles from "./index.module.scss";

const Index = ({ variant = "info", label, close, duration = 1000, isOpen, position }) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            close();
        }, duration);

        return () => clearTimeout(timer);
    }, [close, duration]);

    return (
        <div className={`${styles.wrapper} ${styles[variant]} ${isOpen && styles.open} ${position ? styles[position] : "top__right"}`} onClick={close}>
            <p>{label}</p>
        </div>
    );
};

export default Index;