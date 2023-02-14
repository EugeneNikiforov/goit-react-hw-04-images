import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import css from './Modal.module.scss';

export default function Modal({ children, onClose }) {
    // componentDidMount() {
    //     window.addEventListener(`keydown`, this.handleKeyDown);
    // }
    // componentWillUnmount() {
    //     window.removeEventListener(`keydown`, this.handleKeyDown);
    // }
    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.code === `Escape`) {
                onClose();
            };
        };
        window.addEventListener(`keydown`, handleKeyDown);
        return (() => {
            window.removeEventListener(`keydown`, handleKeyDown);
        });
    }, [onClose]);

    const handleBackdropClick = (e) => {
        const { target, currentTarget } = e;
        e.stopPropagation();
        if (target === currentTarget) {
            onClose();
        }
    };
    // const { children } = this.props;
    return createPortal(
        <div className={css.overlay} onClick={handleBackdropClick}>
            <div className={css.modal}>
                {children}
            </div>
        </div>, document.querySelector(`#modal-root`)
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired
};