import React from "react"

import styles from "./Button.module.scss"

interface Props {
    title: string
    clasName?: string
    hasIconRight?: boolean
    hasIconLeft?: boolean
    iconRightName?: string
    iconLeftName?: string
    onClick: React.MouseEventHandler
}
export const Button = ({ title, onClick, hasIconLeft, iconLeftName, hasIconRight, iconRightName, children }: React.PropsWithChildren<Props>) => {
    return (
        <div className={styles['button']} onClick={onClick}>
            {hasIconLeft && <div className={`material-icons-outlined ${styles['button-icon']}`}>{iconLeftName}</div>}
            {title}
            {hasIconRight && <div className={`material-icons-outlined ${styles['button-icon']}`}>{iconRightName}</div>}
        </div>
    )
}