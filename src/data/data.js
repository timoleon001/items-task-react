export function setAllItems() {
  try {
    const savedItems = localStorage.getItem("items");
    return savedItems ? JSON.parse(savedItems) : [];
  } catch (error) {
    console.error("Произошла ошибка загрузки из localStorage:", error);
  }
}

export function updateItems(items) {
  if (!items.length > 0) {
    deleteItems();
    return;
  }

  try {
    localStorage.setItem("items", JSON.stringify(items));
  } catch (error) {
    console.error("Произошла ошибка загрузки в localStorage:", error);
  }
}

function deleteItems() {
  try {
    localStorage.removeItem("items");
  } catch (error) {
    console.error("Произошла ошибка удаления списка в localStorage:", error);
  }
}
