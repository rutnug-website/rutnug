// import { useQuery } from "@tanstack/react-query";
// import { fetchBanners } from "@/api/bannerApi";

// export function useBanners() {

//   return useQuery({
//     queryKey: ["banners"],
//     queryFn: fetchBanners,
//     staleTime: 1000 * 60 * 10,
//   });

// }


import { useQuery } from "@tanstack/react-query";
import { fetchBanners } from "@/api/bannerApi";

export function useBanners() {

  return useQuery({

    queryKey: ["banners"],

    queryFn: fetchBanners,

    staleTime: Infinity,

    refetchOnWindowFocus: false,

    refetchOnReconnect: false,

    refetchOnMount: false,

  });

}
