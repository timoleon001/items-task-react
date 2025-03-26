import { useState } from "react";

export default function Item({ item, onEdit, onDelete, onChecked, visible }) {
  const [editId, setEditId] = useState(false);
  const [editValue, setEditValue] = useState("");

  function handleKeyEditItem(event) {
    if (event.key === "Enter") handleInputBlur();
    if (event.key === "Escape") setEditId(null);
  }

  function handleInputBlur() {
    onEdit(item.id, editValue);
    setEditId(false);
  }

  return (
    <>
      {!(visible && item.checked) && (
        <li>
          {editId === item.id ? (
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              onKeyDown={(e) => handleKeyEditItem(e)}
              onBlur={() => handleInputBlur()}
            />
          ) : (
            <div>
              <span className="check">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => onChecked(item.id)}
                  checked={item.checked}
                  id={item.id}
                />
              </span>
              <label htmlFor={item.id}>{item.text}</label>
            </div>
          )}
          <div>
            <button
              onClick={() => {
                setEditId(item.id);
                setEditValue(item.text);
              }}>
              Редактировать
            </button>
            <button className="btn" onClick={() => onDelete(item.id)}>
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
}
