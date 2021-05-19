import React from "react";
import { BookTile } from "./book-tile/BookTile";

import styles from "./Books.module.scss";

const books = [
    {
        id: "1",
        name: "Code Complete 2nd Edition",
        cover: "code_complete.jpg",
        highlights: 12,
        progress: 60,
        category: "Tech",
        lastRead: "October 18, 2017",
        onPage: 212,
        totalPages: 600,
    },
    {
        id: "2",
        name: "Designing Data Intensive Applications",
        cover: "data_intensive.jpg",
        highlights: 12,
        progress: 60,
        category: "Tech",
        lastRead: "October 18, 2017",
        onPage: 212,
        totalPages: 600,
    },
    {
        id: "3",
        name: "Don't Make Me Think",
        cover: "dont_make_me_think.jpg",
        highlights: 12,
        progress: 60,
        category: "Design",
        lastRead: "October 18, 2017",
        onPage: 212,
        totalPages: 600,
    },
    {
        id: "4",
        name: "Design of Everyday Things",
        cover: "everyday_things.png",
        highlights: 12,
        progress: 60,
        category: "Design",
        lastRead: "October 18, 2017",
        onPage: 212,
        totalPages: 600,
    },
    {
        id: "5",
        name: "To Kill a Mocking Bird",
        cover: "mocking_bird.jpg",
        highlights: 12,
        progress: 60,
        category: "Fiction",
        lastRead: "October 18, 2017",
        onPage: 212,
        totalPages: 600,
    },
    {
        id: "6",
        name: "White Tiger",
        cover: "white_tiger.jpg",
        highlights: 12,
        progress: 60,
        category: "Autobiography",
        lastRead: "October 18, 2017",
        onPage: 212,
        totalPages: 600,
    },
];
export const Books = () => {
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
                    onPage={book.onPage}
                    totalPages={book.totalPages}
                />
            ))}
        </div>
    );
};
