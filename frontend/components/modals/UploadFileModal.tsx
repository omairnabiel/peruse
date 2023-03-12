import React, {PropsWithChildren} from 'react'
import {Card} from 'components'

import {ModalProps} from 'types'
import styles from './Modal.module.scss'

/**
 * Modal provides the bare-bone functionality such as onClose function, close on outside click and basic styling.
 * The content body of modal is passed as a child prop
 * @param {string}                          title
 * @param {("xs" | "sm" | "md" | "lg")}     size
 * @param {function}                        onCLose
 */
export const UploadFileModal = ({title, size = 'md', onClose, children}: PropsWithChildren<ModalProps>) => {
	return (
		/** Modal Overlay to blur the background of modal and also to close modal when clicked outside */
		<div onClick={() => onClose && onClose()} className={`${styles.overlay}`}>
			<div className={styles[size]}>
				<Card>
					{/* Header */}
					<div className={styles.header}>
						<div>{title}</div>
					</div>

					{/* Content */}
					{children}
				</Card>
			</div>
		</div>
	)
}
