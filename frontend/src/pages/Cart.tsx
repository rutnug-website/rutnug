import { Link } from "react-router-dom";
import { Minus, Plus, X, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const Cart = () => {

  const {
    items,
    updateQuantity,
    removeFromCart,
    totalPrice
  } = useCart();


  // EMPTY CART
  if (items.length === 0) {

    return (

      <main className="pt-28 pb-20 min-h-screen">

        <div className="max-w-6xl mx-auto px-4">

          {/* BACK BUTTON */}
          <Link
            to="/shop"
            className="flex items-center gap-2 text-sm uppercase tracking-widest mb-4 hover:opacity-70 transition"
          >
            <ArrowLeft size={18}/>
            Back 
          </Link>


          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-wide">
            Your Cart
          </h1>


          <div className="border border-gray-200 p-10 text-center space-y-6">

            <p className="text-gray-500">
              Your cart is empty
            </p>


            <Link to="/shop">

              <Button className="rounded-none uppercase tracking-widest px-8 py-4">

                Continue Shopping

              </Button>

            </Link>

          </div>

        </div>

      </main>

    );

  }


  return (

    <main className="pt-28 pb-20 min-h-screen">

      <div className="max-w-6xl mx-auto px-4">


        {/* BACK BUTTON */}
        <Link
          to="/shop"
          className="flex items-center gap-2 text-sm uppercase tracking-widest mb-4 hover:opacity-70 transition"
        >
          <ArrowLeft size={18}/>
          Back 
        </Link>


        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-bold mb-10 uppercase tracking-wide">
          Your Cart
        </h1>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">


          {/* ================= CART ITEMS ================= */}
          <div className="lg:col-span-2 space-y-6">


            {items.map((item) => {

              const itemTotal =
                item.price * item.quantity;

              return (

                <div
                  key={`${item.productId}-${item.size}`}
                  className="border border-gray-200 p-5"
                >


                  <div className="flex flex-col sm:flex-row gap-5">


                    {/* IMAGE */}
                    <Link
                      to={`/product/${item.productId}`}
                      className="w-full sm:w-32 md:w-40 h-48 sm:h-40 bg-gray-100 overflow-hidden"
                    >

                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />

                    </Link>


                    {/* DETAILS */}
                    <div className="flex-1 flex flex-col justify-between">


                      {/* TOP */}
                      <div className="flex justify-between">


                        <div>

                          <h3 className="text-base md:text-lg font-semibold uppercase tracking-wide">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500 mt-1">
                            Size: {item.size}
                          </p>

                          <p className="text-sm text-gray-500">
                            Price: ₹{item.price}
                          </p>

                        </div>


                        {/* REMOVE */}
                        <button
                          onClick={() =>
                            removeFromCart(
                              item.productId,
                              item.size
                            )
                          }
                          className="text-gray-400 hover:text-black transition"
                        >
                          <X size={18}/>
                        </button>


                      </div>


                      {/* QUANTITY + TOTAL */}
                      <div className="flex items-center justify-between mt-6">


                        {/* QUANTITY */}
                        <div className="flex items-center border border-gray-300">


                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="p-3 hover:bg-gray-100"
                          >
                            <Minus size={16}/>
                          </button>


                          <span className="px-6 text-base">
                            {item.quantity}
                          </span>


                          <button
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="p-3 hover:bg-gray-100"
                          >
                            <Plus size={16}/>
                          </button>


                        </div>


                        {/* TOTAL PRICE */}
                        <p className="text-lg font-semibold">
                          ₹{itemTotal}
                        </p>


                      </div>


                    </div>


                  </div>


                </div>

              );

            })}


            {/* ================= MOBILE SUMMARY ================= */}
            <div className="lg:hidden border border-gray-200 p-6 space-y-4 mt-8">


              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>₹{totalPrice}</span>
              </div>


              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>Free</span>
              </div>


              <div className="border-t pt-4 flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{totalPrice}</span>
              </div>


              <Link to="/checkout">

                <Button className="w-full rounded-none uppercase tracking-widest py-4">

                  Proceed to Checkout

                </Button>

              </Link>


            </div>


          </div>


          {/* ================= DESKTOP SUMMARY ================= */}
          <div className="hidden lg:block border border-gray-200 p-6 space-y-6 h-fit">


            <h2 className="text-lg font-bold uppercase tracking-wide">
              Order Summary
            </h2>


            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>


            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span>Free</span>
            </div>


            <div className="border-t pt-4 flex justify-between font-semibold">
              <span>Total</span>
              <span>₹{totalPrice}</span>
            </div>


            <Link to="/checkout">

              <Button className="w-full rounded-none uppercase tracking-widest py-4">

                Proceed to Checkout

              </Button>

            </Link>


          </div>


        </div>


      </div>

    </main>

  );

};

export default Cart;
