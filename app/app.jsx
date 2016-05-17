var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

//router
//this is the new sintax ES6. its equal to var Route = require('react-router').Route;
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

//app css and add the sass loader after.
require('style!css!sass!applicationStyles');


//Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css'); //css! is the loader we added
$(document).foundation();



ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>       //this is the about
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>             // this is the standard
      </Route>
  </Router>,
document.getElementById('app')
);
