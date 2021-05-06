import React, { PropsWithChildren } from "react";

import styles from "./Modal.module.scss";

interface Props {
    title: string;
    visibility?: "hidden" | "visible";
    size: "sm" | "md" | "lg";
}

export const Modal = ({
    title,
    size,
    visibility = "hidden",
    children,
}: PropsWithChildren<Props>) => {
    return (
        <div className={`${styles.overlay} ${visibility}`}>
            <div>{children}</div>
        </div>
    );
};
