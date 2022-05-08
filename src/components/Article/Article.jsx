import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import "./Article.css";
const path = "/src/images/class/";

const Article = ({ blog }) => {
  return (
    <div className="py-5">
      <Container>
        <div className="section-heading text-center w-100">
          <h4 className="color afterBeforeLine">{blog.heading}</h4>
          <h1>{blog.title}</h1>
        </div>
        <div className="articleArea">
          <Row>
            {blog.articles.map((item) => (
              <Col key={item}>
                <Card className="text-center">
                  <CardImg
                    className="img-thumbnail"
                    alt="Card image cap"
                    src={path + item.thumbnail}
                    top
                    width="100%"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardSubtitle
                      className="mb-2 text-muted d-flex justify-content-around"
                      tag="h6"
                    >
                      <a href={item.tags.user.link}>{item.tags.user.name}</a>
                      <a href={item.tags.category.link}>
                        {item.tags.category.name}
                      </a>
                      <a href={item.tags.post.link}>{item.tags.post.name}</a>
                    </CardSubtitle>
                    <CardText>{item.text}</CardText>
                    <Button>Button</Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Article;
