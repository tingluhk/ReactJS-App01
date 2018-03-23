let React = require('react');
let ReactDOM = require('react-dom');

// In react if you wwant to do the same thing, first need to create a react element of type h1 with content 'hello world' 2
let App = React.createElement('h1',null,'hello world');

// to create the above html element we can use JSX to generate it
App = <h1>Hello man! </h1>;

// add ul list to the page
const num = [1, 2, 3, 4, 5];
let App2 = (
  <ul>
    <li>pineApple</li>
    <li>apple</li>
    <li>tree</li>
    <li>google</li>
  </ul>
);

// the beauty of using a component is that you can reuse this function and it can take parameters
let Component = function(props){
  return(
    <h1>Greetings, {props.greeting}</h1>
  );
};

let Component1 = function(props){
  return(
    <div>
      {props.greeting}, I am {props.name}
    </div>
  );
};


// take react element 'App' and display it on page on DOM.
// ReactDom.render([what],[where])
// you can also use <Component /> to pass to ReactDOM.render()
ReactDOM.render(
  [<Component greeting="hello world" color="blue" />,
<Component1 greeting="greeting" name="john doh" />], 
  document.getElementById('root')
);


