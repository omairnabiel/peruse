import React, {useState} from 'react'

import {HighlightItem} from '../highlight-item'
import {highlights} from '../../store/data'

import styles from './Highlights.module.scss'

export const Highlights = () => {
	const [search, setSearch] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<div className={styles['container']}>
			<div className={styles['highlights-container']}>
				{highlights.map(({color, text, note, date, name, cover, location}) => (
					<div className={styles['highlight']}>
						<HighlightItem
							color={color}
							cover={cover}
							name={name}
							text={text}
							note={note}
							date={date}
							location={location}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
