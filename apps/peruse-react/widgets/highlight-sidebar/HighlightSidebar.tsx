import React from 'react'

import {books} from '../../store/data'

import styles from './HighlightSidebar.module.scss'

interface Props {}

const Book = ({name, cover, author}: any) => (
	<div className={styles['sidebar-book']}>
		<div className="flex justify-center">
			<img src={cover} className={styles.image} />
		</div>
		<div className="text-center text-base text-gray-800 mt-3">{name}</div>
		<div className="text-center text-sm text-gray-500">{author || 'By John Oustehart'}</div>
	</div>
)

export const HighlightSidebar = ({}: React.PropsWithChildren<Props>) => {
	return (
		<div>
			<input type="text" placeholder="Search Books" className="mt-2 mb-4" />
			<div className={`${styles.sidebar}`}>
				{books.map(book => (
					<div
						key={book.id}
						className="flex flex-1 justify-center  pt-4 pb-4 border-b cursor-pointer rounded bg-gray-100"
					>
						<Book name={book.name} cover={book.cover} />
					</div>
				))}
			</div>
		</div>
	)
}
