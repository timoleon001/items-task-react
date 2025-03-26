import Item from "./Item";

export default function TaskList({ items, setItems, visibleChecked }) {
  return (
    <ul className="ul-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onEdit={(id, newText) =>
            setItems(
              items.map((i) => (i.id === id ? { ...i, text: newText } : i))
            )
          }
          onDelete={(id) => setItems(items.filter((i) => i.id !== id))}
          onChecked={(id) =>
            setItems(
              items.map((i) =>
                i.id === id ? { ...i, checked: !i.checked } : i
              )
            )
          }
          visible={visibleChecked}
        />
      ))}
    </ul>
  );
}
