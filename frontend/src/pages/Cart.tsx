// import { Link } from 'react-router-dom';
// import { Minus, Plus, X } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import { Button } from '@/components/ui/button';

// const Cart = () => {
//   const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

//   if (items.length === 0) {
//     return (
//       <main className="pt-24 pb-16 min-h-screen">
//         <div className="max-w-7xl mx-auto px-4 text-center py-20 space-y-6">
//           <h1 className="text-4xl font-bold tracking-wide">Your Cart</h1>
//           <p className="text-sm font-sans text-muted-foreground">Your cart is empty.</p>
//           <Link to="/shop">
//             <Button className="rounded-none font-sans text-sm tracking-widest uppercase px-10 py-5">
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl font-bold tracking-wide mb-12 text-center">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//           {/* Items */}
//           <div className="lg:col-span-2 space-y-6">
//             {items.map(item => (
//               <div key={`${item.productId}-${item.size}`} className="flex gap-4 border-b border-border pb-6">
//                 <Link to={`/product/${item.productId}`} className="w-24 h-32 bg-muted flex-shrink-0 overflow-hidden">
//                   <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
//                 </Link>
//                 <div className="flex-1 flex flex-col justify-between">
//                   <div className="flex justify-between">
//                     <div>
//                       <h3 className="text-sm font-sans font-medium">{item.name}</h3>
//                       <p className="text-xs font-sans text-muted-foreground mt-1">Size: {item.size}</p>
//                     </div>
//                     <button onClick={() => removeFromCart(item.productId, item.size)} className="text-muted-foreground hover:text-foreground">
//                       <X size={16} />
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between mt-4">
//                     <div className="flex items-center border border-border">
//                       <button onClick={() => updateQuantity(item.productId, item.size, item.quantity - 1)} className="p-2">
//                         <Minus size={14} />
//                       </button>
//                       <span className="px-4 text-sm font-sans">{item.quantity}</span>
//                       <button onClick={() => updateQuantity(item.productId, item.size, item.quantity + 1)} className="p-2">
//                         <Plus size={14} />
//                       </button>
//                     </div>
//                     <p className="text-sm font-sans font-medium">${item.price * item.quantity}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Summary */}
//           <div className="border border-border p-6 h-fit space-y-6">
//             <h2 className="text-lg font-bold tracking-wide">Order Summary</h2>
//             <div className="flex justify-between text-sm font-sans">
//               <span className="text-muted-foreground">Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>
//             <div className="flex justify-between text-sm font-sans">
//               <span className="text-muted-foreground">Shipping</span>
//               <span>Free</span>
//             </div>
//             <div className="border-t border-border pt-4 flex justify-between font-sans font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>
//             <Link to="/checkout">
//               <Button className="w-full rounded-none font-sans text-sm tracking-widest uppercase py-5">
//                 Proceed to Checkout
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Cart;


// import { Link } from "react-router-dom";
// import { Minus, Plus, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const Cart = () => {
//   const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

//   if (items.length === 0) {
//     return (
//       <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
//         <div className="text-center px-4 space-y-6">
//           <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
//             Your Cart
//           </h1>
//           <p className="text-sm text-muted-foreground">
//             Your cart is empty.
//           </p>
//           <Link to="/shop">
//             <Button className="rounded-none text-sm tracking-widest uppercase px-8 py-4 w-full sm:w-auto">
//               Continue Shopping
//             </Button>
//           </Link>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-10 text-center">
//           Your Cart
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

//           {/* ITEMS */}
//           <div className="lg:col-span-2 space-y-8">
//             {items.map((item) => (
//               <div
//                 key={`${item.productId}-${item.size}`}
//                 className="flex flex-col sm:flex-row gap-6 border-b border-border pb-6"
//               >
//                 {/* Image */}
//                 <Link
//                   to={`/product/${item.productId}`}
//                   className="w-full sm:w-28 h-44 sm:h-36 bg-muted overflow-hidden"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </Link>

//                 {/* Details */}
//                 <div className="flex-1 flex flex-col justify-between">

//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="text-sm md:text-base font-medium">
//                         {item.name}
//                       </h3>
//                       <p className="text-xs text-muted-foreground mt-1">
//                         Size: {item.size}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() =>
//                         removeFromCart(item.productId, item.size)
//                       }
//                       className="text-muted-foreground hover:text-foreground"
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>

//                   <div className="flex items-center justify-between mt-5">
//                     <div className="flex items-center border border-border">
//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             item.productId,
//                             item.size,
//                             item.quantity - 1
//                           )
//                         }
//                         className="p-2"
//                       >
//                         <Minus size={14} />
//                       </button>

//                       <span className="px-4 text-sm">
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             item.productId,
//                             item.size,
//                             item.quantity + 1
//                           )
//                         }
//                         className="p-2"
//                       >
//                         <Plus size={14} />
//                       </button>
//                     </div>

//                     <p className="text-sm md:text-base font-medium">
//                       ${item.price * item.quantity}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* SUMMARY */}
//           <div className="border border-border p-6 space-y-6 h-fit">
//             <h2 className="text-lg font-bold tracking-wide">
//               Order Summary
//             </h2>

//             <div className="flex justify-between text-sm">
//               <span className="text-muted-foreground">Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>

//             <div className="flex justify-between text-sm">
//               <span className="text-muted-foreground">Shipping</span>
//               <span>Free</span>
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Link to="/checkout">
//               <Button className="w-full rounded-none text-sm tracking-widest uppercase py-4">
//                 Proceed to Checkout
//               </Button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Cart;


// import { Link } from "react-router-dom";
// import { Minus, Plus, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const Cart = () => {
//   const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

//   if (items.length === 0) {
//     return (
//       <main className="pt-28 pb-16 min-h-screen">
//         <div className="max-w-6xl mx-auto px-4">

//           <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-8">
//             Your Cart
//           </h1>

//           <div className="border border-border p-8 text-center space-y-6">
//             <p className="text-muted-foreground">
//               Your cart is empty.
//             </p>
//             <Link to="/shop">
//               <Button className="rounded-none tracking-widest uppercase px-8 py-4">
//                 Continue Shopping
//               </Button>
//             </Link>
//           </div>

//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-28 pb-16 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-10">
//           Your Cart
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* ITEMS */}
//           <div className="lg:col-span-2 space-y-8">
//             {items.map((item) => (
//               <div
//                 key={`${item.productId}-${item.size}`}
//                 className="flex flex-col sm:flex-row gap-6 border-b border-border pb-6"
//               >
//                 <Link
//                   to={`/product/${item.productId}`}
//                   className="w-full sm:w-32 h-44 sm:h-40 bg-muted overflow-hidden"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </Link>

//                 <div className="flex-1 flex flex-col justify-between">

//                   <div className="flex justify-between">
//                     <div>
//                       <h3 className="text-base font-medium">
//                         {item.name}
//                       </h3>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         Size: {item.size}
//                       </p>
//                     </div>

//                     <button
//                       onClick={() =>
//                         removeFromCart(item.productId, item.size)
//                       }
//                       className="text-muted-foreground hover:text-foreground"
//                     >
//                       <X size={18} />
//                     </button>
//                   </div>

//                   <div className="flex items-center justify-between mt-6">
//                     <div className="flex items-center border border-border">
//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             item.productId,
//                             item.size,
//                             item.quantity - 1
//                           )
//                         }
//                         className="p-2"
//                       >
//                         <Minus size={14} />
//                       </button>

//                       <span className="px-4">
//                         {item.quantity}
//                       </span>

//                       <button
//                         onClick={() =>
//                           updateQuantity(
//                             item.productId,
//                             item.size,
//                             item.quantity + 1
//                           )
//                         }
//                         className="p-2"
//                       >
//                         <Plus size={14} />
//                       </button>
//                     </div>

//                     <p className="text-base font-medium">
//                       ${item.price * item.quantity}
//                     </p>
//                   </div>

//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* SUMMARY */}
//           <div className="border border-border p-6 space-y-6 h-fit">
//             <h2 className="text-lg font-bold tracking-wide">
//               Order Summary
//             </h2>

//             <div className="flex justify-between text-sm">
//               <span>Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>

//             <div className="flex justify-between text-sm">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Link to="/checkout">
//               <Button className="w-full rounded-none tracking-widest uppercase py-4">
//                 Proceed to Checkout
//               </Button>
//             </Link>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Cart;


// import { Link } from "react-router-dom";
// import { Minus, Plus, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const Cart = () => {
//   const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

//   if (items.length === 0) {
//     return (
//       <main className="pt-28 pb-16 min-h-screen">
//         <div className="px-4">
//           <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

//           <div className="border border-border p-8 text-center space-y-6">
//             <p className="text-muted-foreground">
//               Your cart is empty.
//             </p>

//             <Link to="/shop">
//               <Button className="w-full rounded-none uppercase tracking-widest py-4">
//                 Continue Shopping
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-28 pb-24 min-h-screen">
//       <div className="px-4 lg:max-w-6xl lg:mx-auto">

//         <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* ================= ITEMS ================= */}
//           <div className="lg:col-span-2 space-y-6">

//             {items.map((item) => (
//               <div
//                 key={`${item.productId}-${item.size}`}
//                 className="border border-border p-4 space-y-4"
//               >

//                 {/* Product Top */}
//                 <div className="flex gap-4">

//                   <Link
//                     to={`/product/${item.productId}`}
//                     className="w-28 h-36 bg-muted overflow-hidden"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </Link>

//                   <div className="flex-1 flex flex-col justify-between">

//                     <div className="flex justify-between">
//                       <div>
//                         <h3 className="text-sm font-medium">
//                           {item.name}
//                         </h3>
//                         <p className="text-xs text-muted-foreground mt-1">
//                           Size: {item.size}
//                         </p>
//                       </div>

//                       <button
//                         onClick={() =>
//                           removeFromCart(item.productId, item.size)
//                         }
//                         className="text-muted-foreground hover:text-foreground"
//                       >
//                         <X size={18} />
//                       </button>
//                     </div>

//                     {/* Quantity & Price */}
//                     <div className="flex items-center justify-between mt-4">

//                       <div className="flex items-center border border-border">
//                         <button
//                           onClick={() =>
//                             updateQuantity(
//                               item.productId,
//                               item.size,
//                               item.quantity - 1
//                             )
//                           }
//                           className="p-2"
//                         >
//                           <Minus size={14} />
//                         </button>

//                         <span className="px-4">
//                           {item.quantity}
//                         </span>

//                         <button
//                           onClick={() =>
//                             updateQuantity(
//                               item.productId,
//                               item.size,
//                               item.quantity + 1
//                             )
//                           }
//                           className="p-2"
//                         >
//                           <Plus size={14} />
//                         </button>
//                       </div>

//                       <p className="font-medium">
//                         ${item.price * item.quantity}
//                       </p>

//                     </div>

//                   </div>
//                 </div>
//               </div>
//             ))}

//           </div>

//           {/* ================= DESKTOP SUMMARY ================= */}
//           <div className="hidden lg:block border border-border p-6 space-y-6 h-fit">

//             <h2 className="text-lg font-bold">
//               Order Summary
//             </h2>

//             <div className="flex justify-between text-sm">
//               <span>Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>

//             <div className="flex justify-between text-sm">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Link to="/checkout">
//               <Button className="w-full rounded-none uppercase tracking-widest py-4">
//                 Proceed to Checkout
//               </Button>
//             </Link>

//           </div>

//         </div>
//       </div>

//       {/* ================= MOBILE STICKY BAR ================= */}
//       <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden">
//         <div className="flex items-center justify-between mb-3">
//           <span className="text-sm">Total</span>
//           <span className="font-bold">${totalPrice}</span>
//         </div>

//         <Link to="/checkout">
//           <Button className="w-full rounded-none uppercase tracking-widest py-4">
//             Proceed to Checkout
//           </Button>
//         </Link>
//       </div>

//     </main>
//   );
// };

// export default Cart;


// import { Link } from "react-router-dom";
// import { Minus, Plus, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const Cart = () => {
//   const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

//   if (items.length === 0) {
//     return (
//       <main className="pt-28 pb-16 min-h-screen">
//         <div className="px-4 max-w-6xl mx-auto">
//           <h1 className="text-3xl md:text-4xl font-bold mb-8">
//             Your Cart
//           </h1>

//           <div className="border border-border p-8 text-center space-y-6">
//             <p className="text-muted-foreground">
//               Your cart is empty.
//             </p>

//             <Link to="/shop">
//               <Button className="w-full md:w-auto rounded-none uppercase tracking-widest py-4 px-8">
//                 Continue Shopping
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-28 pb-16 min-h-screen">
//       <div className="px-4 max-w-6xl mx-auto">

//         <h1 className="text-3xl md:text-4xl font-bold mb-8">
//           Your Cart
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

//           {/* ================= ITEMS ================= */}
//           <div className="lg:col-span-2 space-y-6">

//             {items.map((item) => (
//               <div
//                 key={`${item.productId}-${item.size}`}
//                 className="border border-border p-4 md:p-6"
//               >

//                 <div className="flex flex-col sm:flex-row gap-4">

//                   {/* IMAGE RESPONSIVE */}
//                   <Link
//                     to={`/product/${item.productId}`}
//                     className="w-full sm:w-32 md:w-40 lg:w-36 h-48 sm:h-40 md:h-48 bg-muted overflow-hidden"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-full h-full object-cover"
//                     />
//                   </Link>

//                   {/* DETAILS */}
//                   <div className="flex-1 flex flex-col justify-between">

//                     <div className="flex justify-between">
//                       <div>
//                         <h3 className="text-base md:text-lg font-medium">
//                           {item.name}
//                         </h3>
//                         <p className="text-sm text-muted-foreground mt-1">
//                           Size: {item.size}
//                         </p>
//                       </div>

//                       <button
//                         onClick={() =>
//                           removeFromCart(item.productId, item.size)
//                         }
//                         className="text-muted-foreground hover:text-foreground"
//                       >
//                         <X size={18} />
//                       </button>
//                     </div>

//                     {/* Quantity + Price */}
//                     <div className="flex items-center justify-between mt-6">

//                       <div className="flex items-center border border-border">
//                         <button
//                           onClick={() =>
//                             updateQuantity(
//                               item.productId,
//                               item.size,
//                               item.quantity - 1
//                             )
//                           }
//                           className="p-2 md:p-3"
//                         >
//                           <Minus size={16} />
//                         </button>

//                         <span className="px-4 md:px-6 text-base">
//                           {item.quantity}
//                         </span>

//                         <button
//                           onClick={() =>
//                             updateQuantity(
//                               item.productId,
//                               item.size,
//                               item.quantity + 1
//                             )
//                           }
//                           className="p-2 md:p-3"
//                         >
//                           <Plus size={16} />
//                         </button>
//                       </div>

//                       <p className="text-base md:text-lg font-semibold">
//                         ${item.price * item.quantity}
//                       </p>

//                     </div>

//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* ================= MOBILE CHECKOUT BUTTON ================= */}
//             <div className="lg:hidden mt-8 border border-border p-6 space-y-4">

//               <div className="flex justify-between text-sm">
//                 <span>Subtotal</span>
//                 <span>${totalPrice}</span>
//               </div>

//               <div className="flex justify-between text-sm">
//                 <span>Shipping</span>
//                 <span>Free</span>
//               </div>

//               <div className="border-t border-border pt-4 flex justify-between font-medium">
//                 <span>Total</span>
//                 <span>${totalPrice}</span>
//               </div>

//               <Link to="/checkout">
//                 <Button className="w-full rounded-none uppercase tracking-widest py-4">
//                   Proceed to Checkout
//                 </Button>
//               </Link>

//             </div>

//           </div>

//           {/* ================= DESKTOP SUMMARY ================= */}
//           <div className="hidden lg:block border border-border p-6 space-y-6 h-fit">

//             <h2 className="text-lg font-bold">
//               Order Summary
//             </h2>

//             <div className="flex justify-between text-sm">
//               <span>Subtotal</span>
//               <span>${totalPrice}</span>
//             </div>

//             <div className="flex justify-between text-sm">
//               <span>Shipping</span>
//               <span>Free</span>
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Link to="/checkout">
//               <Button className="w-full rounded-none uppercase tracking-widest py-4">
//                 Proceed to Checkout
//               </Button>
//             </Link>

//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Cart;


import { Link } from "react-router-dom";
import { Minus, Plus, X } from "lucide-react";
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
