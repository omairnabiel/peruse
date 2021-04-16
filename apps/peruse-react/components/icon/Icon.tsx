import React from "react"

interface Props {
    name: string
    size: number
    type: "filled" | "outlined"
}
export const Icon = ({ name, size, type }: Props) => {
    const iconClass = type === "outlined" ? "material-icons-outlined" : "material-icons"
    return (
        <span className={iconClass} style={{fontSize: `${size}rem`}}>
            {name}
        </span>)
}