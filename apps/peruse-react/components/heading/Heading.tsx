import React from "react"

import styles from "./Heading.module.scss"

interface Props {
    size: "small" | "medium" | "large";
    title: string;
    className?: string
}
export const Heading = ({ size, title, className }: Props) => {
   return (
       <div className={`${styles[size]} ${className || ""}`}>{title}</div>
   )
}