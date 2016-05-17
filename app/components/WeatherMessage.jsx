var React = require('react');

var WeatherMessage = ({temp, location}) => { //gest props.location and props.temp
  return(
    <p>Its {temp} in {location}</p>
)};

module.exports = WeatherMessage;
