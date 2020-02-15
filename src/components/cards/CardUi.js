import React from "react";
import "./card-style.css";


const Card = props => {
    return (
        <div className="mx-auto mb-5 card w-75 text-center shadow">
            <div className="overflow">
                <img src="https://i.ebayimg.com/images/g/4l4AAOSwx3dbjPf1/s-l300.jpg" className="card-img-top" alt="random"/>
            </div>
            <div className="card-body text-darker">
                <h4 className="font-weight-bold card-title">
                    {`${props.red} vs ${props.blue}`}
                </h4>
                <p className="card-text text-secondary">
                    <a href={props.videoLink} target="blank">See on YouTube</a>
                </p>
                <a href={`/${props.id}`} className="btn btn-outline-success">View game</a>
            </div>
        </div>
    )
};

export default Card;