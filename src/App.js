import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import { Container, Row, Col } from 'reactstrap';
import './App.css';


class App extends Component {
  render() {
    return (
      <Container className="App" fluid>
        <Row>
          <Header/>
        </Row>
        <Row>
          <Content/>
        </Row>
        <Row className="Footer">
          <Footer/>
        </Row>
      </Container>
    );
  }
}

export default App;
