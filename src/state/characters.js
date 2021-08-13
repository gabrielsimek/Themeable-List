import { useState, useEffect } from 'react';
import fetchCharacters from '../services/airBenderApi';
const useCharacters = (page, perPage) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    return fetchCharacters(page, perPage)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page, perPage]);

  return [characters, loading];
};

export { useCharacters };

