import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <div>
                <p name="temperature">{this.props.temperature}</p>
                <p>{this.props.city}</p>
            </div>
        )
    }
}

export default Weather;