import React, {useState} from 'react'

import {HighlightItem} from '../highlight-item'
import {HighlightSidebar} from '../highlight-sidebar'

import {highlights, books} from '../../store/data'

import styles from './Highlights.module.scss'

export const Highlights = () => {
	const [search, setSearch] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}

	return (
		<div className="flex">
			<HighlightSidebar />
			<div className={styles['container']}>
				<div className="flex mt-4 mb-12 w-2/4">
					<div style={{height: 105, width: 85}}>
						<img src={books[1].cover} className={styles['image']} />
					</div>
					<div className="pl-3">
						<p className="text-sm whitespace-nowrap text-gray-800">{books[1].name}</p>
						<p className=" text-xs mt-2 text-gray-500"> by John Osutehart </p>
						<p className=" text-xs mt-1 text-gray-500"> Last highlight on 21 October, 2021 </p>
					</div>
				</div>
				<div className={styles['highlight-heading']}>11 Highlights</div>
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
