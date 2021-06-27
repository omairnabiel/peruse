import {Icon, IconButton} from '../../components'

import styles from './HighlightItem.module.scss'

interface Props {
	cover: string
	name: string
	color: string
	text: string
	note?: string
	date: string
	location: string
}

export const HighlightItem = ({color, text, note, date, location}: React.PropsWithChildren<Props>) => {
	return (
		<div className={styles.container} style={{borderLeft: `6px solid ${color}`}}>
			<div className="flex-1 pl-3 mt-1">
				<div className="flex">
					<p className="text-xs italic">
						{location} | {date}
					</p>

					{/* Highlight Actions */}
					<div className="flex flex-1 justify-end">
						<IconButton name="star_outline" size={1.4} onClickHandler={() => {}} />
						<div className="mx-2 text-red-400">
							<IconButton name="delete" size={1.4} onClickHandler={() => {}} className="" />
						</div>
					</div>
				</div>

				{/* Highlight Text and Note */}
				<div className="font-sf-pro text-lg my-1">{text}</div>
				{note && (
					<div className="flex pb-2 items-center font-sf-pro text-sm italic text-gray-500 ">
						<Icon name="description" size={1.1} type="outlined" />

						<div className="mx-2">{note}</div>
					</div>
				)}
			</div>
		</div>
	)
}
