import React from "react";

function Tile (props){
    return (
        <section className={"tile"}>
            <img src={props.image} alt={props.title}/>
            <h2 className={"tile-title"}>{props.name}</h2>
            <p className={"tile-text"}>{props.text}</p>
        </section>
    )
}
export default Tile