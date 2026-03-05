import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { useProduct } from "@/hooks/useProduct";

const ProductDetails = () => {

  const { id } = useParams();
  const { data: product, isLoading } = useProduct(id || "");
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // ✅ SIZE STATE
  const [selectedSize, setSelectedSize] = useState("");

  if (isLoading) {
    return (
      <div className="pt-32 text-center">
        Loading product...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="pt-32 text-center">
        Product not found
      </div>
    );
  }

  const price = Number(product.price);

  const discountPrice = product.discount_price
    ? Number(product.discount_price)
    : null;

  const finalPrice = discountPrice || price;

  const isOutOfStock = product.is_out_of_stock === true;

  // ✅ SIZES FROM API
  const sizeOptions = product.sizes || [];

  const handleAddToCart = () => {

    if (isOutOfStock) return;

    addToCart({
      productId: product.id,
      name: product.name,
      price: finalPrice,
      quantity,
      size: selectedSize,
      image: product.images?.[0],
    });

  };

  return (

    <main className="pt-28 pb-20">

      <div className="max-w-7xl mx-auto px-4">

        {/* BACK BUTTON */}

        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-sm mb-10 hover:underline"
        >
          <ArrowLeft size={16} />
          Back
        </Link>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


          {/* ================= IMAGE SECTION ================= */}

          <div className="relative">

            {isOutOfStock && (
              <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-xs tracking-widest">
                Out Of Stock
              </div>
            )}


            {/* MAIN IMAGE */}

            <motion.div
              key={activeImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="aspect-[3/4] bg-gray-100 overflow-hidden"
            >

              <img
                src={product.images?.[activeImage]}
                alt={product.name}
                className={`w-full h-full object-cover ${
                  isOutOfStock ? "opacity-60" : ""
                }`}
              />

            </motion.div>


            {/* THUMBNAILS */}

            {product.images?.length > 1 && (

              <div className="flex gap-3 mt-4">

                {product.images.map((img: string, index: number) => (

                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-20 aspect-square overflow-hidden border ${
                      activeImage === index
                        ? "border-black"
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >

                    <img
                      src={img}
                      className="w-full h-full object-cover"
                      alt=""
                    />

                  </button>

                ))}

              </div>

            )}

          </div>



          {/* ================= DETAILS SECTION ================= */}

          <div className="space-y-6">


            {/* PRODUCT NAME */}

            <h1 className="text-3xl font-bold">
              {product.name}
            </h1>


            {/* PRICE */}

            <div className="flex items-center gap-3 text-2xl">

              {discountPrice ? (

                <>
                  <span className="font-semibold">
                    ₹{discountPrice}
                  </span>

                  <span className="line-through text-gray-400 text-lg">
                    ₹{price}
                  </span>

                  <span className="text-green-600 text-sm">
                    ({product.discount_percentage}% OFF)
                  </span>
                </>

              ) : (
                <span>₹{price}</span>
              )}

            </div>


            {/* DESCRIPTION */}

            <p className="text-gray-600">
              {product.description}
            </p>



            {/* ================= SIZE SELECT ================= */}

            {sizeOptions.length > 0 && (

              <div>

                <p className="text-sm mb-2">
                  Select Size
                </p>

                <div className="flex gap-3">

                  {sizeOptions.map((size: string) => (

                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border text-sm transition
                        ${
                          selectedSize === size
                            ? "bg-black text-white border-black"
                            : "border-gray-300 hover:border-black"
                        }`}
                    >
                      {size}
                    </button>

                  ))}

                </div>

              </div>

            )}



            {/* ================= QUANTITY ================= */}

            <div>

              <p className="text-sm mb-2">
                Quantity
              </p>

              <div className="flex items-center border w-fit">

                <button
                  disabled={isOutOfStock}
                  onClick={() =>
                    setQuantity(q => Math.max(1, q - 1))
                  }
                  className="p-3 disabled:opacity-50"
                >
                  <Minus size={16} />
                </button>

                <span className="px-6">
                  {quantity}
                </span>

                <button
                  disabled={isOutOfStock}
                  onClick={() =>
                    setQuantity(q => q + 1)
                  }
                  className="p-3 disabled:opacity-50"
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>



            {/* ================= ADD TO CART ================= */}

            <Button
              disabled={
                isOutOfStock ||
                (sizeOptions.length > 0 && !selectedSize)
              }
              onClick={handleAddToCart}
              className={`w-full py-6 ${
                isOutOfStock
                  ? "bg-gray-400 cursor-not-allowed"
                  : ""
              }`}
            >

              {isOutOfStock
                ? "Out Of Stock"
                : "Add To Cart"}

            </Button>

          </div>

        </div>

      </div>



      {/* ================= MOBILE BUTTON ================= */}

      {!isOutOfStock && (

        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">

          <Button
            onClick={handleAddToCart}
            disabled={
              sizeOptions.length > 0 && !selectedSize
            }
            className="w-full"
          >
            Add To Cart — ₹{finalPrice * quantity}
          </Button>

        </div>

      )}

    </main>

  );

};

export default ProductDetails;
