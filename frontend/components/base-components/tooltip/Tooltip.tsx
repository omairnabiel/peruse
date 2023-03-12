import React, { PropsWithChildren } from "react";

import styles from "./Tooltip.module.scss";

interface Props {
    title: string;
    position: "top" | "bottom" | "left" | "right";
}

export const Tooltip = ({
    title,
    position,
    children,
}: PropsWithChildren<Props>) => {
    return (
        <div className={styles.relative}>
            <div className={`${styles[position]} ${styles.tooltip}`}>
                {title}
            </div>
            {children}
        </div>
    );
};
