import React from "react";

import styles from "./Button.module.scss";

interface Props {
    title: string;
    clasName?: string;

    iconRight?: string;
    iconLeft?: string;
    onClick: React.MouseEventHandler;
}
export const Button = ({
    title,
    onClick,
    iconLeft,
    iconRight,
    children,
}: React.PropsWithChildren<Props>) => {
    return (
        <div className={styles["button"]} onClick={onClick}>
            {iconLeft && (
                <div
                    className={`material-icons-outlined ${styles["button-icon"]}`}
                >
                    {iconLeft}
                </div>
            )}
            {title}
            {iconRight && (
                <div
                    className={`material-icons-outlined ${styles["button-icon"]}`}
                >
                    {iconRight}
                </div>
            )}
        </div>
    );
};
