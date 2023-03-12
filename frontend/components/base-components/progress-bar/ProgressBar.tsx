import React from "react";

import styles from "./ProgressBar.module.scss";

interface Props {
    heading?: string;
    progress: number;
    labelLeft?: string;
    labelRight?: string;
}
export const ProgressBar = ({
    heading,
    progress,
    labelLeft,
    labelRight,
}: Props) => {
    return (
        <>
            {heading && <div className={styles["heading"]}>{heading}</div>}
            {(labelLeft || labelRight) && (
                <div className={styles["labels"]}>
                    <div>{labelLeft}</div>
                    <div>{labelRight}</div>
                </div>
            )}
            <div className={styles["thumb"]}>
                <div
                    className={styles["progress-indicator"]}
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </>
    );
};
