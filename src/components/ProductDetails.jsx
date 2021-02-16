import React from "react";
import { useParams, Link } from "react-router-dom";
import BooksDetails from "../data/BooksDetails.json";
import { Card, Container, ListGroup, ListGroupItem } from "react-bootstrap";

function ProductDetails(props) {
  const params = useParams();
  const { details } = params;
  const product11 = BooksDetails.details
    .filter((item) => item.id === Number(details))
    .map((item) => (
      <Container fluid className="bg-gray">
        <div className="row full-screen">
          <div className="container-fluid" id="detail-contain" key={item.id}>
            <div className="row">
              <div className="col-sm-4 col-lg-3 col-xl-2 my-auto mx-auto">
                <Card.Img className="detailImg" variant="top" src={item.img} />
              </div>
              <div className="col-sm-8 col-lg-9 col-xl-9 col-xl-offset-1 mx-auto mt-5 mb-5">
                <Card className="responsive-font">
                  <Card.Body>
                    <Card.Title>
                      <b>Description</b>
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <b>Publish Date:</b> {item.publishDate}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Publisher:</b> {item.publisher}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Page: </b> {item.page}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Language: </b> {item.language}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Price:</b> {item.price}
                    </ListGroupItem>
                    <ListGroupItem>
                      <b>Categories: </b> {item.bisacCateg}
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Link to={`/products`}>Back to Products</Link>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    ));

  return product11;
}

export default ProductDetails;
