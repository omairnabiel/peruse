import React from "react";
import { Icon } from "../../../components";

import styles from "./BookTile.module.scss";
interface Props {
    name: string;
    cover: string;
    highlights?: number;
    category?: string;
    progress?: number;
    lastRead?: string;
    className?: string;
}

export const BookTile = ({
    cover,
    name,
    highlights,
    progress,
    lastRead,
    category,
    className,
    children,
}: React.PropsWithChildren<Props>) => {
    return (
        <>
            <div className={`${styles["container"]}  ${className || ""}`}>
                {/* Cover Image */}
                <div className={styles["cover"]}>
                    <img src={cover} className={styles["image"]} />
                </div>
                {/* Book Info */}
                <div className={styles["book-info"]}>
                    <div className={styles["title-container"]}>
                        {/* Category */}
                        {category && (
                            <div className={`tag is-dark ${styles["tag"]}`}>
                                {category}
                            </div>
                        )}
                        {/* Title */}
                        <div className={styles["title"]}>{name}</div>
                        {/* Author */}
                        <div className={styles["author"]}>
                            by John Oustehart
                        </div>
                    </div>
                    <div className={styles["divider"]} />
                    {/* Number of highlights */}
                    {highlights && (
                        <div className={styles["read-info"]}>
                            <Icon
                                name="format_color_text"
                                type="outlined"
                                size={1}
                            />
                            <div className={styles["read-info-text"]}>
                                Highlights
                            </div>
                            <div>{highlights}</div>
                        </div>
                    )}
                    {/* Book progress */}
                    {progress && (
                        <div className={styles["read-info"]}>
                            <Icon
                                name="import_contacts"
                                type="outlined"
                                size={1}
                            />
                            <div className={styles["read-info-text"]}>
                                Progress
                            </div>
                            <div>{progress}%</div>
                        </div>
                    )}
                    {/* Last read date */}
                    {/* {lastRead && (
                        <div className={styles["legend"]}>
                            Last read on {lastRead}%
                        </div>
                    )} */}
                </div>
                {children}
            </div>
        </>
    );
};
