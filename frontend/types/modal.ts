export type ModalType = 'UploadFileModal'

export interface ModalProps {
	title?: string
	size?: 'xs' | 'sm' | 'md' | 'lg'
	onClose?: Function
}
