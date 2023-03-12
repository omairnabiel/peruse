import {useState} from 'react'
import {useRouter} from 'next/router'

import {Navbar, Select} from 'components'
import {Option} from 'types'

export const Header = () => {
	const [selected, setSelected] = useState('books')
	const [icon, setIcon] = useState('bookmarks')
	const [showModal, setShowModal] = useState(true)
	const router = useRouter()

	const options: Option[] = [
		{
			label: 'Books',
			value: 'books',
			iconName: 'bookmarks',
		},
		{
			label: 'Highlights',
			value: 'highlights',
			iconName: 'format_color_text',
		},
	]

	const sortOptions: Option[] = [
		{
			label: 'Created Date',
			value: 'created_date',
			iconName: 'schedule',
		},
		{
			label: 'Last Read',
			value: 'last_read',
			iconName: 'bookmark_border',
		},
		{
			label: 'Most Highlighted',
			value: 'most_highlighted',
			iconName: 'trending_up',
		},
	]

	const bookSelectHandleChange = (selectedOption: Option) => {
		setIcon(selectedOption.iconName || '')
		setSelected(selectedOption.value || 'books')
		router.push('/books')
	}

	return (
		<>
			<header className="my-6">
				<Navbar />
			</header>

			<div
				className="my-24"
				style={{
					display: 'flex',
					paddingBottom: 4,
					borderBottom: `1px solid hsl(220, 9%, 87%)`,
				}}
			>
				<Select label="Books" options={options} handleChange={bookSelectHandleChange} iconLeft={icon} />
				<div style={{flex: 5, justifyContent: 'flex-end'}} className="flex justify-end">
					<Select
						label="Last Read"
						placement="right"
						options={sortOptions}
						handleChange={() => {}}
						iconLeft="sort"
					/>
				</div>
			</div>
		</>
	)
}
