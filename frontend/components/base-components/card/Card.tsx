import React from 'react'

import styles from './Card.module.scss'

export const Card = ({children, className}: React.PropsWithChildren<{className?: string}>) => {
	return <div className={`${styles.container} ${className}`}>{children}</div>
}
