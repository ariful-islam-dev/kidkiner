import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import style from "./Banner.module.css";

const Banner = ({ banner }) => {
  return (
    <div className="bg-master">
      <Container className="py-5">
        <Row>
          <Col md="7">
            <div className={style.content}>
              <div className={style.bannerConnet}>
                <h3>{banner.subTitle}</h3>
                <h1>{banner.title}</h1>
                <p>{banner.text}</p>
                <Button>{banner.more.name}</Button>
              </div>
            </div>
          </Col>
          <Col md="5">
            <div className="thubnail">
              <img src={banner.thumbnail} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
