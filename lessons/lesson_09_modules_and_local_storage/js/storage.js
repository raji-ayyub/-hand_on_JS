const STORAGE_KEY = "frontend-learning-resources";

export function getSavedResources() {
  const rawValue = localStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return [];
  }

  try {
    const parsedValue = JSON.parse(rawValue);
    return Array.isArray(parsedValue) ? parsedValue : [];
  } catch (error) {
    return [];
  }
}

export function saveResources(resources) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(resources));
}

export function createResource(resourceValues) {
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    title: resourceValues.title,
    url: resourceValues.url,
    category: resourceValues.category
  };
}
