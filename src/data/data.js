const STORAGE_KEY = "items";
const STORAGE_VERSION = "1.0";

export function getInitialItems(onError) {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (!savedData) return [];

    const { version, items } = JSON.parse(savedData);
    if (version !== STORAGE_VERSION) {
      localStorage.removeItem(STORAGE_KEY);
      return [];
    }

    if (!Array.isArray(items)) {
      throw new Error("Данные в localStorage не являются массивом");
    }

    const isValid = items.every(
      (item) => typeof item === "object" && "id" in item && "text" in item
    );
    if (!isValid) {
      throw new Error("Некорректный формат данных в localStorage");
    }

    return items;
  } catch (error) {
    console.error("Ошибка загрузки из localStorage:", error);
    if (onError) onError(error);
    return [];
  }
}

export function saveItems(items, onError) {
  try {
    const data = { version: STORAGE_VERSION, items };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Ошибка сохранения в localStorage:", error);
    if (onError) onError(error);
  }
}

export function clearItems() {
  localStorage.removeItem(STORAGE_KEY);
}
