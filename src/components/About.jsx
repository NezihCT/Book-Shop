import React from "react";
import TimeLine from "./TimeLine";

export default function About() {
  return (
    <div className="container">
      <div className="row justify-content-center d-flex pt-4">
        <h4 id="abouth1">BookShop project was codded by me in this way :</h4>
        <div className="col-sm-9 pt-4">
          <TimeLine />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}
