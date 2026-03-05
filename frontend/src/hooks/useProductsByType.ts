import { useQuery } from "@tanstack/react-query";

const API = "http://127.0.0.1:8000/api/auth/products";


export function useNewArrivals() {

  return useQuery({

    queryKey: ["new-arrivals"],

    queryFn: async () => {

      const res = await fetch(
        `${API}/new-arrivals/`
      );

      return res.json();
    },

  });

}


export function useBestSellers() {

  return useQuery({

    queryKey: ["best-sellers"],

    queryFn: async () => {

      const res = await fetch(
        `${API}/best-sellers/`
      );

      return res.json();
    },

  });

}


export function useOutOfStock() {

  return useQuery({

    queryKey: ["out-of-stock"],

    queryFn: async () => {

      const res = await fetch(
        `${API}/out-of-stock/`
      );

      return res.json();
    },

  });

}


// import { useQuery } from "@tanstack/react-query";

// const API_BASE =
//   "http://127.0.0.1:8000/api/auth/products/";


// /* =========================================
//    NEW ARRIVALS
// ========================================= */

// export function useNewArrivals() {

//   return useQuery({

//     queryKey: ["products", "new"],

//     queryFn: async () => {

//       const res =
//         await fetch(
//           `${API_BASE}?type=new`
//         );

//       if (!res.ok) {

//         throw new Error(
//           "Failed to fetch new arrivals"
//         );

//       }

//       return res.json();

//     },

//     staleTime: 1000 * 60 * 10,

//   });

// }



// /* =========================================
//    BEST SELLERS
// ========================================= */

// export function useBestSellers() {

//   return useQuery({

//     queryKey: ["products", "best"],

//     queryFn: async () => {

//       const res =
//         await fetch(
//           `${API_BASE}?type=best`
//         );

//       if (!res.ok) {

//         throw new Error(
//           "Failed to fetch best sellers"
//         );

//       }

//       return res.json();

//     },

//     staleTime: 1000 * 60 * 10,

//   });

// }



// /* =========================================
//    OUT OF STOCK
// ========================================= */

// export function useOutOfStock() {

//   return useQuery({

//     queryKey: ["products", "out"],

//     queryFn: async () => {

//       const res =
//         await fetch(
//           `${API_BASE}?type=out`
//         );

//       if (!res.ok) {

//         throw new Error(
//           "Failed to fetch out of stock"
//         );

//       }

//       return res.json();

//     },

//     staleTime: 1000 * 60 * 10,

//   });

// }
