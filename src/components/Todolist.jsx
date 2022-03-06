import React from "react";

const Todolist = (prop) => {
  return (
    <div className="lidiv">
      <li>{prop.list}</li>
      <button
        onClick={() => {
          prop.onSelect(prop.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Todolist;
