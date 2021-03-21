import React from "react"

import styles from "./Divider.module.scss"

interface Props {
    content?: string
}
export const Divider = ({content}:Props) => {
    return (
        <div className={styles['solid']} data-content={content}></div>
    )
}