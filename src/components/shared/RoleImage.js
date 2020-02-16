import React from "react";
import PropTypes from "prop-types";

/**
 * Component that gets the picture of a role from my GitHub repo.
 */
const RoleImage = props => {
    return (
        <div>
            <img style={{width: "50px", marginBottom: "5px"}} className="avatar" alt="champion"
                 src={`https://github.com/divakaivan/icc-games-ui/blob/master/src/stylesheets/${props.lane}.png?raw=true`}/>
        </div>
    )
};

export default RoleImage;

RoleImage.propTypes = {
    /**
     * Options: top, jg, mid, bot, sup. Depending on the passed string. Returns a square picture of the lane.
     */
    lane: PropTypes.string.isRequired
};