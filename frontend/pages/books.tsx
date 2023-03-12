import React from 'react'
import {useRecoilState} from 'recoil'

import {BookTile, Button, Header} from 'components'
import {books} from 'store/data'
import styles from 'pages/books.module.scss'
import {modalState} from 'recoil/modals'

const Books = () => {
	const [_, setModal] = useRecoilState(modalState)

	return (
		<>
			<div className="px-48">
				<Header />

				<div className="flex justify-end my-16">
					<Button
						className="button-pink"
						title="Upload books"
						onClick={() => {
							setModal({
								modalType: 'UploadFileModal',
								modalProps: {
									size: 'md',
									title: 'Upload File',
									onClose: () => setModal({modalType: null}),
								},
							})
						}}
					/>
				</div>

				<main className={styles.grid}>
					{books.map(book => (
						<BookTile
							key={book.id}
							className="grid"
							name={book.name}
							cover={book.cover}
							highlights={book.highlights}
							category={book.category}
							onPage={book.onPage}
							totalPages={book.totalPages}
							author="Writer"
						/>
					))}
				</main>
			</div>
		</>
	)
}

export default Books
