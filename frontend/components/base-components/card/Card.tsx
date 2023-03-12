import React from "react";

import styles from "./Card.module.scss";

export const Card = ({ children }: React.PropsWithChildren<{}>) => {
    return <div className={styles.container}>{children}</div>;
};
