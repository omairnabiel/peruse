import React from "react"

interface Props {
    name: string
    size: number
    className?: string
    type: "filled" | "outlined"
}
export const Icon = ({ name, size, className, type }: Props) => {
    let iconClass = type === "outlined" ? "material-icons-outlined" : "material-icons"
    iconClass += className ? ` ${className}` : ""
    
    return (
        <span className={iconClass} style={{fontSize: `${size}rem`}}>
            {name}
        </span>)
}