/* eslint-disable no-restricted-globals */
export default function TaskControls({
  setItems,
  visibleChecked,
  setVisibleChecked,
  handleSort,
  sortDirection,
}) {
  return (
    <div className="row-controls">
      <div>
        <button
          onClick={() => {
            if (confirm(`Вы уверены, что хотите все удалить`)) setItems([]);
          }}>
          Очистить весь список
        </button>
      </div>
      <div>
        <button onClick={() => setVisibleChecked((prev) => !prev)}>
          {visibleChecked ? "Показать отмеченные" : "Скрыть отмеченные"}
        </button>
      </div>
      <div>
        <button onClick={handleSort}>
          Сортировать по алфавиту {sortDirection === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>
    </div>
  );
}
