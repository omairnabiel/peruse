import React from "react"

import styles from "./BookTile.module.scss"

import { Card, CardContent } from "../../../components"

interface Props {
    name: string;
    cover: string
}

export const BookTile = ({cover, name}:Props) => {
    return (
        <div className={styles['container']}>
            <Card>
                <CardContent className={styles['content-container']}>
                    <img src="bookmark.svg" className={`${styles['bookmark-icon']}`}/>
                    <img src={cover} className={styles['image-size']}/>
                    <p className={styles['book-title']}>{name}</p>
                </CardContent>
            </Card>
        </div>
    )
}