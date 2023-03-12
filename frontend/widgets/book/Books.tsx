import React from 'react'

import {BookTile} from '../book-tile/BookTile'
import {books} from '../../store/data'

import styles from './Books.module.scss'

export const Books = () => {
	return (
		<div className={styles['book-grid']}>
			{books.map(book => (
				<BookTile
					key={book.id}
					className={styles['book-tile-container']}
					name={book.name}
					cover={book.cover}
					highlights={book.highlights}
					category={book.category}
					onPage={book.onPage}
					totalPages={book.totalPages}
				/>
			))}
		</div>
	)
}
