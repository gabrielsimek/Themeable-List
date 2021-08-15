import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/airBenderApi';
const CharacterContext = createContext();


export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  const handlePageChange = (page) => {
    setPage(prevPage => prevPage + page);
  };

  const handlePerPageChange = ({ target }) => {
    setPerPage(Number(target.value));    
  };

  useEffect(() => {
    if(!searchTerm){
      return fetchCharacters(page, perPage)
        .then(setCharacters)
        .finally(() => setLoading(false));
    } else {
      return fetchCharacter(searchTerm)
        .then(setCharacters)
        .finally(() => setLoading(false));
    }
  }, [page, perPage, searchTerm]);
  return (
    <CharacterContext.Provider value={{ characters, loading, page, perPage, searchTerm, handlePageChange, handlePerPageChange, handleSearchChange }} >
      {children}
    </CharacterContext.Provider>
  );
};


export const useCharacters = () => {
  const { characters, loading } = useContext(CharacterContext);
  return [characters, loading];
};

export const usePaging = () => {
  const { page, handlePageChange } = useContext(CharacterContext);
  return [page, handlePageChange];
};
  
export const usePerPage = () => {
  const { perPage, handlePerPageChange } = useContext(CharacterContext);
  return [perPage, handlePerPageChange];
}; 

export const useSearch = () => {
  const { searchTerm, handleSearchChange } = useContext(CharacterContext);
  return [searchTerm, handleSearchChange];
};
