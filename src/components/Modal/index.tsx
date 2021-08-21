import React from 'react'
import ReactDOM from 'react-dom'

import './styles.scss'

interface ModalProps {
    open: boolean
    onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
    if (!open) {
        return null
    }
    return ReactDOM.createPortal(
        <>
            <div className="modal">
                <button type="button" onClick={onClose}>
                    Close Modal
                </button>
                {children}
            </div>
        </>,
        document.body
    )
}

export default Modal
