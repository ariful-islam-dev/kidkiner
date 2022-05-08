import React from "react";
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";

const Classes = ({ classes }) => {
  return (
    <div className="py-5">
      <Container>
        <div>
          <div className="section-heading text-center w-100">
            <h4 className="color afterBeforeLine">{classes.heading}</h4>
            <h1>{classes.title}</h1>
          </div>
          <div className="classCard">
            <Row>
              {classes.class.map((item, i) => (
                <Col md="4" key={item.id}>
                  <Card body>
                    <CardImg
                      alt="Card image cap"
                      src={item.thumbnail}
                      top
                      width="100%"
                    />
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardText>{item.text}</CardText>
                    <div className="classTable">
                      <Table bordered>
                        <tbody>
                          <tr>
                            <th>Age of Kids</th>
                            <td>
                              {item.table.age.start} - {item.table.age.end} Year
                            </td>
                          </tr>
                          <tr>
                            <th>Total Seate</th>
                            <td>{item.table.seats} Seats</td>
                          </tr>
                          <tr>
                            <th>Class Time</th>
                            <td>
                              {item.table.time.start} -{" "}
                              {item.table.time.finished}
                            </td>
                          </tr>
                          <tr>
                            <th>Tution Fee</th>
                            <td>
                              {" "}
                              {item.table.tusionFee.fee} /
                              {item.table.tusionFee.status}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <Button>{item.joinBtn.name}</Button>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Classes;
