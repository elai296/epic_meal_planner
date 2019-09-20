import React from "react";
import SearchBarResultsItem from "./search-bar-results-item";
import Header from './header';
import SearchBar from './search-bar';

class SearchBarResultsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }
  handleClick(props) {
    props.setView("home", {}, []);
  }

  componentDidMount(){
    fetch( `/api/test.php?q=` + this.props.value )
      .then(response => response.json())
      .then(recipes => {
        console.log("recipes are:", recipes)
        this.setState({ list: recipes });
      });
  }
  componentDidUpdate(prevProps){
    if (prevProps.value === this.props.value){
      return;//if the search term is the same as the last search term, then end fecth call
      //if it's different term, then fetch again to end the cycle.
    }
    fetch( `/api/test.php?q=` + this.props.value )
      .then(response => response.json())
      .then(recipes => {
        console.log("recipes are:", recipes)
        this.setState({ list: recipes });
      })
  }
  render()  {
    console.log("do we have a list ", this.state.list);
    console.log("state list length is ", this.state.list.length)
    console.log("do we have props  ", this.props)
    if(this.state.list.length === 0){
      return (
        <div>
          <Header setView={this.props.setView} />
          <div className="container">
            <div className="row justify-content-center my-5">
              <SearchBar setView={this.props.setView} />
            </div>
            <div>
              <section className="section">
                <div className="row">
                  <div className="loader"></div >
                </div>
              </section>
            </div>
          </div>
        </div>

      )
    } else {
      return (
      <div>
        <Header setView={this.props.setView} text="Epic Meal Planner"/>
        <div className="container">
          <div className="row justify-content-center my-5">
            <SearchBar setView={this.props.setView}/>
          </div>
          <div>
            <section className="section">
              <div className="row">
                {this.state.list.map((recipe, x) => {
                  if (x < 5) {
                    return (
                      <SearchBarResultsItem
                        key={x}
                        name={recipe.label}
                        image={recipe.image_url}
                        time={recipe.cooking_time}
                        setView={this.props.setView}
                        recipe={recipe}/>
                    );
                  }
                })}
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

}

export default SearchBarResultsList;
