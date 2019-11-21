import React from "react";
import Searchbar from "./search-bar";

export default function Header(props) {
  const recipeDropDownItems = [
    { text: "Favorites", category: "favorites" },
    { text: "Vegan", category: "vegan" },
    { text: "Keto", category: "keto" },
    { text: "Paleo", category: "paleo" },
    { text: "Dairy-Free", category: "dairy-free" },
    { text: "Gluten-Free", category: "gluten-free" }
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        {props.viewTitle == "EPIC MEAL PLANNER"
          ? props.viewTitle
          : "EPIC MEAL PLANNER | " + props.viewTitle}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a
              className="nav-link headerHover"
              href="#"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              onClick={() => {
                props.setView("home", {}, '', "EPIC MEAL PLANNER", null);
              }}
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle headerHover"
              href="#"
              id="navbarDropdown"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={() => {
                props.setCategory('');
                props.setView("recipes", {}, "", "RECIPES", null);
              }}
            >
              Recipes
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {recipeDropDownItems.map((item, x) => {
                return (
                  <a
                    className="dropdown-item"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    data-target="#navbarSupportedContent"
                    href="#"
                    key={x}
                    onClick={() => {
                      props.setView("recipesCategoriesList", {}, "", "RECIPES");
                      props.setCategory(item.category);
                    }}
                  >
                    {item.text}
                  </a>
                );
              })}
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link headerHover"
              href="#"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              onClick={() => {
                props.setView("calendar", {}, "", "CALENDAR");
              }}
            >
              Calendar
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link headerHover"
              href="#"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              onClick={() => {
                props.setView("shoppingList", {}, "", "SHOPPING LIST");
              }}
            >
              Shopping List
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
