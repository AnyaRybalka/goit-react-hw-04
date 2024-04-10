import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import fetchImages from "./components/api-img/image-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ModalWindow from "./components/ImageModal/ImageModal";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    if (query === "") {
      return;
    }
    async function fetchPhotos() {
      try {
        setLoading(true);
        setError(false);
        const photos = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...photos];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchPhotos();
  }, [query, page]);

  const getPhotos = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setLoadingMore(true);
    setPage(page + 1);
    setLoadingMore(false);
  };

  function openModal(image) {
    setSelectedImage(image);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <SearchBar onSearch={getPhotos} />
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} openModal={openModal} />
      )}
      {images.length > 0 && !loading && (
        <LoadMoreBtn loadMore={handleLoadMore} />
      )}
      {selectedImage && (
        <ModalWindow
          isOpen={isOpen}
          onClose={closeModal}
          image={selectedImage}
        />
      )}
      {loadingMore && <Loader />}
    </div>
  );
}

export default App;
