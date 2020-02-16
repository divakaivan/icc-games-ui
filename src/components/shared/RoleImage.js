import React from "react";

const RoleImage = props => {
    return (
        <div>
            <img style={{width: "50px", marginBottom: "5px"}} className="avatar" alt="champion"
                 src={`https://github.com/divakaivan/icc-games-ui/blob/master/src/stylesheets/${props.lane}.png?raw=true`}/>
        </div>
    )
};

export default RoleImage;