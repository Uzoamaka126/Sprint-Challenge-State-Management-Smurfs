import React from 'react';

export default function SingleSmurf(props) {
    // const { smurf } 
    return (
        <div className="card">
            <p>{props.name}</p>
            <div className="card-body">
                <img />
            </div>
            <div className="card-body-info">
                <p>Age: {props.age}</p>
                <p>Height: {props.height}</p>
            </div>
        </div>
    )
}