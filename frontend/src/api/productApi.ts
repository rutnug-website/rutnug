// const API_BASE = "http://127.0.0.1:8000/api/auth";


// export async function fetchProducts(category?: string) {

//   let url = `${API_BASE}/products/`;

//   if (category && category !== "all") {
//     url += `?category=${category}`;
//   }

//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return response.json();
// }



// export async function fetchProduct(id: string) {

//   const response = await fetch(
//     `${API_BASE}/products/${id}/`
//   );

//   if (!response.ok) {
//     throw new Error("Failed to fetch product");
//   }

//   return response.json();
// }


// const API_BASE = "http://127.0.0.1:8000/api/auth";


// // GET PRODUCTS
// export async function fetchProducts(category?: string) {

//   let url = `${API_BASE}/products/`;

//   if (category && category !== "all") {

//     url += `?category=${category}`;

//   }

//   const res = await fetch(url);

//   if (!res.ok) {
//     throw new Error("Failed to fetch products");
//   }

//   return res.json();

// }


// // GET CATEGORIES
// export async function fetchCategories() {

//   const res = await fetch(`${API_BASE}/categories/`);

//   if (!res.ok) {
//     throw new Error("Failed to fetch categories");
//   }

//   return res.json();

// }


// const API_BASE = "http://127.0.0.1:8000/api/auth";


// // ✅ FETCH ALL PRODUCTS
// export const fetchProducts = async (category?: string) => {

//   let url = `${API_BASE}/products/`;

//   if (category && category !== "all") {

//     url += `?category=${category}`;

//   }

//   const response = await fetch(url);

//   if (!response.ok) {

//     throw new Error("Failed to fetch products");

//   }

//   return await response.json();

// };



// // ✅ FETCH SINGLE PRODUCT
// export const fetchProduct = async (id: string) => {

//   const response = await fetch(

//     `${API_BASE}/products/${id}/`

//   );

//   if (!response.ok) {

//     throw new Error("Failed to fetch product");

//   }

//   return await response.json();

// };



const API_BASE =
  "http://127.0.0.1:8000/api/auth";



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
