import React from "react"

import styles from "./Button.module.scss"

interface Props {
    title: string
    clasName?: string
    hasIcon?: boolean
    iconName?: string
    onClick: React.MouseEventHandler
}
export const Button = ({title, onClick, hasIcon, iconName, children}:React.PropsWithChildren<Props>) => {
    return (
        <button className={styles['button']} onClick={onClick}>
            {title}
            {hasIcon && <div className={`${styles['button-icon']} fas fa-${iconName}`}/>}
        </button>
    )
}