import React from "react";

import styles from "./Card.module.scss";
interface Props {
    className?: string;
}

export const Card = ({
    className,
    children,
}: React.PropsWithChildren<Props>) => {
    return (
        <>
            <div className={`card ${styles.container} ${className || ""}`}>
                {children}
            </div>
        </>
    );
};
