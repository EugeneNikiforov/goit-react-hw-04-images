import React from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import css from './App.module.scss';

export default function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [page, setPage] = React.useState(1);
 
  const handleFormSubmit = (e) => {
    setSearchValue(e);
    setPage(1);
    setImages([]);
  };

  React.useEffect(() => {
    if (searchValue) {
      getImageFetch();
      return;
    };
  }, [searchValue, page]);

  const loadMoreImages = () => {
    setPage((prev) => prev + 1);
  };
  
  const getImageFetch = () => {
        const namePic = searchValue;
        // const { page } = page;
        const storageKey = `32864806-51f72b6a703d7e1693286dbfa`;
    setLoading(true);
        fetch(
            `https://pixabay.com/api?q=${namePic}&page=${page}&key=${storageKey}&image_type=photo&orientation=horizontal&per_page=12`
        ).then((response) => {
            if (response.ok) {
              return response.json().then(({ hits }) => {
                setImages((prevImages) => ([...prevImages, ...hits]));
            if (hits.length === 0) {
                alert(`Images are over!`);
            }
        }).then(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
            });
        }).catch(error => (console.log(error))).finally(() => setLoading(false));}
        });
    };

  return (
    <div className={css.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      {searchValue !== "" &&
        <ImageGallery loadMoreImages={loadMoreImages}
          images={images}
          loading={loading}
          page={page} />
          }
    </div>
  );
};
