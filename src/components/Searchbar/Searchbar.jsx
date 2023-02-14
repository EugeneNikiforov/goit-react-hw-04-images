import React from "react";
import PropTypes from "prop-types";
import { ImSearch } from "react-icons/im";
import css from './Searchbar.module.scss';

export default function Searchbar({ onSubmit }) {
    const [images, setImages] = React.useState("");
    const handleNameChange = (e) => {
        setImages(e.currentTarget.value.toLowerCase());
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (images.trim() === "") {
            alert("Введите имя");
            return;
        }
        onSubmit(images);
        setImages("");
    };

    return (
        <div className={css.searchbar}>
            <form className={css.searchForm} onSubmit={handleSubmit}>
                <button type="submit" className={css.searchForm_button}>
                    <ImSearch className={css.searchForm_button_label} />
                </button>
                <input
                    className={css.searchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={images}
                    onChange={handleNameChange}
                />
            </form>
        </div>
    );
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired
};