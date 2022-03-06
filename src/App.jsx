import React, { useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist";

function App() {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const inpitem = (e) => {
    setInputlist(e.target.value);
  };

  const additems = () => {
    setItems((todoitem) => {
      return [...todoitem, inputlist];
    });
    setInputlist("");
  };

  const delfun = (id) => {
    setItems((todoitem) => {
      return todoitem.filter((carr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div className="main">
      <div className="App">
        <div className="top">
          <div className="head">Todo List </div>
          <div className="inp">
            <input type="text" value={inputlist} onChange={inpitem} />
            <button onClick={additems}>Add</button>
          </div>
        </div>
        <div className="ul">
          {items.map((list, index) => {
            return (
              <Todolist key={index} id={index} list={list} onSelect={delfun} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
