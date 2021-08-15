import React from 'react';
import { useCharacters } from '../../state/characters';
import CharacterItem from './CharacterItem';
import Pager from '../paging/Pager';
import { usePaging } from '../../state/paging.js';
import { usePerPage } from '../../state/perPage';
import { useSearch } from '../../state/search';
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
      <Pager 
        perPage={perPage}
        page={page} 
        onClick={handlePageChange} 
        onChange={handlePerPageChange}/>
    </>
  );
};

export default CharacterList;
