import React from 'react';
import { Header } from './components/Header/Header';
import { MenuBar } from './components/MenuBar/MenuBar';
import { Container } from './global';

export function App() {
  return (
    <>
      <Container />
      <Header />
      <MenuBar />
    </>
  );
}


