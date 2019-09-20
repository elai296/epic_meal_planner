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
        this.setState({ list: recipes });
      });
  }

  componentDidUpdate(prevProps){
    if (prevProps.value === this.props.value){
      return;
    }
    fetch( `/api/test.php?q=` + this.props.value )
      .then(response => response.json())
      .then(recipes => {
        this.setState({ list: recipes });
      })
  }

  render()  {
    if(this.state.list.length === 0){
      return (
        <div>
          <Header setView={this.props.setView} />
          <div className="container textFont">
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
        <div className="container textFont">
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
