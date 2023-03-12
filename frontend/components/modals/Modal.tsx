import {UploadFileModal} from 'components'
import {useRecoilState} from 'recoil'
import {modalState} from 'recoil/modals'
import {ModalType} from 'types'

export const Modal = () => {
	let currentModal
	const [modal] = useRecoilState(modalState)

	switch (modal?.modalType) {
		case 'UploadFileModal':
			currentModal = (
				<UploadFileModal
					size={modal.modalProps?.size}
					onClose={modal?.modalProps?.onClose}
					title={modal.modalProps?.title}
				/>
			)
			break
		default:
			currentModal = null
	}

	return currentModal
}
