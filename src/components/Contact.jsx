import React from "react";
import MaterialIcon from "./MaterialIcons";

export default function Contact() {
  return (
    <div className="container">
      <div className="row justify-content-center d-flex pt-4">
        <img
          src="https://avatars.githubusercontent.com/u/71180513?s=400&u=c1feda32a5140cfd9bf89d3a424344ffed83f396&v=4"
          alt=""
          id="profile"
          className="rounded-circle"
        />
        <div className="col-sm-9 pt-2  d-flex justify-content-center">
          <h4> Get in contact with:</h4>
        </div>
        <div className="col-sm-9 pt-1 d-flex justify-content-center">
          <MaterialIcon />
          <p> </p>
        </div>
      </div>
    </div>
  );
}
