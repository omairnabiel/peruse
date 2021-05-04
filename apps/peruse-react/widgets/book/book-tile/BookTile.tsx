import React from "react"

import styles from "./BookTile.module.scss"
interface Props {
    name: string;
    cover: string;
    highlights?: number;
    category?: string;
    progress?: number;
    lastRead?: string;
    className?: string;
}

export const BookTile = ({ cover, name, highlights,progress,lastRead, category, className, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            <div className={`${styles['container']}  ${className || ""}`}>
                <div className={styles['cover']}>
                    <img src={cover} className={styles['cover']}/>
                </div>  
                <div className={styles['title-container']}>
                   {category && <div className={`tag is-dark ${styles['tag']}`}>{category}</div>} 
                    <div className={styles['title']}>{name}</div>
                    {highlights && <div className={styles['legend']}>Highlights {highlights}</div>}
                    {progress && <div className={styles['legend']}>Progress {progress}%</div>}
                    {lastRead && <div className={styles['legend']}>Last read on {lastRead}%</div>}   
                </div>
                {children}
            </div>
        </>
    )
}