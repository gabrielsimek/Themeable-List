import React from 'react';
import { createUseStyles } from 'react-jss';
import CharacterItem from './CharacterItem';
import Pager from '../paging/Pager';
import { usePaging, usePerPage, useSearch, useCharacters } from '../../state/CharacterProvider';
import Search from '../search/Search';

const useStyles = createUseStyles({
  characters: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
    gridGap: 10,
  },
  li: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: [1, 'solid', '#ccc'],
    maxWidth: 295,
    padding: [0, 5]
  },
  search: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'green'
  }
});


const CharacterList = () => {
  const [perPage, handlePerPageChange] = usePerPage();
  const [page, handlePageChange] = usePaging();
  const [searchTerm, handleSearchChange] = useSearch();
  const [characters, loading] = useCharacters(page, perPage, searchTerm);
  const classes = useStyles();

  const characterElements = characters.map(character => {
    return (
      <li className={classes.li} key={character.name}>
        <CharacterItem {...character}/>
      </li>
    );
  });

  if(loading) return <h1>Loading...</h1>;

  return ( 
    <>
      <div className={classes.characters}>
        <Search 
          searchTerm={searchTerm}
          onChange={handleSearchChange}
        />
        <ul className={classes.characterGrid}>{characterElements}</ul>
        <div>  
          {!searchTerm && 
           <Pager 
             perPage={perPage}
             page={page} 
             onClick={handlePageChange} 
             onChange={handlePerPageChange}
           />}  
        </div> 
      </div>
    </>
  );
};

export default CharacterList;
