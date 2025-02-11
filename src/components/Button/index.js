import styles from "./button.module.scss";

const Index = ({
    label,
    handleClick,
    classes,
    icon,
    iconPosition,
    type,
    disabled }) => {
    
    return (
        <button
            onClick={handleClick}
            type={type}
            disabled={disabled}
            className={`
            ${styles.btn} 
            ${iconPosition && styles.with__icon}
            ${styles.btn__primary}
            // ${styles[classes]}`}
        >
            {
                iconPosition === "left" && (
                    <img src={icon.src} alt={label} />
                )
            }
            {label}
            {
                iconPosition === "right" && (
                    <img src={icon.src} alt={label} />
                )
            }
        </button>
    )
}

export default Index;