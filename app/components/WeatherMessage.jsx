var React = require('react');

var WeatherMessage = ({temp, location}) => { //gest props.location and props.temp
  return(
    <h3 className="text-center">Its {temp} in {location}</h3>
)};

module.exports = WeatherMessage;
