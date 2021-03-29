import React, { useState } from "react"
import { Input, Spacer } from "../../components"
import { BookTile } from "../book"

import styles from "./Highlights.module.scss"

export const Highlights = () => {

    const [search, setSearch] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const books = [
        {
            id: "1",
            name: "Code Complete 2nd Edition",
            cover: "code_complete.jpg"
        },
        {
            id: "2",
            name: "Designing Data Intensive Applications",
            cover: "code_complete.jpg"
        },
        {
            id: "3",
            name: "Don't Make Me Think",
            cover: "code_complete.jpg"
        },
        {
            id: "4",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            id: "5",
            name: "To Kill a Mocking Bird",
            cover: "code_complete.jpg",
        },
        {
            id: "6",
            name: "White Tiger",
            cover: "code_complete.jpg",
        }
    ]

    return (
        <div className={styles['container']}>
            <div className={styles['books-list']}>
                <Input className={`${styles[`input`]}`} value={search} handleChange={handleChange} placeholder={"Search Books"} type={"text"} size={"medium"} hasIconRight={true} iconRight={"search"} />
                <Spacer marginBottom="3" />
                {
                    books.map(book => (
                        <BookTile key={book.id} className={styles['book-tile-container']} name={book.name} cover={book.cover} />
                    ))
                }

            </div>
            <div className={styles['highlights']}>
                <div>Highlight 1</div>
                <div>Highlight 2</div>

            </div>
        </div>
    )
}