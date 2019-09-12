import React from "react";


function handleClick(props, recipe) {
  console.log(props);
  props.setView("recipe details", recipe, []);
}
function SearchBarResult(props) {
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
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  {
    /* <div className="card " style={{ maxWidth: "540px" }}>
      <div className="col-md-3 no-gutters">
        <div className="col-md-4">
          {<img className="card-img-top propsImage" src={props.image} />}
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div
              className="propsName my-2"
              onClick={e => handleClick(props, props.recipe)}
            >
              {props.name}
            </div>
            <div className="propsName my-2">Time: {props.time} minutes</div>
          </div>
        </div>
      </div>
    </div> */
  }
}

export default SearchBarResult;
