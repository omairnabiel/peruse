import React from "react"

import styles from "./BookListItem.module.scss"

interface Props {
    cover: string;
    title: string;
    author?: string
}
export const BookListItem = ({ cover, title, author }: Props) => {
    return (
        <div>
            <div>
                <img src={cover} />
            </div>
            <div>
                <div>{title}</div>
                {author && <div>{author}</div>}
            </div>
        </div>
    )
}