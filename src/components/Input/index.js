import styles from "./index.module.scss";

const Index = ({
    label,
    value,
    name,
    type,
    handleChange,
    required
}) => {
    return (
        <div className={styles.wrapper}> 
            <label>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={handleChange}
                required={required}
            />
        </div>
  );
}

export default Index;