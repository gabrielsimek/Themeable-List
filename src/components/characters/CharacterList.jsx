import React from 'react';
import CharacterItem from './CharacterItem';
import Pager from '../paging/Pager';
import { usePaging, usePerPage, useSearch, useCharacters } from '../../state/CharacterProvider';
import Search from '../search/Search';
const CharacterList = () => {
  const [perPage, handlePerPageChange] = usePerPage();
  const [page, handlePageChange] = usePaging();
  const [searchTerm, handleSearchChange] = useSearch();
  const [characters, loading] = useCharacters(page, perPage, searchTerm);

  const characterElements = characters.map(character => {
    return (
      <li key={character.name}>
        <CharacterItem {...character}/>
      </li>
    );
  });

  if(loading) return <h1>Loading...</h1>;

  return ( 
    <>
      <Search 
        searchTerm={searchTerm}
        onChange={handleSearchChange}
      />
      <ul>{characterElements}</ul>
      {!searchTerm && 
      <Pager 
        perPage={perPage}
        page={page} 
        onClick={handlePageChange} 
        onChange={handlePerPageChange}
      />}  
    </>
  );
};

export default CharacterList;
