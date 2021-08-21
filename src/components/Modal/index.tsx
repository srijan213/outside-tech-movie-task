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
            <div
                role="presentation"
                className="modal"
                onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                }}
            >
                <div className="close" role="presentation" onClick={onClose}>
                    x
                </div>
                {children}
            </div>
        </>,
        document.body
    )
}

export default Modal
