import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  const libraryItems = props.libraryLink
    .filter((item) => item.isLink)
    .map((item) => (
      <Nav.Link key={item.id}>
        <Link to={item.link} className="nav-link d-flex justify-content-end">
          {" "}
          <b id="homepg">{item.title}</b>
        </Link>
      </Nav.Link>
    ));
  return (
    <Navbar style={{ backgroundColor: "#573BA3" }} expand="lg">
      <Link to="/" className="navbar-brand text-white mb-1 ml-5 pl-5">
        <b> BookShop </b>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav id="itemler" className="ml-auto pr-4">
          {libraryItems}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
