import React from 'react';
import { useSelectedTheme } from '../../state/ThemeProvider';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';
export default function App() {
  const theme = useSelectedTheme();
  return (
    <main style={theme}>
      <Header/>
      <CharacterList/>
    </main>
  );
}
