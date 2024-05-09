// App.js
import React, { useState } from "react";
import ItemForm from "./ItemForm";

function App() {
  const [items, setItems] = useState([]);

  const handleItemFormSubmit = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
