import React from "react"
import { BookTile } from "../book-tile/BookTile"

import styles from "./BookGrid.module.scss"

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
export const BookGrid = () => {
    return (
        <div className={styles['book-grid']}>
            {
                books.map(book => (
                <div className={styles['book-tile-container']} key={book.id}>
                <BookTile name={book.name} cover={book.cover}/>
                </div>
                ))
            }
        </div>
    )
}