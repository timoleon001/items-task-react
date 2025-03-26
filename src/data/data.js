export function allItems() {
  const savedItems = localStorage.getItem("items");
  return savedItems ? JSON.parse(savedItems) : [];
}
