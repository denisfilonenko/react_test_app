import React from 'react';

const Weather = props => (
    <div className="infoWeath">
    { props.city && 
        <>
            <p><span>Location:</span> {props.city}, {props.country}</p>
            <p><span>Weather:</span> {props.description}</p>
            <p><span>Temperature:</span> {props.temp}&deg;</p>
            <p><span>Pressure:</span> {props.pressure} mm</p>
            <p><span>Sunset:</span> {props.sunset}</p>
            <p><span>Wind speed:</span> {props.windspeed} m/s</p>
        </>
    }
        <p className="error">{ props.error }</p>
    </div>
);

export default Weather;