import React from "react";
import "../style/InvestmentsStyle.css";

const Investment = props => {
    return(
        <div className="productcard text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="investment" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text">
                {props.content}
                </p>                
            </div>
        </div>
    );
}

export default Investment