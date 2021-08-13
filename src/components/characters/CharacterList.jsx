import React from 'React';
import { useCharacters } from '../../state/characters';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
  const [characters, loading] = useCharacters();
  const characterElements = characters.map(character => {
    return (
      <li key={character.name}>
        <CharacterItem {...character}/>
      </li>
    );
  });
  if(loading) return <h1>Loading...</h1>;
  return <ul>{characterElements}</ul>;
};

export default CharacterList;
