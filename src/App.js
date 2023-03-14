import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    const fruit1 = 'mango';
    const fruit2 = 'apple';
    const fruit3 = 'banana';
    const fruit4 = 'melon';
    const fruits = ['mango', 'apple', 'banana', 'melon'];
    
  }
  render() {
    const fruits = ['mango', 'apple', 'banana', 'melon'];
    console.log(fruits.includes('grape'));
    const fruit = fruits.map( (f, index)=> <li key={index}>{f}</li> )
    const numbers = [1,2,3,4,5,6,7,9]
    const number = numbers.filter( (n)=> n <= 2 )
    const num = number.map( (n)=> <li key={n.toString()}>{n}</li>)
    const total = numbers.reduce( (value, acc ) => value + acc );
    // console.log(total);
    return (
      <div>
        <h1>Hallo</h1>
        <ul>
          { fruit }
          { num }
        </ul>
      </div>
    )
  }
}

export default App;