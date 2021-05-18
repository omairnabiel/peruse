import React, { useState } from "react";
import { HIGHLIGHT_COLOR } from "../../constants/highlight_colors";
import { HighlightItem } from "./highlight-item/HighlightItem";

import styles from "./Highlights.module.scss";

export const Highlights = () => {
    const [search, setSearch] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const books = [
        {
            id: "1",
            name: "Code Complete 2nd Edition",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: "Tech",
            lastRead: "October 18, 2017",
        },
        {
            id: "2",
            name: "Designing Data Intensive Applications",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: "Tech",
            lastRead: "October 18, 2017",
        },
        {
            id: "3",
            name: "Don't Make Me Think",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: "Design",
            lastRead: "October 18, 2017",
        },
        {
            id: "4",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: "Design",
            lastRead: "October 18, 2017",
        },
        {
            id: "5",
            name: "To Kill a Mocking Bird",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: "Fiction",
            lastRead: "October 18, 2017",
        },
        {
            id: "6",
            name: "White Tiger",
            cover: "code_complete.jpg",
            highlights: 12,
            progress: 60,
            category: "Biography",
            lastRead: "October 18, 2017",
        },
    ];

    const highlights = [
        {
            color: HIGHLIGHT_COLOR.GREEN,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "NoSQL and SQL convergence overtime",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.ROSE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.YELLOW,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.MAGENTA,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.ORANGE,
            text: `Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va,
                Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va,
                Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va`,
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.ORANGE,
            text: `Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va,
                Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va,
                Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va`,
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
        {
            color: HIGHLIGHT_COLOR.PURPLE,
            text:
                "Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va",
            note: "Greetings",
            date: "Today",
            location: "Page 82",
            name: "Design of Everyday Things",
            cover: "code_complete.jpg",
        },
    ];

    return (
        <div className={styles["container"]}>
            <div className={styles["highlights-container"]}>
                {/* Highlight Actions */}

                {/* Highlights List */}

                {highlights.map(
                    ({ color, text, note, date, name, cover, location }) => (
                        <div className={styles["highlight"]}>
                            <HighlightItem
                                color={color}
                                cover={cover}
                                name={name}
                                text={text}
                                note={note}
                                date={date}
                                location={location}
                            />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};
