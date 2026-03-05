import { useQuery } from "@tanstack/react-query";

const API = "https://api.rutnug.com/api/auth/products";


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
