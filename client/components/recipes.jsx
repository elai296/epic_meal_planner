import React from "react";

function Recipes(props) {
  let cardStyle = "border border-dark cardPicture card text-center recipeContainer my-3";
  const recipeDropDownItems = [
    {
      text: "Favorites",
      category: "favorites",
      myClass: "favoriteCatergoryPic"
    },
    { text: "Vegan", category: "vegan", myClass: "veganCatergoryPic" },
    { text: "Keto", category: "keto", myClass: "ketoCatergoryPic" },
    { text: "Paleo", category: "paleo", myClass: "paleoCatergoryPic" },
    {
      text: "Dairy-Free",
      category: "dairy-free",
      myClass: "dairyFreeCatergoryPic"
    },
    {
      text: "Gluten-Free",
      category: "gluten-free",
      myClass: "glutenFreeCatergoryPic"
    }
  ];

  return (
    <div className="container mt-5 d-flex flex-wrap textFont">
      {recipeDropDownItems.map((item, x) => {
        return (
          <a
            className={cardStyle}
            key={x}
            href="#"
            onClick={() => {
              props.setCategory(item.category);
              props.setView("recipesCategoriesList", {}, "", "RECIPES");
            }}
          >
            
            <h3 className="my-auto">{item.text}</h3>
            <div className={item.myClass}></div>
          </a>
        );
      })}
    </div>
  );
}

export default Recipes;
