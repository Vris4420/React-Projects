import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: crypto.randomUUID(), name: "Item 1" },
    { id: crypto.randomUUID(), name: "Item 2" },
  ]);

  function addItem() {
    setItems((currentItems) => {
      return [{ id: crypto.randomUUID(), name: "New Item" },...currentItems ];
    });
  }

  return (
    <>
      <h1>Rendering List</h1>

      <div>
        <button onClick={addItem}>Add Item</button>
        <pre>{JSON.stringify(items, null, 2)}</pre>
      </div>

      {/* To convert array to React JSX elements */}

      <pre>
        {items.map((item) => {
          return <div key={item.id}>
            {item.name}
            <input type="text"/>
            </div>;
        })}
      </pre>
    </>
  );
}

export default App;
