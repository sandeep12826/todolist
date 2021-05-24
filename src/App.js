import './App.css';
import React, {useState} from 'react';
import Todolist from './Todolist';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
    console.log(inputList);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    })
    setInputList(" ");
      
  }
  const deleteItems = (id) => {
    console.log("deleted");

    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      })
    })
}
  return(
    <>
       <div className ="main_div">
       <div className ="center_div">
       <br/>
       <h1> ToDo List</h1>
       <br/>
       <input type= "text" value={inputList} placeholder= "Add a Items" onChange={itemEvent}/>
       <button onClick={listOfItems}> + </button>
       <div className = "todolist">
       <ol>
         {/*<li> {inputList} </li>*/}
         {Items.map((itemval, index) => {
           return(
           <Todolist key={index} id={index} text = {itemval} onSelect={deleteItems}/>
           )
         })}
       </ol>
       </div>

       </div>

       </div>
    </>
  )

}
 export default App;