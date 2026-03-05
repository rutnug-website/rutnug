export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'men' | 'women' | 'unisex' | 'streetwear';
  isNewArrival: boolean;
  isBestseller: boolean;
  description: string;
  images: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Oversized Structure Tee',
    price: 89,
    category: 'men',
    isNewArrival: true,
    isBestseller: true,
    description: 'Premium heavyweight cotton oversized tee with architectural seam details. Crafted for those who demand both comfort and presence.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '2',
    name: 'Noir Essential Hoodie',
    price: 145,
    category: 'unisex',
    isNewArrival: true,
    isBestseller: true,
    description: 'A refined take on the classic hoodie. 400gsm French terry cotton with minimal branding and a relaxed silhouette.',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1578768079470-0a4536e36092?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '3',
    name: 'Tailored Wide Trousers',
    price: 165,
    category: 'women',
    isNewArrival: false,
    isBestseller: true,
    description: 'Wide-leg tailored trousers in premium wool blend. High waist with pressed crease for editorial sophistication.',
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '4',
    name: 'Urban Cargo Pants',
    price: 135,
    category: 'streetwear',
    isNewArrival: true,
    isBestseller: false,
    description: 'Technical cargo pants with multi-pocket design. Ripstop nylon construction for urban exploration.',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '5',
    name: 'Minimal Bomber Jacket',
    price: 245,
    category: 'men',
    isNewArrival: false,
    isBestseller: true,
    description: 'Clean-line bomber jacket in matte black nylon. Ribbed collar and cuffs with concealed zip closure.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1548126032-079a0fb0099d?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '6',
    name: 'Silk Blend Slip Dress',
    price: 195,
    category: 'women',
    isNewArrival: true,
    isBestseller: false,
    description: 'Luxurious silk-blend slip dress with cowl neckline. Effortless elegance for evening or day.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '7',
    name: 'Graphic Street Tee',
    price: 75,
    category: 'streetwear',
    isNewArrival: true,
    isBestseller: false,
    description: 'Bold graphic print on premium cotton. Oversized fit with dropped shoulders and raw-edge hem.',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '8',
    name: 'Deconstructed Blazer',
    price: 285,
    category: 'unisex',
    isNewArrival: false,
    isBestseller: true,
    description: 'Unstructured blazer with raw edges and asymmetric closure. Japanese wool blend for a luxurious drape.',
    images: [
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '9',
    name: 'Cropped Tank',
    price: 55,
    category: 'women',
    isNewArrival: true,
    isBestseller: false,
    description: 'Ribbed cotton cropped tank with square neckline. A wardrobe essential reimagined with premium fabric.',
    images: [
      'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80',
      'https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '10',
    name: 'Tech Windbreaker',
    price: 195,
    category: 'streetwear',
    isNewArrival: false,
    isBestseller: false,
    description: 'Lightweight technical windbreaker with reflective details. Packable design meets urban aesthetic.',
    images: [
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '11',
    name: 'Essential Crew Sweatshirt',
    price: 115,
    category: 'unisex',
    isNewArrival: true,
    isBestseller: true,
    description: 'Heavy-weight crew neck sweatshirt in brushed-back fleece. Garment-dyed for a lived-in luxury feel.',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: '12',
    name: 'Leather Moto Jacket',
    price: 395,
    category: 'men',
    isNewArrival: false,
    isBestseller: true,
    description: 'Full-grain leather motorcycle jacket with asymmetric zip. Lined in silk for ultimate luxury.',
    images: [
      'https://images.unsplash.com/photo-1520975954732-35dd22299614?w=800&q=80',
      'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=800&q=80',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
  },
];

export const getProductById = (id: string) => products.find(p => p.id === id);
export const getProductsByCategory = (category: string) => 
  category === 'new' ? products.filter(p => p.isNewArrival) : products.filter(p => p.category === category);
export const getBestsellers = () => products.filter(p => p.isBestseller);
export const getNewArrivals = () => products.filter(p => p.isNewArrival);
