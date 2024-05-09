import React from "react";
import "./style.css";
export default function Card(props){
    let textval
    if(props.price<150){
        textval="SOLD OUT"
    }else{
        textval="ONLINE"
    }

    return(
        <div className="card-container">
            
            <img src={props.coverImg} className="card-image"/>
            
            <div className="img-down"> 
                    <img src="./images/starimage.png" className="star-image"/>
                    <span className="rating">{props.rating}</span>
                    <span>({props.reviewCount})</span>
                    <span>.USA</span>
            </div>
        <p className="title-content">{props.title}</p>
        <p className="price-content"><span className="price-val">From ${props.price}</span>/person</p>
        <p className="card-sold">{textval}</p>
        </div>
    )
}