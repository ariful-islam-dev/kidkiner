import React from "react";
import { Col, Container, Row } from "reactstrap";
import SingleTeacher from "./SingleTeacher";
import "./Teacher.css";

const Teacher = ({ teachers }) => {
  return (
    <div className="py-5">
      <Container>
        <div className="section-heading text-center w-100">
          <h4 className="color afterBeforeLine">{teachers.heading}</h4>
          <h1>{teachers.title}</h1>
        </div>
      </Container>
      <Container>
        <Row>
          {" "}
          {teachers.teachers.map((teacher) => (
            <Col md="3" key={teacher.id}>
              <SingleTeacher teacher={teacher} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Teacher;
