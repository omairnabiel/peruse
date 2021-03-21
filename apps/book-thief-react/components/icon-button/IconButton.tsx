import React from "react"

import style from "./IconButton.module.scss"

interface Props {
     name: string;
     size: number;
     title?: string
     className?: string;
     onClickHandler: React.MouseEventHandler<HTMLElement>
}
export const IconButton = ({name, title, size, onClickHandler}:Props) => {
    return (
        <span className="icon-text" onClick={onClickHandler}>
            <span className={`icon ${style[`scale-hover`]}`}>
                <i className={`fas fa-${name}`} style={{fontSize: `${size}rem`}}></i>
            </span>
            {title && <span>{title}</span>}
        </span>
    )
}