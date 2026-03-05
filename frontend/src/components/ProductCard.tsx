import { Link } from "react-router-dom";

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

const ProductCard = ({ product }: { product: Product }) => {

  const price = Number(product.price);

  const discountPrice = product.discount_price
    ? Number(product.discount_price)
    : null;

  const finalPrice = discountPrice || price;

  return (

    <Link
      to={`/product/${product.id}`}
      className="group block"
    >

      <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">


        {/* IMAGE */}
        <img
          src={product.images?.[0]}
          alt={product.name}
          className={`
            w-full h-full object-cover
            transition duration-500
            group-hover:scale-105
            ${product.is_out_of_stock ? "opacity-50" : ""}
          `}
        />


        {/* BADGES */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">

          {product.is_new_arrival && (
            <span className="bg-white text-black text-xs px-2 py-1">
              NEW
            </span>
          )}

          {product.is_best_seller && (
            <span className="bg-black text-white text-xs px-2 py-1">
              BEST SELLER
            </span>
          )}

          {product.is_out_of_stock && (
            <span className="bg-red-600 text-white text-xs px-2 py-1">
              OUT OF STOCK
            </span>
          )}

        </div>

      </div>


      {/* INFO */}
      <div className="mt-3 space-y-1">

        <h3 className="text-sm uppercase tracking-wide">
          {product.name}
        </h3>

        <div className="flex gap-2 items-center">

          {discountPrice && (

            <span className="line-through text-gray-400 text-sm">
              ₹{price}
            </span>

          )}

          <span className="font-semibold text-sm">
            ₹{finalPrice}
          </span>

        </div>

      </div>

    </Link>

  );

};

export default ProductCard;
