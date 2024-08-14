import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchArticles } from './articles-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';
import Loader from './components/Loader/Loader';

function App() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState({});
  const [isVisualButton, setIsVisualButton] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  const handleChangeQuary = newQuery => {
    setIsLastPage(false);
    setArticles([]);
    setIsVisualButton(true);
    setQuery(newQuery);
    setPage(1);
  };

  const handleOpenModal = img => {
    setModalImage(img);
    setOpenModal(true);
  };

  const closeModal = () => {
    setModalImage({});
    setOpenModal(false);
  };

  const handleLoadMore = async () => {
    setIsLoadingMore(true);
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (query.trim() === '') return;

    const handleSearch = async () => {
      try {
        if (page === 1) setIsLoader(true);
        setIsLoader(true);
        setIsError(false);
        const data = await fetchArticles(query, page);

        if (data.results.length === 0) {
          toast.error('No found image');
          return;
        }

        if (data.total <= data.results.length) {
          toast('There are no more pictures', { icon: '😞' });
          setIsVisualButton(false);
        }
        setArticles(prev => [...prev, ...data.results]);
        setIsLastPage(page < Math.ceil(data.total_pages / data.results.length));
      } catch (error) {
        setIsError(true);
        throw new Error(error.status);
      } finally {
        setIsLoader(false);
        setIsLoadingMore(false);
      }
    };
    handleSearch();
  }, [query, page]);

  return (
    <>
      <SearchBar handleChangeQuary={handleChangeQuary} />
      {isLoader && <Loader />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} handleOpenModal={handleOpenModal} />
      )}
      {articles.length > 0 &&
        !isLoadingMore &&
        isVisualButton &&
        isLastPage && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      {isLoadingMore && <Loader />}
      <ImageModal
        openModal={openModal}
        closeModal={closeModal}
        urls={modalImage.urls}
        alt={modalImage.description}
      />
      {isError && <ErrorMessage />}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default App;
