import React from "react";
import '../componentes/items.css'

function MyItems(props) {
    return ( <div id="contener-div">
        <h1 id="MYH1">{props.title}</h1>
        <img id="MyImage" src={props.image}/>
        <b id="MyB">{props.price}</b>
        <p id="MyB">{props.color}</p>

    </div> );
}

export default MyItems;