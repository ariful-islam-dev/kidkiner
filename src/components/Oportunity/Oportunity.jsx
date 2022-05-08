import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import style from "./Oportunity.module.css";

const Oportunity = ({ oportunity }) => {
  return (
    <div className="oportunityArea py-5">
      <Container className="">
        <Row className="">
          {oportunity.map((item, i) => (
            <Col md="4" key={i}>
              <Card body className={"my-2" + " " + style.card}>
                <Row>
                  <Col md="4" className={style.optIcon}>
                    <CardImg
                      alt="Card image cap"
                      src={item.icon}
                      top
                      width="100%"
                    />
                  </Col>
                  <Col md="8">
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardText>
                      {item.text.length > 150
                        ? item.text.slice(0, 150) + "..."
                        : item.text}
                    </CardText>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Oportunity;
