/* eslint-disable no-restricted-globals */
import { useState, useEffect } from "react";
import "./App.css";
import { setAllItems, updateItems } from "./data/data";
import TaskInput from "./components/TaskInput";
import TaskControls from "./components/TaskControls";
import TaskList from "./components/TaskList";

function App() {
  const [items, setItems] = useState(setAllItems());
  const [input, setInput] = useState("");
  const [inputValid, setInputValid] = useState(false);
  const [sortDirection, setSortDirection] = useState("asc");
  const [visibleChecked, setVisibleChecked] = useState(false);

  useEffect(() => {
    updateItems(items);
  }, [items]);

  function addItem() {
    if (items.some((item) => item.text.toLowerCase() === input.toLowerCase())) {
      alert(`Пункт "${input}" уже есть в списке`);
      return;
    }

    if (input.trim()) {
      setItems([...items, { id: Date.now(), text: input, checked: false }]);
      setInput("");
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }

  function handlePressKey(event) {
    if (event.key === "Enter") addItem();
  }

  function handleSort() {
    const sortedItems = [...items].sort((a, b) =>
      sortDirection === "asc"
        ? a.text.localeCompare(b.text)
        : b.text.localeCompare(a.text)
    );
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    setItems(sortedItems);
  }

  return (
    <div className="App">
      <h1>Список задач</h1>
      <TaskInput
        input={input}
        onChangeInput={(e) => {
          setInput(e.target.value);
          setInputValid(false);
        }}
        handlePressKey={handlePressKey}
        inputValid={inputValid}
        onClickBtn={addItem}
      />
      <TaskControls
        setItems={setItems}
        visibleChecked={visibleChecked}
        setVisibleChecked={setVisibleChecked}
        handleSort={handleSort}
        sortDirection={sortDirection}
      />

      <TaskList
        items={items}
        setItems={setItems}
        visibleChecked={visibleChecked}
      />
    </div>
  );
}

export default App;
