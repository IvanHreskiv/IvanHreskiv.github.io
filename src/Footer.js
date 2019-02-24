import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


export default class Footer extends Component {
  render() {
    return (
      <Container>
        <Row id="lab_social_icon_footer">
          <Col>
            <a href="#"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
            <a href="#"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
            <a href="#"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
            <a href="#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
          </Col>
        </Row>
      </Container>
    );
  }
}
