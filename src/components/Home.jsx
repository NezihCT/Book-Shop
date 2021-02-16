import React from "react";
import "./style.css";
import Search from "./Search";

export default function Home() {
  return (
    <div id="home" className="text-center d-block full-screen">
      <img
        src="https://data.whicdn.com/images/352735004/original.jpg"
        alt=" "
      />
      <h1 id="homeTitle" className="">
        Support Local Bookstores. <br />
        Shop Online with Bookshop.
      </h1>{" "}
      <Search />
    </div>
  );
}
