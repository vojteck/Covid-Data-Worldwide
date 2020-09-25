import React from 'react';
import { Container } from 'react-bootstrap';
import MainRouter from './app/routing/Main.router';
import { NavBar } from './components/NavBar/NavBar.component';

function App() {

  return (
    <Container>
      <NavBar></NavBar>
      <hr></hr>
      <MainRouter></MainRouter>
    </Container>
  );
}

export default App;