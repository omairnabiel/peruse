import { Icon, IconButton, Spacer, Tooltip } from "../../../components";

import styles from "./HighlightItem.module.scss";

interface Props {
    cover: string;
    name: string;
    color: string;
    text: string;
    note?: string;
    date: string;
    location: string;
}

export const HighlightItem = ({
    color,
    text,
    note,
    cover,
    name,
    date,
    location,
}: React.PropsWithChildren<Props>) => {
    return (
        <div className={styles.container}>
            {/* Highlight Color Bar */}
            <div style={{ border: `2px solid ${color}`, borderRadius: 12 }} />

            <div className={styles["highlight-content"]}>
                <div className={styles["title-bar"]}>
                    {/*  Highlight Book Heading */}
                    <div className="is-flex">
                        <img
                            src={cover}
                            className={styles["image"]}
                            style={{ height: 42, width: 32 }}
                        />
                        <div className={styles["book-info"]}>
                            <p className={styles["book-title"]}>{name}</p>
                            <p className={styles["highlight-info"]}>
                                {location} - {date}
                            </p>
                        </div>
                    </div>

                    {/* Highlight Actions */}
                    <div className={`is-flex ${styles.actions}`}>
                        {/* Mark favorite button  */}
                        <Tooltip title="Favourite" position="bottom">
                            <IconButton
                                name="favorite_border"
                                size={1.5}
                                onClickHandler={() => {}}
                            />
                        </Tooltip>
                        {/* Spacing */}
                        <Spacer marginLeft="1" marginRight="1" />

                        {/* Remove button */}
                        <IconButton
                            name="delete"
                            size={1.5}
                            onClickHandler={() => {}}
                        />
                    </div>
                </div>

                {/* Highlight Text */}
                <div className={styles["highlight-text"]}>{text}</div>

                {/* Highlight Note */}
                {note && (
                    <div className={styles["highlight-note"]}>
                        <Icon name="description" size={1.2} type="outlined" />
                        <div>{note}</div>
                    </div>
                )}
            </div>
        </div>
    );
};
