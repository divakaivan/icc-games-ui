import React from "react";

const Champion = props => {
    return (
        <React.Fragment>
            {props.side === "left" ?
                (
                    <div style={{fontWeight: "bold", color: "whitesmoke", marginTop: "5px"}}>
                        <img style={{width: "50px"}} className="avatar" alt="champion"
                             src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/> {props.champion}
                    </div>
                ) :
                (
                    <div style={{fontWeight: "bold", color: "whitesmoke", marginTop: "5px"}}>
                        {props.champion}<img style={{width: "50px"}} className="avatar" alt="champion"
                             src={`http://ddragon.leagueoflegends.com/cdn/10.1.1/img/champion/${props.champion}.png`}/>
                    </div>
                )
            }
        </React.Fragment>
    )
};

export default Champion;