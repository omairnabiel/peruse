import React from "react";
import { Icon } from "../../components";
import { ProgressBar } from "../../components/progress-bar/ProgressBar";

import styles from "./BookTile.module.scss";
interface Props {
    name: string;
    cover: string;
    highlights?: number;
    category?: string;
    progress?: number;
    lastRead?: string;
    onPage: number;
    totalPages: number;
    className?: string;
}

export const BookTile = ({
    cover,
    name,
    highlights,
    onPage,
    totalPages,
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
                    {/* TODO: Add a single div wrapping highlights and progress to improve CSS */}
                    {/* Number of highlights */}
                    <div className={styles["highlights"]}>
                        <Icon
                            name="format_color_text"
                            type="outlined"
                            size={0.89}
                        />

                        <div>Highlights</div>
                        <div>{highlights}</div>
                    </div>

                    {/* Book progress */}
                    <div className={styles["progress"]}>
                        <ProgressBar
                            labelLeft={`${Math.floor(
                                (onPage / totalPages) * 100
                            )}% Complete`}
                            labelRight={`${onPage}/${totalPages} pages`}
                            progress={60}
                        />
                    </div>
                </div>
                {children}
            </div>
        </>
    );
};
