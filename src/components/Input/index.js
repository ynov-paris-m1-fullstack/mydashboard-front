import styles from "./index.module.scss";

const Index = ({
    label,
    value,
    name,
    type,
    handleChange,
}) => {
    return (
        <div className={styles.wrapper}> 
            <label>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
            />
        </div>
  );
}

export default Index;