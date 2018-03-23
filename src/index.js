var React = require('react');
var ReactDOM = require('react-dom');

// In react if you wwant to do the same thing, first need to create a react element of type h1 with content 'hello world' 2
var App = React.createElement('h1',null,'hello world');

// to create the above html element we can use JSX to generate it
App = <h1>Hello man! </h1>;

// take react element 'App' and display it on page on DOM.
// ReactDom.render([what],[where])
ReactDOM.render(
  App,
  document.getElementById('root')
);
