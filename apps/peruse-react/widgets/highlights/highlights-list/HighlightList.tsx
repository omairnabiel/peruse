import React from "react"
import { HIGHLIGHT_COLOR } from "../../../constants/highlight_colors"
import { HighlightItem } from "../highlight-item/HighlightItem"

import styles from "./HighlightList.module.scss"

const highlights = [
    {
        color: HIGHLIGHT_COLOR.BLUE,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: HIGHLIGHT_COLOR.RED,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: HIGHLIGHT_COLOR.YELLOW,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: HIGHLIGHT_COLOR.MAGENTA,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: HIGHLIGHT_COLOR.PURPLE,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: HIGHLIGHT_COLOR.ORANGE,
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    }
]
export const HighlightList = () => {
    return (
        <div>
            {highlights.map(({color, text,note,date,location}) => (
            <HighlightItem 
                color={color} 
                text={text} 
                note={note} 
                date={date} 
                location={location} 
            />)
            )}
        </div>
    )
}