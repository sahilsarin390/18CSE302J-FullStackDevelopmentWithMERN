import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


import './components/App.css';

function App() {
  return (
    <div>
      <Container fluid>
        <Header/>
        <Content/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
