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

  const filterRedFruits = () =>{ 
    setFruits(
    fruits.filter((item) => {
    return item.color === "red";
  }))
}
  return (
    <div className="App">
      <div className="App-header">

        <Price precio = {
            fruits.map(item=>
              item.price
            ).reduce((a,b)=>{
        return a + b;
            })}/>

        <FruitList name = {
            fruits.map(item=>
              <li>
                {item.name}
              </li>
  )}/>

        <Button onClick={filterRedFruits}/>
      </div>
    </div>
  );
}
export default App;
