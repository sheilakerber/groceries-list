import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Sugar" },
    { id: 2, checked: true, item: "Salt" },
    { id: 3, checked: false, item: "Pepper" },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer listCount={items.length} />
    </div>
  );
}

export default App;
