import React from "react"
import { HIGHLIGHT_COLOR } from "../../../constants/highlight_colors"
import { HighlightItem } from "../highlight-item/HighlightItem"

import styles from "./HighlightList.module.scss"

const highlights = [
    {
        color: HIGHLIGHT_COLOR.GREEN,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'NoSQL and SQL convergence overtime',
        date: 'Today',
        location: 'Page 82',
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
    },
    {
        color: HIGHLIGHT_COLOR.ROSE,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82',
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
    },
    {
        color: HIGHLIGHT_COLOR.YELLOW,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82',
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
    },
    {
        color: HIGHLIGHT_COLOR.MAGENTA,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82',
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
    },
    {
        color: HIGHLIGHT_COLOR.PURPLE,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82',
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
    },
    {
        color: HIGHLIGHT_COLOR.ORANGE,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82',
        name: "Design of Everyday Things",
        cover: "code_complete.jpg",
    }
]
export const HighlightList = () => {
    return (
        <div>
            {highlights.map(({color, text,note,date, name, cover ,location}) => (
            <HighlightItem 
                color={color} 
                cover={cover}
                name={name}
                text={text} 
                note={note} 
                date={date} 
                location={location} 
            />)
            )}
        </div>
    )
}