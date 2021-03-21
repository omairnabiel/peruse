import React from "react"

import styles from "./Card.module.scss"
interface Props {
    className?: string;
}

export const Card= ({ className, children }: React.PropsWithChildren<Props>) => {
    return (
        <>
            <div className={`card ${styles.container} ${className || ""}`}>
                {children}
            </div>
        </>
    )
}

export const CardHeader= ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <header className="card-header">
            {children}
        </header>
    )
}

interface CardContentProps {
    className?: string;
}
export const CardContent = ({ children, className }: React.PropsWithChildren<CardContentProps>) => {
    return (
        <div className={`"card-content ${styles['no-padding']}`} style={{height:'100%'}}>
            <div className={`content  ${className || ""}`}>
                {children}
            </div>
        </div>
    )
}

export const CardFooter = ({ children }: React.PropsWithChildren<{}>) => {
    return (
        <footer className="card-footer">
            {children}
        </footer>
    )
}

