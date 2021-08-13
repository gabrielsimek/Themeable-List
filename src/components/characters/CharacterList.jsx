import React from 'React';
import CharacterItem from './CharacterItem';

const CharacterList = () => {
//   const characters = useCharacters();
  const characters = [{ 
    name: 'test', 
    image: 'https://placekitten.com/g/200/300' 
  }];
  const characterElements = characters.map(character => {
    return (
      <li key={character.name}>
        <CharacterItem {...character}/>
      </li>
    );
  });

  return <ul>{characterElements}</ul>;
};

export default CharacterList;
