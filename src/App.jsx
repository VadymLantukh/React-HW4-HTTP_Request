import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { fetchArticles } from './articles-api';
import ImageGallery from './components/ImageGallery/ImageGallery';

function App() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);

  const handleChangeQuary = newQuery => {
    setArticles([]);
    setQuery(newQuery);
    setPage(1);
  };

  useEffect(() => {
     if (query.trim() === '') return;

    try {
      const handleSearch = async () => {
        const data = await fetchArticles(query, page);
        setArticles(prev => [...prev, ...data]);
      };

      handleSearch();
    } catch (error) {
      console.log(error);
    }
  }, [query, page]);

  return (
    <>
      <SearchBar handleChangeQuary={handleChangeQuary} />
      {articles.length > 0 && <ImageGallery articles={articles} />}
    </>
  );
}

export default App;
