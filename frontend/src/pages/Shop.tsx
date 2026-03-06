import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";

const Shop = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryFromURL = searchParams.get("category") || "all";

  const [active, setActive] = useState(categoryFromURL);

  const { data: products = [], isLoading } = useProducts("all");
  const { data: categories = [] } = useCategories();

  useEffect(() => {
    setActive(categoryFromURL);
  }, [categoryFromURL]);

  // ✅ FRONTEND FILTER
  const filteredProducts =
    active === "all"
      ? products
      : products.filter((p: any) => p.category === active);

  if (isLoading) {
    return (
      <div className="pt-32 text-center">
        Loading products...
      </div>
    );
  }

  return (
    <main className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
          Shop
        </h1>

        {/* FILTER BUTTONS */}
        <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">

          <button
            onClick={() => setSearchParams({ category: "all" })}
            className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border
              ${
                active === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border"
              }`}
          >
            All
          </button>

          {categories.map((c: any) => (
            <button
              key={c.slug}
              onClick={() => setSearchParams({ category: c.slug })}
              className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border
                ${
                  active === c.slug
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border"
                }`}
            >
              {c.name}
            </button>
          ))}

        </div>

        {/* PRODUCTS GRID */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {filteredProducts.map((product: any) => {

            const price = Number(product.price);
            const discountPrice = product.discount_price
              ? Number(product.discount_price)
              : null;

            const finalPrice = discountPrice || price;

            return (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/product/${product.id}`} className="group block">

                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="mt-3 space-y-1">

                    <h3 className="text-xs md:text-sm font-medium tracking-wide">
                      {product.name}
                    </h3>

                    <p className="text-xs md:text-sm text-muted-foreground">
                      ₹{finalPrice}
                    </p>

                  </div>

                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </main>
  );
};

export default Shop;
