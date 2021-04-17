import React, { useState } from "react"
import { Button, Input, Spacer } from "../../components"
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
        <>

            {/* Highlight Heading */}
            <Spacer marginTop="6" />
            <h1 className={styles['notes-highlights-heading']}>Your Notes and Highlights</h1>
            <Spacer marginBottom="6" />

            <div className={styles['highlight-sort-actions']}>
                        <Button title="All" hasIcon={true} iconName="done_all" onClick={() => { }} />
                        <Button title="Favorites"  hasIcon={true} iconName="favorite" onClick={() => { }} />
                        <Button title="Books"  hasIcon={true} iconName="book" onClick={() => { }} />
                        <Button title="Web"  hasIcon={true} iconName="public" onClick={() => { }} />
            </div>
            <div className={styles['container']}>

                {/* Highlight Actions */}
                <div>


                    {/* Highlights List */}
                    <HighlightList />
                </div>
            </div>

        </>
    )
}