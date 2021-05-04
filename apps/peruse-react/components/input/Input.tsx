import React, { ChangeEventHandler } from "react"

import styles from "./Input.module.scss"

interface Props {
    handleChange: ChangeEventHandler;
    value: string | number;
    size: "small" | "medium" | "large";

    placeholder: string;
    type: string;
    className?: string
    iconName?: string;
}

export const Input = ({ value, handleChange, placeholder, type, iconName, size, className }: Props) => {
    return (
        <div className={styles['container']}>
            <input
                className={`input is-rounded is-${size || "medium"} ${styles['input']} ${className}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange} />
            <span className={`${styles['icon']} material-icons-outlined`}>{iconName}</span>
        </div>
    )
}