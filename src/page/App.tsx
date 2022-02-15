import { useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import light from '../theme/light';
import dark from '../theme/dark';

import Menu from './components/headerPage/index'
import AppRouter from '../navigation/router';
import {Main} from './style'
import {usePersistedState} from '../utils/usePersistedState';
import GlobalStyle from'./globalStyle';

type ThemeType = { 
  title: string; 
  colors: object
}
function App() {

  const [theme, setTheme] = usePersistedState('theme',light)

  const toggleTheme = ()=>{
    setTheme(theme.title == 'light' ?dark: light)
  }

  return (
    <ThemeProvider theme ={theme}>
        <GlobalStyle/>
        <Main>
          <Menu toggleTheme={toggleTheme} />
          <AppRouter/>
        </Main>
    </ThemeProvider>
  )
}

export default App
