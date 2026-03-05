const API_BASE = "http://127.0.0.1:8000/api/auth";


export async function fetchCategories() {

  const response = await fetch(
    `${API_BASE}/categories/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
