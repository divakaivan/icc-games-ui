import React from "react";

const Champion = props => {
    return (
        <div style={{fontWeight: "bold", color: "whitesmoke", marginTop: "5px"}}>
            <img style={{width: "50px"}} className="avatar" alt="champion" src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/> {props.champion}
        </div>
    )
};

export default Champion;