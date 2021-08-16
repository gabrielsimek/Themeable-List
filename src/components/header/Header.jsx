import React from 'react';
import { createUseStyles } from 'react-jss';
import { useSetSelectedTheme } from '../../state/ThemeProvider';
import './Header.css';
const useStyles = createUseStyles({

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottom: [2, 'solid', 'black'],
    padding: '1rem',
  }
  
});



const Header = () => {
  const setSelectedTheme = useSetSelectedTheme();
  const handleChange = ({ target }) => setSelectedTheme(target.value);
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div>
        <form>
          <span>Theme:</span>

          <input
            id="light"
            type="radio"
            name="theme"
            value="light"
            onChange={handleChange}
          />
          <label htmlFor="light">light</label>
         
          <input
            id="dark"
            type="radio"
            name="theme"
            value="dark"
            onChange={handleChange}
          />
          <label htmlFor="dark">dark</label> 
        </form>
      </div>
      <h1>Avatar Characters</h1>
    </header>
  );
};

export default Header;
