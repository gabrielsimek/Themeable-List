import React from 'react';
import { useSelectedTheme } from '../../state/ThemeProvider';
import { CharacterProvider } from '../../state/CharacterProvider';
import CharacterList from '../characters/CharacterList';
import Header from '../header/Header';
import './App.css';
export default function App() {
  const theme = useSelectedTheme();
  return (
    <main style={theme}>
      <Header/>
      <CharacterProvider>
        <CharacterList/>
      </CharacterProvider>
    </main>
  );
}
