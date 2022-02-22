import * as React from 'react';
import ReactDOM from 'react-dom';
import Close from './Close';
import './modal.css';

interface IModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    onClose: () => void;
    container?: Element | null;
    ref?: React.Ref<HTMLDivElement>;
}

const Modal = React.forwardRef((props : IModalProps, ref: React.Ref<HTMLDivElement>) => {
    const { children, isOpen, onClose, container } = props;

    const refContainer = React.useRef<HTMLDivElement | null>(null);
    if (refContainer.current === null) {
      refContainer.current = document.createElement('div');
    }

    const handleClose = React.useCallback(() => {
        onClose && onClose();
    }, [onClose]);

    React.useEffect(() => {
        refContainer.current && document.body.appendChild(refContainer.current);
    } , [isOpen]);

    const containerModal = refContainer.current;

    return isOpen && containerModal ? ReactDOM.createPortal(
        <div className="Modal" ref={ref}>
            <div className="Modal__overlay" onClick={handleClose} />
            <div className="Modal__content">
                <div className="Modal__header">
                    <div className="Modal__close">
                        <Close onClick={handleClose}/>
                    </div>
                </div>
                <div className="Modal__body">{children}</div>
            </div>
        </div>,
        refContainer.current) : null;
});

export default Modal;