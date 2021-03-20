import React, { ChangeEventHandler } from "react"

import styles from "./Input.module.scss"

interface Props {
    handleChange: ChangeEventHandler;
    value: string | number;
    size: "small" | "medium" | "large";

    placeholder: string;
    type: string;

    hasIconLeft?: boolean;
    hasIconRight?: boolean;
    iconLeft?: string;
    iconRight?: string;
}

export default function CustomInput({ value, handleChange, placeholder, type, hasIconLeft, hasIconRight, iconLeft, iconRight, size }: Props) {
    return (
            <div className={`control ${hasIconLeft ? "has-icons-left": ""} ${hasIconRight? "has-icons-right": ""}`}>
                <input
                    className={`input is-rounded is-medium is-${size || "medium"}`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleChange} />
                <span className={`icon is-small ${hasIconLeft && "is-left"}`}>
                    <i className={`fas fa-${iconLeft}`}></i>
                </span>
                <span className={`icon is-small ${hasIconRight && "is-right"}`}>
                    <i className={`fas fa-${iconRight}`}></i>
                </span>
            </div>
    )
}