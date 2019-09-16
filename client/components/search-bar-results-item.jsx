import React from "react";


function handleClick(props, recipe) {
  console.log(props);
  props.setView("recipe details", recipe, []);
}

function SearchBarResultsItem(props) {
  return (
    <div className="card mb-3" style={{ maxWidth: "480px" }}>
      <div className="row no-gutters">
        <div className="col-sm-4">
          <div
            className="card-img-top propsImage"
            style={{
              backgroundImage: "url("+props.image+")",
              backgroundSize: "contain",
              backgroundRepeat:"no-repeat",
              height: "150px",
              width: "150px"
            }}
          ></div>
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5
              className="card-title"
              onClick={e => handleClick(props, props.recipe)}
            >
              {props.name}
            </h5>
            <p className="card-text">Time: {props.time} minutes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBarResultsItem;
