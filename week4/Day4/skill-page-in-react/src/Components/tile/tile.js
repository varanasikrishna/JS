import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

function Tile(props) {
    return (
        <div className="col-lg-3 col-md-4">
            <div className="img-container">
                <img src={props.skillImg} alt={props.skillName} />
            </div>
            <div className="skill-name">
                {props.skillName}
            </div>
            <div className="skill-writeup">
                {props.skillDescription}
                {/* I will write semantic markup in HTML5 which is the latest standard of core technology of web. */}
            </div>
        </div>
    )
}

export default Tile;