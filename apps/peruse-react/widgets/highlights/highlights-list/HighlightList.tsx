import React from "react"
import { HighlightItem } from "../highlight-item/HighlightItem"

import styles from "./HighlightList.module.scss"

const highlights = [
    {
        color: 'green',
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: 'red',
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: 'blue',
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: 'pink',
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: 'yellow',
        text: 'Lorem ipsum , lorem ipsum important. Bievenue. Bonjour ca va',
        note: 'Greetings',
        date: 'Today',
        location: 'Page 82'
    },
    {
        color: 'orange',
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