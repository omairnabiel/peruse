import React, {useState} from 'react'

import {IconButton, Input, Logo} from '../../components'

import styles from './Navbar.module.scss'

export const Navbar = () => {
	const navButtons = [
		{
			name: 'notifications',
			onClickHandler: () => {},
		},
		{
			name: 'bolt',
			onClickHandler: () => {},
		},
		{
			name: 'account_circle',
			onClickHandler: () => {},
		},
	]
	const [search, setSearch] = useState('')

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value)
	}
	return (
		<nav className="flex items-center justify-between">
			<Logo />

			{/* Navbar Search */}
			<input
				value={search}
				placeholder="Quick Search your Books and Highlights"
				type="text"
				onChange={handleChange}
				className={`text-lg w-3/5 ${styles.search}`}
			/>

			{/* Navbar Buttons */}
			<div>
				{navButtons.map(button => {
					return (
						<span key={button.name} className="ml-3">
							<IconButton
								key={button.name}
								name={button.name}
								size={1.5}
								onClickHandler={button.onClickHandler}
							/>
						</span>
					)
				})}
			</div>
		</nav>
	)
}
