import React, { PropsWithChildren } from "react";
import { Card } from "../card/Card";
import { IconButton } from "../icon-button/IconButton";
import { Icon } from "../icon/Icon";

import styles from "./Modal.module.scss";

interface Props {
    title?: string;
    isOpen: boolean;
    size?: "xs" | "sm" | "md" | "lg";
    onClose: Function;
}

/**
 * Modal provides the bare-bone functionality such as onClose function, close on outside click and basic styling.
 * The content body of modal is passed as a child prop
 * @param {string}                  title
 * @param {boolean}                 isOpen
 * @param {("xs" | "sm" | "md" | "lg")}    size
 * @param {function}                onCLose
 */
export const Modal = ({
    title,
    size = "md",
    isOpen = false,
    onClose,
    children,
}: PropsWithChildren<Props>) => {
    const visibility = isOpen ? "visible" : "hidden";
    return (
        /** Modal Overlay to blur the background of modal and also to close modal when clicked outside */
        <div
            onClick={() => onClose()}
            className={`${styles.overlay} ${styles[visibility]}`}
        >
            <div className={styles[size]}>
                <Card>
                    {/* Header */}
                    <div className={styles.header}>
                        <div>{title}</div>
                        <IconButton
                            name="close"
                            size={1.5}
                            onClickHandler={() => onClose()}
                        />
                    </div>

                    {/* Content */}
                    {/* {children} */}
                </Card>
            </div>
        </div>
    );
};
