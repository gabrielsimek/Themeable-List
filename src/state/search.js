import { useState } from 'react';

const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = ({ target }) => {
    setSearchTerm(target.value);
  };

  return [searchTerm, handleSearchChange];
};
export { useSearch };
