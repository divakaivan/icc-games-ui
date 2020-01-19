import React from "react";
import Card from "./CardUi";
import "./card-style.css";

const Cards = props => {
    return (
        <div className="container-fluid">
            <div className="row card-deck">
                {
                    props.games.map(game => {
                        return (
                            <div className="col-md-4">
                                <Card
                                    id={game.id}
                                    red={game.red}
                                    blue={game.blue}
                                    duration={game.duration}
                                    videoUrl={game.videoUrl}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Cards;