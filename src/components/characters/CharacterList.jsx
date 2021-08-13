import React, { useState } from 'react';
import { useCharacters } from '../../state/characters';
import CharacterItem from './CharacterItem';
import Pager from '../paging/Pager';
import { usePaging } from '../../state/paging.js';

const CharacterList = () => {
  const [page, handlePageChange] = usePaging();
  const [characters, loading] = useCharacters(page);
 
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
