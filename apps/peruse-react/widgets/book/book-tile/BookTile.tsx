import React from "react"

import styles from "./BookTile.module.scss"
interface Props {
    name: string;
    cover: string;
    className?: string;
}

export const BookTile = ({ cover, name, className, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            <div className={`${styles['container']} ${className || ""}`}>
                <div className={styles['cover']}>
                    <img src={cover} className={styles['cover']}/>
                </div>  
                <div className={styles['title-container']}>
                    <div className={`tag is-dark ${styles['tag']}`}>Music</div>
                    <div className={styles['title']}>{name}</div>
                    <div className={styles['legend']}>Highlights 12</div>
                    <div className={styles['legend']}>Progress 60%</div>    
                </div>
                {children}
            </div>
        </>
    )
}