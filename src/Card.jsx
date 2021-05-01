import React from "react";
import { NavLink } from "react-router-dom";

function Card(props){
    return (
        <div className="col-md-4 col-10 mx-auto">
            <div class="card">
                <img class="card-img-top" src={props.imgsrc} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{props.title}</h5>
                    <p class="card-text">
                    {props.description}
                    </p>
                    <NavLink to="#" class="btn btn-primary">watch</NavLink>
                </div>
            </div>
        </div>
    )

}

export default Card;