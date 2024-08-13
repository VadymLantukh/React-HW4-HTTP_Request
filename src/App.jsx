import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchArticles } from './articles-api';
import ImageGallery from './components/ImageGallery/ImageGallery';
import { PropagateLoader } from 'react-spinners';
import toast, { Toaster } from 'react-hot-toast';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { ImageModal } from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoader, setIsLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalImage, setModalImage] = useState({});

  const handleChangeQuary = newQuery => {
    setArticles([]);
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

        if (data.length === 0) {
          toast.error('No found image');
          return;
        }

        if (data.total < 10) {
          toast('There are no more pictures', { icon: '😞' });
        }
        setArticles(prev => [...prev, ...data.results]);
      } catch (error) {
        setIsError(true);
        console.log(error);
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
      {isLoader && <PropagateLoader color="#ff0909" />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} handleOpenModal={handleOpenModal} />
      )}
      {articles.length > 0 && !isLoadingMore && (
        <LoadMoreBtn handleLoadMore={handleLoadMore} />
      )}
      {isLoadingMore && <PropagateLoader color="#ff0909" />}
      <ImageModal
        openModal={openModal}
        closeModal={closeModal}
        urls={modalImage.urls}
        alt={modalImage.description}
      />
      {isError && <ErrorMessage />}
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
