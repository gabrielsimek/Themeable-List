import React, { useState } from 'react';
import { useCharacters } from '../../state/characters';
import CharacterItem from './CharacterItem';
import Pager from '../paging/Pager';

const CharacterList = () => {
  const [page, setPage] = useState(1);
  const [characters, loading] = useCharacters(page);

  const handlePageChange = (page) => {
    setPage(prevPage => prevPage + page);
  };
 
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
      <ul>{characterElements}</ul>
      <Pager page={page} onChange={handlePageChange}/>
    </>
  );
};

export default CharacterList;
