import React from "react";
import LibraryInfo from "../data/LibraryInfo.json";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function Products() {
  const products = LibraryInfo.library
    .filter((item) => item.isActive)
    .map((item) => (
      <Card
        key={item.id}
        className="bg-dark text-white mt-5 ml-5 mr-5 mb-5"
        style={{ width: "14rem" }}
      >
        <Link to={`/products/${item.id}`}>
          <Card.Img src={item.img} alt="Card image" />
        </Link>
        <Card.Body>
          <Card.Title>{item.bookName}</Card.Title>
          <Card.Text>{item.writer}</Card.Text>
          <Link to={`/products/${item.id}`}>
            <Card.Text>
              <i>(View to continue...)</i>
            </Card.Text>
          </Link>
        </Card.Body>
      </Card>
    ));
  return (
    <>
      <div id="card" className="row">
        {products}
      </div>
    </>
  );
}
