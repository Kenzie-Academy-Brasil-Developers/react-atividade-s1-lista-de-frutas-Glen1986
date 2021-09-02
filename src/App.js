import './App.css';
import { useState } from 'react';
import Button from './components/Button';
import FruitList from './components/FruitList';
//import Nav from './components/Nav';
import Price from './components/Price';

 
function App() {
const [fruits, setFruits] = useState([
     { name: "banana", color: "yellow", price: 2 },
     { name: "cherry", color: "red", price: 3 },
     { name: "strawberry", color: "red", price: 4 },
    ]);

const nombre = fruits.map(item=>
            <li>{item.name}</li>
           )
const precio = fruits.map(item=>
  <div>{item.price} </div>
)

  return (
    <div className="App">
      <div className="App-header">
        <Price precio = {precio}></Price>
        <FruitList name = {nombre}></FruitList>
        <Button></Button>
      </div>
    </div>
  );
}
export default App;
