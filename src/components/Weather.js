import React from 'react';

// class Weather extends React.Component {
//     render() {
//         return (
//             <div>
//                 {this.props.city && <p>Location: {this.props.city}</p>}
//                 {this.props.temperature && <p>Temperature: {this.props.temperature} &#8457;</p>}
//                 <p>{this.props.description}</p>
//                 {this.props.error && <p>{this.props.error}</p>}
//             </div>
//         )
//     }
// }

const Weather = (props) => (
    <div>
        {props.city && <p>Location: {props.city}</p>}
        {props.temperature && <p>Temperature: {props.temperature} &#8457;</p>}
        <p>{props.description}</p>
        {props.error && <p>{props.error}</p>}
    </div>
)

export default Weather;