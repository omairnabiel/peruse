import React from "react"

import styles from "./Button.module.scss"

interface Props {
    title: string
    clasName?: string
    onClick: React.MouseEventHandler
}
export const Button = ({title, onClick}:Props) => {
    return (
        <button className={styles['button']} onClick={onClick}>
            {title}
        </button>
    )
}