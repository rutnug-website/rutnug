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
    "http://127.0.0.1:8000/api/auth/banners/"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch banners");
  }

  return response.json();
}
