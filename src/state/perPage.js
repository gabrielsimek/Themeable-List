import { useState } from 'react';
const usePerPage = () => {
  const [perPage, setPerPage] = useState(25);
  const handlePerPageChange = ({ target }) => {
    setPerPage(Number(target.value));    
  };
  return [perPage, handlePerPageChange];
};

export { usePerPage };
