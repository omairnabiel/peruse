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
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Music',
            lastRead: 'October 18, 2017'
        },
        {
            id: "2",
            name: "Designing Data Intensive Applications",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Music',
            lastRead: 'October 18, 2017'
        },
        {
            id: "3",
            name: "Don't Make Me Think",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Music',
            lastRead: 'October 18, 2017'
        },
        {
            id: "4",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Music',
            lastRead: 'October 18, 2017'
        },
        {
            id: "5",
            name: "To Kill a Mocking Bird",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Music',
            lastRead: 'October 18, 2017'
        },
        {
            id: "6",
            name: "White Tiger",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: 'Music',
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
                        <>
                            <div>
                                <div>
                                    <img src={book.cover} />
                                </div>
                                <div>{book.name}</div>
                            </div>
                            <Spacer marginBottom="3" />
                        </>
                    ))
                }

            </div>

            <div className={styles['highlights']}>
                <h1 className={styles['notes-highlights-heading']}>Your Notes and Highlights</h1>
                <Spacer marginBottom="6" />
                <div>
                    <BookTile name={books[0].name} cover={books[0].cover} category={books[0].category} progress={books[0].progress}  className={styles['book-heading']}/>
                </div>
                <div className={styles['book-highlights']}></div>

            </div>
        </div>
    )
}