import React from 'react';
import PropTypes from "prop-types";
import Modal from '../Modal/Modal';
import css from './ImageGalleryItem.module.scss';


export default function ImageGalleryItem({ bigPhoto, smallPhoto, tag }) {
    const [showModal, setShowModal] = React.useState(false);

    const runModal = () => {
        setShowModal((prev) => !prev);
    };
    // const { bigPhoto, smallPhoto, tag } = this.props;
    return (
        <div className={css.imageGalleryItem}>
            <img className={css.imageGalleryItem_image} onClick={runModal} src={smallPhoto} alt={tag} />
            {showModal && (
                <Modal onClose={runModal}>
                    <img src={bigPhoto} alt={tag} />
                </Modal>
            )}
        </div>
    );
};

ImageGalleryItem.propTypes = {
    bigPhoto: PropTypes.string.isRequired,
    smallPhoto: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired
};
