import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import { useState } from 'react';

function App() {
  const [query, setQuery] = '';
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);

  const handleChangeQuary = newQuery => {
    setArticles([]);
    setQuery(newQuery);
    setPage(0);
  };

  const handleSearch = (topic) => { 
    b  
  }

  return (
    <>
      <SearchBar handleSearch={handleSearch} />
    </>
  );
}

export default App;
