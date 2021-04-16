import React, { useState } from "react"
import { Input, Spacer } from "../../components"
import { BookTile } from "../book"

import { HighlightList } from "./highlights-list/HighlightList"

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
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Tech',
            lastRead: 'October 18, 2017'
        },
        {
            id: "2",
            name: "Designing Data Intensive Applications",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Tech',
            lastRead: 'October 18, 2017'
        },
        {
            id: "3",
            name: "Don't Make Me Think",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Design',
            lastRead: 'October 18, 2017'
        },
        {
            id: "4",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Design',
            lastRead: 'October 18, 2017'
        },
        {
            id: "5",
            name: "To Kill a Mocking Bird",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Fiction',
            lastRead: 'October 18, 2017'
        },
        {
            id: "6",
            name: "White Tiger",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Biography',
            lastRead: 'October 18, 2017'
        }
    ]

    return (
        <div className={styles['container']}>
            <div className={styles['books-list']}>
                <div className={styles['input-container']}>
                    <Input className={`${styles[`input`]}`} value={search} handleChange={handleChange} placeholder={"Search Books"} type={"text"} size={"medium"} iconName={"search"} />
                </div>
                <Spacer marginBottom="3" />
                {
                    books.map(book => (
                        <div key={book.id} className={styles['border-bottom']}>
                            <BookTile key={book.id} className={styles['book-tile-container']} name={book.name} cover={book.cover} highlights={book.highlights} category={book.category} progress={book.progress} />
                            <Spacer marginBottom="3" />
                        </div>
                    ))
                }

            </div>

            <div className={styles['highlights']}>
                <h1 className={styles['notes-highlights-heading']}>Your Notes and Highlights</h1>
                <Spacer marginBottom="6"/>
                <div className="is-flex">
                    <img src={books[0].cover} style={{height: 80, width:60}}/>
                    <p className={styles['highlights-book-heading']}>{books[0].name}</p>
                </div>
                <div className={styles['book-highlights']}>
                    <HighlightList/>
                </div>

            </div>
        </div>
    )
}