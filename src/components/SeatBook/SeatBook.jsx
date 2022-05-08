import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
} from "reactstrap";

const SeatBook = ({ book }) => {
  return (
    <div className="seatBookArea py-5">
      <Container>
        <Row>
          <Col md="8">
            <div className="bookingContent">
              <h4 className="color afterLine">{book.heading}</h4>
              <h1>{book.title}</h1>
              <p>{book.text}</p>
              <div className="bookingFeature">
                <ul className="list">
                  {book.list.map((li, i) => (
                    <li key={li.id} style={{ boder: "none" }}>
                      {li.icon} {li.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col md="4">
            <div className="formArea bg-master">
              <h1>{book.bookForm.title}</h1>
              <Form>
                {book.bookForm.input.map((int) => (
                  <FormGroup key={int.id}>
                    <Input
                      id="exampleEmail"
                      name="email"
                      placeholder={`Your ${int.name} is enter here`}
                      type={int.type}
                    >
                      {int.option &&
                        int.option.map((opt, i) => (
                          <option key={i} value={opt}>
                            {opt}
                          </option>
                        ))}
                    </Input>
                  </FormGroup>
                ))}

                <Button>Submit</Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SeatBook;
