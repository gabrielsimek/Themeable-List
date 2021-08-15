import { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacter } from '../services/airBenderApi';
const useCharacters = (page, perPage, searchTerm) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
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

  return [characters, loading];
};


export { useCharacters };

