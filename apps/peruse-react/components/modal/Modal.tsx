import React, { PropsWithChildren } from "react";
import { IconButton } from "../icon-button/IconButton";
import { Icon } from "../icon/Icon";

import styles from "./Modal.module.scss";

interface Props {
    title?: string;
    isOpen: boolean;
    size?: "sm" | "md" | "lg";
    onClose: Function;
}

/**
 * Modal provides the bare-bone functionality such as onClose function, close on outside click and basic styling.
 * The content within modal is passed as a child prop to keep it dynamic
 * @param {string}                  title
 * @param {boolean}                 isOpen
 * @param {("sm" | "md" | "lg")}    size
 * @param {function}                onCLose
 */
export const Modal = ({
    title,
    size,
    isOpen = false,
    onClose,
    children,
}: PropsWithChildren<Props>) => {
    const visibility = isOpen ? "visible" : "hidden";
    return (
        /** Modal Overlay to blur the background of modal and also to close modal on when clicked outside */
        <div
            onClick={() => onClose()}
            className={`${styles.overlay} ${styles[visibility]}`}
        >
            <div>
                {/* Header */}
                <div className={styles.header}>
                    <div>{title}</div>
                    <IconButton
                        name="close"
                        size={2}
                        onClickHandler={onClose()}
                    />
                </div>

                {/* Content */}
                {children}
            </div>
        </div>
    );
};
