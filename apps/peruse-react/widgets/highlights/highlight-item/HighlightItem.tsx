import React from "react"
import { IconButton } from "../../../components"

import styles from "./HighlightItem.module.scss"

interface Props {
    color: string
    text: string
    note?: string
    date: string
    location: string
}

export const HighlightItem = ({color, text, note, date, location }: React.PropsWithChildren<Props>) => {
    return (
        <div className={styles.container} style={{borderLeft: `5px solid ${color}`}}>
            <div className={`${styles.actions}`}>
                <IconButton name="heart" size={1} onClickHandler={()=>{}}/>
                <IconButton name="ellipsis-h" size={1} onClickHandler={()=>{}}/>
            </div>
            <div>
                {location} - {date}
            </div>
            <div>
                {text}
            </div>
            {note && <div>{note}</div>}
        </div>
    )
}