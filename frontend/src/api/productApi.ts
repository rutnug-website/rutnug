const API_BASE =
  "https://api.rutnug.com/api/auth";



/* =========================================
   FETCH ALL PRODUCTS
========================================= */

export async function fetchProducts(
  category?: string
) {

  let url =
    `${API_BASE}/products/`;

  if (
    category &&
    category !== "all"
  ) {

    url += `?category=${category}`;

  }

  const response =
    await fetch(url);

  if (!response.ok) {

    throw new Error(
      "Failed to fetch products"
    );

  }

  return response.json();

}



/* =========================================
   FETCH SINGLE PRODUCT
========================================= */

export async function fetchProduct(
  id: string
) {

  const response =
    await fetch(
      `${API_BASE}/products/${id}/`
    );

  if (!response.ok) {

    throw new Error(
      "Failed to fetch product"
    );

  }

  return response.json();

}



/* =========================================
   FETCH CATEGORIES
========================================= */

export async function fetchCategories() {

  const response =
    await fetch(
      `${API_BASE}/categories/`
    );

  if (!response.ok) {

    throw new Error(
      "Failed to fetch categories"
    );

  }

  return response.json();

}
