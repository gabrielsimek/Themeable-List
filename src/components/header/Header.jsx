import React from 'react';
import { useSetSelectedTheme } from '../../state/ThemeProvider';

const Header = () => {
  const setSelectedTheme = useSetSelectedTheme();
  const handleChange = ({ target }) => setSelectedTheme(target.value);
  return (
    <form>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          onChange={handleChange}
        />
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Header;
