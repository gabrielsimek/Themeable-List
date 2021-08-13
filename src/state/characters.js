import React, { useState, useEffect } from 'react';
import fetchCharacters from '../services/airBenderApi';
const useCharacters = (page) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    return fetchCharacters(page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [page]);

  return [characters, loading];
};

export { useCharacters };

