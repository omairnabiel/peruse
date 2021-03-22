import React from "react"

import styles from "./Divider.module.scss"

interface Props {
    content?: string
    className?: string
}
export const Divider = ({content, className}:Props) => {
    return (
        <div className={`${styles['solid']} ${className || ""}`} data-content={content}></div>
    )
}