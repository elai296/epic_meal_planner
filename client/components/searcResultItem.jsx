import React from 'react'

function handleClick(props, recipe){
    console.log(props);
    props.setView("recipe details",recipe, []);
}
function SearchBarResult(props) {
    return (
            <div className="card mt-4">
                {<img className="propsImage" src={props.image}/>}
                <div className="card-body">
                    <div className="propsName my-2"onClick={(e) => handleClick(props, props.recipe)}>{props.name}</div>
                    <div className="propsName my-2">Time: {props.time} minutes</div>
                </div>
            </div>
    )
}

export default SearchBarResult;
