import React from "react";

export default function SearchBarResultsItem(props) {
  return (
    <div className="container">
      <div className="card mb-2">
        <a
          href="#"
          onClick={e => {
            props.setView("recipeDetails", props.recipe, "", "RECIPES");
          }}
        >
          <div className="row no-gutters flex-grow-1">
            <div className="col-4">
              <div
                className="card-img-top propsImage"
                style={{
                  backgroundImage: "url(" + props.image + ")",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "100%",
                  width: "100%"
                }}
              >
                {/* <img
                  src={props.image}
                  alt=""
                  style={{ height: "100%", width: "100%" }}
                /> */}
              </div>
            </div>
            <div className="col-8">
              <div className="card-body py-5">
                <h1 className="card-title font-weight-bold">{props.name}</h1>
                <p className="card-text ">Time: {props.time} minutes</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
