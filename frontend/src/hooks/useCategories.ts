import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/api/categoryApi";


export function useCategories() {

  return useQuery({

    queryKey: ["categories"],

    queryFn: fetchCategories,

    staleTime: Infinity,

  });

}



// import { useQuery } from "@tanstack/react-query";
// import { fetchCategories } from "@/api/productApi";

// export function useCategories() {

//   return useQuery({

//     queryKey: ["categories"],

//     queryFn: fetchCategories,

//     staleTime: 1000 * 60 * 60,

//   });

// }


// import { useQuery } from "@tanstack/react-query";

// import {
//   fetchCategories
// } from "@/api/productApi";



// export function useCategories() {

//   return useQuery({

//     queryKey: ["categories"],

//     queryFn: fetchCategories,

//   });

// }
