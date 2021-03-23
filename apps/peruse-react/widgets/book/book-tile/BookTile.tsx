import React from "react"

import styles from "./BookTile.module.scss"
interface Props {
    name: string;
    cover: string;
    className?: string;
}

export const BookTile = ({ cover, name, className , children}: React.PropsWithChildren<Props>) => {
    return (
        <>
            <div className={`${styles['container']} ${className || ""}`}>
                <img src={cover} className={styles['cover']} />

                <div className={styles['title-container']}>
                    <div className={styles['category']}>Music</div>
                    <div className={styles['title']}>{name}</div>
                </div>
                {children}
            </div>
        </>
    )
}