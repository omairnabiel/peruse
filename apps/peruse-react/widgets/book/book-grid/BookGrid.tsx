import React from "react";
import { FloatingButton, Tooltip } from "../../../components";
import { BookTile } from "../book-tile/BookTile";

import styles from "./BookGrid.module.scss";

const books = [
    {
        id: "1",
        name: "Code Complete 2nd Edition",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Music",
        lastRead: "October 18, 2017",
    },
    {
        id: "2",
        name: "Designing Data Intensive Applications",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Music",
        lastRead: "October 18, 2017",
    },
    {
        id: "3",
        name: "Don't Make Me Think",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Music",
        lastRead: "October 18, 2017",
    },
    {
        id: "4",
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Music",
        lastRead: "October 18, 2017",
    },
    {
        id: "5",
        name: "To Kill a Mocking Bird",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Music",
        lastRead: "October 18, 2017",
    },
    {
        id: "6",
        name: "White Tiger",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Music",
        lastRead: "October 18, 2017",
    },
];
export const BookGrid = () => {
    return (
        <div className={styles["book-grid"]}>
            {books.map((book) => (
                <BookTile
                    key={book.id}
                    className={styles["book-tile-container"]}
                    name={book.name}
                    cover={book.cover}
                    highlights={book.highlights}
                    category={book.category}
                    progress={book.progress}
                />
            ))}
        </div>
    );
};
