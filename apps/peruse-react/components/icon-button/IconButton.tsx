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
        <span style={{cursor: 'pointer'}} className="icon-text" onClick={onClickHandler}>
            <span className={`icon ${style[`scale-hover`]}`}>
                <i className="material-icons-outlined" style={{fontSize: `${size}rem`}}>{name}</i>
            </span>
            {title && <span>{title}</span>}
        </span>
    )
}