import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                
                <p>Location: {this.props.city}, {this.props.country}</p>
                <p>Temperature: {this.props.temp}</p>
                <p>Sunrise: {this.props.sunrise}</p>
                <p>Sunset: {this.props.sunset}</p>
            </div>
        )
    }
}

export default Weather;