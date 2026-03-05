const API_BASE = "https://api.rutnug.com/api/auth";


export async function fetchCategories() {

  const response = await fetch(
    `${API_BASE}/categories/`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}
