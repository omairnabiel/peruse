import { Icon,IconButton } from "../../../components"

import styles from "./HighlightItem.module.scss"

interface Props {
    color: string
    text: string
    note?: string
    date: string
    location: string
}

export const HighlightItem = ({ color, text, note, date, location }: React.PropsWithChildren<Props>) => {
    return (
        <div className={styles.container}>
            <div style={{ border: `4px solid ${color}`, borderRadius: 12 }} />

            <div className={styles['highlight-content']}>
                <div className={`${styles.actions}`}>
                    <div>
                        <IconButton name="favorite_border" size={1.5} onClickHandler={() => { }} />
                    </div>
                    <div>
                        <IconButton name="more_horiz" size={1.5} onClickHandler={() => { }} />
                    </div>
                </div>

                <div className={styles['highlight-info']}>
                    {location}
                </div>

                <div className={styles['highlight-text']}>
                    {text}
                </div>

                {note && <div className={styles['highlight-note']}>
                    <Icon name="description" size={1.2} type="outlined"/>
                    <div>
                        {note}
                    </div>
                </div>}

            </div>

        </div>
    )
}