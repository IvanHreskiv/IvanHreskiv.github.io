import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import { Card, CardTitle, CardText } from 'reactstrap';


export default class Content extends Component {
  render() {
    return (
      <Container>
      <Row>
          <Col className="text-light" >
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>We are PRV</CardTitle>
              <CardText>Comming soon.</CardText>
              <Button>Learn More</Button>
             </Card>
          </Col>
          <Col className="text-light" >
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Special Title Treatment</CardTitle>
              <CardText>Comming soon.</CardText>
              <Button>Learn More</Button>
             </Card>
          </Col>
      </Row>
      <Row>
          <Col className="text-light" >
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Reward calculator</CardTitle>
              <CardText>Comming soon.</CardText>
              <Button>Learn More</Button>
             </Card>
          </Col>
          <Col className="text-light" >
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
              <CardTitle>Charts</CardTitle>
              <CardText>Comming soon.</CardText>
              <Button>Learn More</Button>
             </Card>
          </Col>
      </Row>
      </Container>
    );
  }
}
