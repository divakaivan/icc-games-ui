import React from "react";

const GameDescription = props => {
    return (
        <React.Fragment>
            <h2 className="mt-3">{props.header}</h2>
            {props.children}
            <h3 className="mt-5">{props.summary}</h3>
            <p className="text-justify">{props.description}</p>
        </React.Fragment>
    )
};

export default GameDescription;