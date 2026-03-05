// executed code
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useBanners } from "@/hooks/useBanners";

import logoLight from "@/assets/IMG_1760 copy.png";
import logoDark from "@/assets/IMG_1760 copywhite.png";

const API = "https://api.rutnug.com/api/auth/products/";

/* =============================
   Product Type
============================= */

interface Product {
  id: number;
  name: string;
  price: string;
  discount_price?: string;
  images: string[];
  is_new_arrival: boolean;
  is_best_seller: boolean;
  is_out_of_stock: boolean;
}

/* =============================
   Product Card (NO Out Of Stock Badge Here)
============================= */

const ProductCard = ({ product }: { product: Product }) => {
  const price = Number(product.price);

  const discountPrice = product.discount_price
    ? Number(product.discount_price)
    : null;

  const finalPrice = discountPrice || price;

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Only New & Best Seller Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {product.is_new_arrival && (
            <span className="bg-white text-black text-xs px-2 py-1 uppercase">
              New
            </span>
          )}

          {product.is_best_seller && (
            <span className="bg-black text-white text-xs px-2 py-1 uppercase">
              Best Seller
            </span>
          )}
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>

        <div className="flex gap-2 items-center mt-1">
          {discountPrice && (
            <span className="line-through text-gray-400 text-sm">₹{price}</span>
          )}

          <span className="text-sm font-semibold">₹{finalPrice}</span>
        </div>
      </div>
    </Link>
  );
};

/* =============================
   Index Page
============================= */

const Index = () => {
  const { isDark } = useTheme();
  const { data: banners, isLoading } = useBanners();

  const [newArrivals, setNewArrivals] = useState<Product[]>([]);
  const [bestSellers, setBestSellers] = useState<Product[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  /* =============================
     Fetch New Arrivals
  ============================= */

  useEffect(() => {
    fetch(API + "?type=new")
      .then((res) => res.json())
      .then((data) => setNewArrivals(data));
  }, []);

  /* =============================
     Fetch Best Sellers
  ============================= */

  useEffect(() => {
    fetch(API + "?type=best")
      .then((res) => res.json())
      .then((data) => setBestSellers(data));
  }, []);

  /* =============================
     Auto Banner Slider
  ============================= */

  useEffect(() => {
    if (!banners || banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, [banners]);

  if (isLoading)
    return <div className="pt-32 text-center">Loading banners...</div>;

  return (
    <main>
      {/* =============================
         HERO SECTION
      ============================= */}

      <section className="relative h-screen overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={banners?.[currentSlide]?.image}
            src={banners?.[currentSlide]?.image}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
          <img src={isDark ? logoDark : logoLight} className="w-40 mb-6" />

          <h2 className="tracking-[0.3em] uppercase mb-2">
            Luxury Without Limits
          </h2>

          <h1 className="text-4xl font-bold mb-4">
            {banners?.[currentSlide]?.title}
          </h1>

          <p className="mb-6">{banners?.[currentSlide]?.subtitle}</p>

          <Link to={banners?.[currentSlide]?.link || "/shop"}>
            <Button className="bg-white text-black hover:bg-gray-200">
              Shop Now
              <ArrowRight size={16} />
            </Button>
          </Link>
        </div>

        {/* DOT INDICATORS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {banners?.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* =============================
         NEW ARRIVALS
      ============================= */}

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">New Arrivals</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* =============================
         BEST SELLERS
      ============================= */}

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">Best Sellers</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Index;
