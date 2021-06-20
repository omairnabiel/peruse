import React, {useState} from 'react'

import {IconButton, Input, Logo} from '../../components'

import styles from './Navbar.module.scss'

export const Navbar = () => {
	const actionButtons = [
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
			<div className="w-full align-center">
				<input
					value={search}
					placeholder="Quick Search your Books and Highlights"
					type="text"
					onChange={handleChange}
					className="text-lg w-4/5"
				/>
			</div>

			{/* Action Buttons */}
			<div>
				{actionButtons.map(button => {
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
