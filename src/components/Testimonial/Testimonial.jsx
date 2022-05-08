import React from "react";
import { Col, Container, Row } from "reactstrap";
import "./Testimonial.css";
const path = "/src/images/testimonial/";

const Testimonial = ({ testimonial }) => {
  <style>
    {`.custom-tag {
        max-width: 100%;
        height: 500px;
        background: black;
      }`}
  </style>;
  return (
    <div>
      <Container>
        <div className="section-heading text-center w-100">
          <h4 className="color afterBeforeLine">{testimonial.heading}</h4>
          <h1>{testimonial.title}</h1>
        </div>
        <div className="teacherComment">
          <Row>
            {testimonial.parents.map((item) => (
              <Col md="4">
                <div className="parentComment my-3">
                  <blockquote>{item.comment}</blockquote>
                  <div className="parent d-flex align-items-center">
                    <div className="parentAvater px-3">
                      <img src={path + item.avater} alt="" />
                    </div>
                    <div className="parentName">
                      <h4>{item.name}</h4>
                      <p>{item.profession}</p>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
