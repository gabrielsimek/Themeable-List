import { useState } from 'react';

export const usePaging = () => {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(prevPage => prevPage + page);
  };

  return [page, handlePageChange];
    
};


