import React, {useState, useRef, useEffect, CSSProperties} from 'react'
import {Button} from '../index'
import {Option} from '../../types'
import styles from './Select.module.scss'

interface Props {
	label: string
	options: Option[]
	handleChange: Function
	placement?: 'left' | 'right'
	isMulti?: boolean
	iconLeft?: string
	isSearchable?: boolean
}

export const Select = ({label, options, handleChange, iconLeft, placement = 'left', isMulti, isSearchable}: Props) => {
	let [isOpen, setIsOpen] = useState(false)
	let [selected, setSelected] = useState('')
	let selectRef = useRef(null)

	const selectClickHandler = () => {
		setIsOpen(!isOpen)
	}

	const optionClickHandler = (option: Option) => {
		setIsOpen(false)
		setSelected(option.label)
		handleChange(option)
	}

	const isOutsideClick = (event: MouseEvent) => {
		const clickedElement = selectRef.current as any
		if (!clickedElement?.contains(event.target)) setIsOpen(false)
	}

	useEffect(() => {
		document.addEventListener('mousedown', isOutsideClick)

		return () => document.removeEventListener('mousedown', isOutsideClick)
	}, [])

	return (
		<div ref={selectRef} className={styles.container}>
			<Button
				title={selected || label}
				onClick={selectClickHandler}
				iconLeft={iconLeft}
				iconRight="expand_more"
			/>
			{/* Dropdown Menu */}
			<div className={`${styles['menu']} ${styles[placement]}`} style={{display: isOpen ? 'block' : 'none'}}>
				{/* Menu Item */}
				{options &&
					options.map(option => (
						<div
							key={option.value}
							className={`${styles['menu-item']}`}
							onClick={() => optionClickHandler(option)}
						>
							<div className="material-icons-outlined" style={{fontSize: 18}}>
								{option.iconName}
							</div>
							{option.label}
						</div>
					))}
			</div>
		</div>
	)
}
