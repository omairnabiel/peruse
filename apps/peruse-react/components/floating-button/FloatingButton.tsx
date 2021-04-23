import React from "react"

import styles from "./FloatingButton.module.scss"

import { Icon } from "../icon/Icon"


interface Props {
    top?: string
    bottom?: string
    left?: string
    right?: string
    iconName: string
    className?: string
}

export const FloatingButton = ({ iconName, left, right, bottom, top, className }: Props) => {

    return (
        <div
            className={`${styles['container']} ${className || ""}`}
            style={{
                top: !!top ? `${top}px` : "",
                bottom: !!bottom ? `${bottom}px` : "",
                left: !!left ? `${left}px` : "",
                right: !!right ? `${right}px` : ""
            }} >
            <div>
                <Icon name={iconName} size={2} type="outlined" />
            </div>
        </div>
    )
}