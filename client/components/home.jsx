import React from "react";
import SearchBar from "./search-bar";

export default function home(props) {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center my-5">
          <SearchBar setView={props.setView} />
        </div>
        <div>
          <div className="row justify-content-center font-weight-bold textFont homeText">
            Find a new dish.
          </div>
          <div className="row justify-content-center font-weight-bold textFont homeText">
            Plan your next meal.
          </div>
        </div>
      </div>
    </div>
  );
}
