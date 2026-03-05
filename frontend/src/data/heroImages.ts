// import { Banner } from "@/api/bannerApi";

// export function getHeroImages(banners?: Banner[]): string[] {

//   if (banners && banners.length > 0) {
//     return banners.map(banner => banner.image);
//   }

//   return [
//     "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//     "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//     "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
//   ];

// }


import { Banner } from "@/api/bannerApi";

export function getHeroData(banners?: Banner[]) {

  if (banners && banners.length > 0) {

    return banners.map(banner => ({
      image: banner.image,
      title: banner.title,
      subtitle: banner.subtitle,
      link: banner.link
    }));

  }

  return [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
      title: "Luxury Collection",
      subtitle: "Discover Premium Fashion",
      link: "/shop"
    }
  ];

}
