import styles from "./index.module.scss";

const index = ({label, value, icon}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.left__part}>
                <h3>{label}</h3>
                <h2>{value}</h2>
            </div>
            <div className={styles.right__part}>
                <div
                    dangerouslySetInnerHTML={{__html: icon}}
                />
            </div>
        </div>
    )
}

export default index;