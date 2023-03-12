import {atom} from 'recoil'
import {ModalType} from 'types'

interface Modal {
	modalType: ModalType | null
	modalProps?: {
		title?: string
		size?: 'xs' | 'sm' | 'md' | 'lg'
		onClose: Function
	}
}

export const modalState = atom<Modal | null>({
	default: null,
	key: 'modalState',
})
