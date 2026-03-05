export interface Banner {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  order: number;
}

export async function fetchBanners(): Promise<Banner[]> {

  const response = await fetch(
    "https://api.rutnug.com/api/auth/banners/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch banners");
  }

  return response.json();
}
