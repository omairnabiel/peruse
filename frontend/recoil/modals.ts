import {atom} from 'recoil'
import {ModalProps, ModalType} from 'types'

interface Modal {
	modalType: ModalType | null
	modalProps?: ModalProps
}

export const modalState = atom<Modal | null>({
	default: null,
	key: 'modalState',
})
