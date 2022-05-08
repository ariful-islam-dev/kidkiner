import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import "./About.css";

const About = ({ about }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col md="5">
            <div className="aboutImg">
              <img src={about.thumbnail} alt="" />
            </div>
          </Col>
          <Col md="7">
            <div className="d-flex align-items-center h-100">
              <div className="aboutContent">
                <h4 className="color afterLine">{about.heading}</h4>
                <h1>{about.title}</h1>
                <p>{about.text}</p>
                <div className="quality">
                  <div className="quaImg">
                    <Row>
                      <Col md="6">
                        <img src={about.quality.thumbnail} alt="" />
                      </Col>
                      <Col md="6">
                        <ul className="list">
                          {about.quality.list.map((li, i) => (
                            <li key={i}>
                              {li.icon} {li.text}
                            </li>
                          ))}
                        </ul>
                      </Col>
                    </Row>
                  </div>
                </div>
                <Button>{about.quality.button.name}</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
