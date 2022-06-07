import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import Car10 from './x.js';

const myfirstelement = <h1>Hello React!</h1>;
const x1 = <button>HI THERE</button>;
const x2= <p>5+5 is equal to {5+5}</p>;
const list = (
  <select>
    <option>NO</option>
    <option>YES</option>
  </select>
);

const input = <input type="checkbox"></input>



ReactDOM.render(myfirstelement, document.getElementById('root'));
ReactDOM.render(x1, document.getElementById("test1"));
ReactDOM.render(x2, document.getElementById("test2"));
ReactDOM.render(list, document.getElementById("test3"));
ReactDOM.render(input, document.getElementById("test4"));

class Auto extends React.Component
{
  render()
  {
    return <h2>Hello there</h2>;
  }
}

reactDom.render(<Auto/>, document.getElementById('test5'));

//same but a function
function Autofun()
{
  return <h2>Hello im from function</h2>
}

reactDom.render(<Autofun />, document.getElementById("test6"));

// Autofun2 = () => {return <h2>Hello im arrow function</h2>};
// reactDom.render(<Autofun2/>, document.getElementById("test7"));

class Klasa extends React.Component
{
  constructor()
  {
    super();
    this.state = {color: "red"};
    this.state2 = "red2";
  }

  render()
  {
    return <h1>IM {this.state.color} RED</h1>;
  }

}

ReactDOM.render(<Klasa/>, document.getElementById("test7"));

class Klasa2 extends React.Component
{
  constructor()
  {
    super();
  }

  render()
  {
    return <h1>Hello there i am {this.props.dish}</h1>
  }
}

ReactDOM.render(<Klasa2 dish = "CUP"/>, document.getElementById("test8"));



class BigX extends React.Component
{
  render()
  {
    return <h1>AAA MY {this.props.item} is</h1>
  }
}

class BigY extends React.Component
{
  constructor()
  {
    super();
    this.color = "brown";
  }

  render()
  {
    return(
    <div>
      <BigX item = "Tea"/>
      <b>{this.color}</b>
    <ul>
      <li>EarlGrey</li>
      <li>BrownTea</li>
    </ul>
    </div>);
  }

}

reactDom.render(<BigY/>, document.getElementById("test9"));


reactDom.render(<Car10 />, document.getElementById("testA"));