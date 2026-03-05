// import { useState } from 'react';
// import { useCart } from '@/context/CartContext';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const [submitted, setSubmitted] = useState(false);

//   if (submitted) {
//     return (
//       <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
//         <div className="text-center space-y-4 px-4">
//           <h1 className="text-4xl font-bold tracking-wide">Order Confirmed</h1>
//           <p className="text-sm font-sans text-muted-foreground">Thank you for your order. Your order ID is #RUT{Date.now().toString().slice(-6)}.</p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <div className="max-w-5xl mx-auto px-4">
//         <h1 className="text-4xl font-bold tracking-wide mb-12 text-center">Checkout</h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Form */}
//           <div className="space-y-6">
//             <h2 className="text-lg font-bold tracking-wide">Shipping Information</h2>
//             <div className="space-y-4">
//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">Full Name</Label>
//                 <Input className="rounded-none mt-2 font-sans" placeholder="Your full name" />
//               </div>
//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">Phone</Label>
//                 <Input className="rounded-none mt-2 font-sans" placeholder="Phone number" />
//               </div>
//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">Email</Label>
//                 <Input className="rounded-none mt-2 font-sans" type="email" placeholder="Email address" />
//               </div>
//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">Address</Label>
//                 <Input className="rounded-none mt-2 font-sans" placeholder="Full address" />
//               </div>
//             </div>

//             <div className="space-y-4 pt-6">
//               <h2 className="text-lg font-bold tracking-wide">Payment Method</h2>
//               <div className="border border-border p-4 space-y-3">
//                 {['Credit / Debit Card', 'UPI', 'Cash on Delivery'].map(m => (
//                   <label key={m} className="flex items-center gap-3 cursor-pointer">
//                     <input type="radio" name="payment" className="accent-foreground" defaultChecked={m === 'Cash on Delivery'} />
//                     <span className="text-sm font-sans">{m}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Order Summary */}
//           <div className="border border-border p-6 h-fit space-y-6">
//             <h2 className="text-lg font-bold tracking-wide">Order Summary</h2>
//             <div className="space-y-4">
//               {items.map(item => (
//                 <div key={`${item.productId}-${item.size}`} className="flex justify-between text-sm font-sans">
//                   <span>{item.name} (×{item.quantity}) — {item.size}</span>
//                   <span>${item.price * item.quantity}</span>
//                 </div>
//               ))}
//             </div>
//             <div className="border-t border-border pt-4 flex justify-between font-sans font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>
//             <Button
//               onClick={() => { clearCart(); setSubmitted(true); }}
//               className="w-full rounded-none font-sans text-sm tracking-widest uppercase py-5"
//             >
//               Confirm Order
//             </Button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const [submitted, setSubmitted] = useState(false);

//   const orderId = `RUT${Date.now().toString().slice(-6)}`;

//   if (submitted) {
//     return (
//       <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
//         <div className="text-center space-y-4 px-4">
//           <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
//             Order Confirmed
//           </h1>
//           <p className="text-sm md:text-base font-sans text-muted-foreground">
//             Thank you for your order.
//           </p>
//           <p className="text-sm font-sans tracking-wide">
//             Your Order ID is <span className="font-bold">#{orderId}</span>
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4">
        
//         {/* Page Title */}
//         <h1 className="text-3xl md:text-5xl font-bold tracking-wide mb-10 md:mb-14 text-center">
//           Checkout
//         </h1>

//         {/* Responsive Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

//           {/* ================= FORM SECTION ================= */}
//           <div className="space-y-8">
            
//             <h2 className="text-lg md:text-xl font-bold tracking-wide">
//               Shipping Information
//             </h2>

//             <div className="space-y-5">

//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">
//                   Full Name
//                 </Label>
//                 <Input
//                   className="rounded-none mt-2 font-sans"
//                   placeholder="Your full name"
//                 />
//               </div>

//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">
//                   Phone
//                 </Label>
//                 <Input
//                   className="rounded-none mt-2 font-sans"
//                   placeholder="Phone number"
//                 />
//               </div>

//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">
//                   Email
//                 </Label>
//                 <Input
//                   type="email"
//                   className="rounded-none mt-2 font-sans"
//                   placeholder="Email address"
//                 />
//               </div>

//               <div>
//                 <Label className="text-xs font-sans tracking-widest uppercase">
//                   Address
//                 </Label>
//                 <Input
//                   className="rounded-none mt-2 font-sans"
//                   placeholder="Full address"
//                 />
//               </div>
//             </div>

//             {/* Payment Section */}
//             <div className="pt-6 space-y-5">
//               <h2 className="text-lg md:text-xl font-bold tracking-wide">
//                 Payment Method
//               </h2>

//               <div className="border border-border p-5 space-y-4">
//                 {["Credit / Debit Card", "UPI", "Cash on Delivery"].map((method) => (
//                   <label
//                     key={method}
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-foreground"
//                       defaultChecked={method === "Cash on Delivery"}
//                     />
//                     <span className="text-sm font-sans">
//                       {method}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* ================= ORDER SUMMARY ================= */}
//           <div className="border border-border p-6 md:p-8 h-fit space-y-6">

//             <h2 className="text-lg md:text-xl font-bold tracking-wide">
//               Order Summary
//             </h2>

//             <div className="space-y-4">
//               {items.length > 0 ? (
//                 items.map((item) => (
//                   <div
//                     key={`${item.productId}-${item.size}`}
//                     className="flex justify-between text-xs md:text-sm font-sans"
//                   >
//                     <span className="max-w-[70%]">
//                       {item.name} (×{item.quantity}) — {item.size}
//                     </span>
//                     <span>
//                       ${item.price * item.quantity}
//                     </span>
//                   </div>
//                 ))
//               ) : (
//                 <p className="text-sm text-muted-foreground">
//                   Your cart is empty.
//                 </p>
//               )}
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-sans font-medium text-sm md:text-base">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Button
//               onClick={() => {
//                 clearCart();
//                 setSubmitted(true);
//               }}
//               className="w-full rounded-none font-sans text-xs md:text-sm tracking-widest uppercase py-5"
//             >
//               Confirm Order
//             </Button>

//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const [submitted, setSubmitted] = useState(false);
//   const orderId = `RUT${Date.now().toString().slice(-6)}`;

//   if (submitted) {
//     return (
//       <main className="pt-24 pb-16 min-h-screen flex items-center justify-center">
//         <div className="text-center px-4 space-y-4">
//           <h1 className="text-3xl md:text-4xl font-bold">
//             Order Confirmed
//           </h1>
//           <p className="text-sm text-muted-foreground">
//             Thank you for your order.
//           </p>
//           <p className="text-sm">
//             Order ID: <span className="font-bold">#{orderId}</span>
//           </p>
//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <div className="max-w-5xl mx-auto px-4">

//         <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-10 text-center">
//           Checkout
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

//           {/* FORM */}
//           <div className="space-y-8">
//             <h2 className="text-lg font-bold tracking-wide">
//               Shipping Information
//             </h2>

//             <div className="space-y-6">
//               {["Full Name", "Phone", "Email", "Address"].map((label) => (
//                 <div key={label}>
//                   <Label className="text-xs tracking-widest uppercase">
//                     {label}
//                   </Label>
//                   <Input
//                     className="rounded-none mt-2"
//                     placeholder={`Enter your ${label.toLowerCase()}`}
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-4 pt-6">
//               <h2 className="text-lg font-bold tracking-wide">
//                 Payment Method
//               </h2>

//               <div className="border border-border p-5 space-y-4">
//                 {["Credit / Debit Card", "UPI", "Cash on Delivery"].map((m) => (
//                   <label
//                     key={m}
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-foreground"
//                       defaultChecked={m === "Cash on Delivery"}
//                     />
//                     <span className="text-sm">{m}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* SUMMARY */}
//           <div className="border border-border p-6 space-y-6 h-fit">
//             <h2 className="text-lg font-bold tracking-wide">
//               Order Summary
//             </h2>

//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div
//                   key={`${item.productId}-${item.size}`}
//                   className="flex justify-between text-sm"
//                 >
//                   <span>
//                     {item.name} (×{item.quantity})
//                   </span>
//                   <span>
//                     ${item.price * item.quantity}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Button
//               onClick={() => {
//                 clearCart();
//                 setSubmitted(true);
//               }}
//               className="w-full rounded-none tracking-widest uppercase py-4"
//             >
//               Confirm Order
//             </Button>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const [submitted, setSubmitted] = useState(false);
//   const orderId = `RUT${Date.now().toString().slice(-6)}`;

//   if (submitted) {
//     return (
//       <main className="pt-28 pb-16 min-h-screen">
//         <div className="max-w-5xl mx-auto px-4">

//           <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border border-border p-8 space-y-4">
//             <p className="text-muted-foreground">
//               Thank you for your order.
//             </p>
//             <p>
//               Order ID: <span className="font-bold">#{orderId}</span>
//             </p>
//           </div>

//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-28 pb-16 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-10">
//           Checkout
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

//           {/* FORM */}
//           <div className="space-y-8">
//             <h2 className="text-lg font-bold tracking-wide">
//               Shipping Information
//             </h2>

//             <div className="space-y-6">
//               {["Full Name", "Phone", "Email", "Address"].map((label) => (
//                 <div key={label}>
//                   <Label className="text-xs tracking-widest uppercase">
//                     {label}
//                   </Label>
//                   <Input
//                     className="rounded-none mt-2"
//                     placeholder={`Enter your ${label.toLowerCase()}`}
//                   />
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-4 pt-6">
//               <h2 className="text-lg font-bold tracking-wide">
//                 Payment Method
//               </h2>

//               <div className="border border-border p-5 space-y-4">
//                 {["Credit / Debit Card", "UPI", "Cash on Delivery"].map((m) => (
//                   <label
//                     key={m}
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-foreground"
//                       defaultChecked={m === "Cash on Delivery"}
//                     />
//                     <span className="text-sm">{m}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* SUMMARY */}
//           <div className="border border-border p-6 space-y-6 h-fit">
//             <h2 className="text-lg font-bold tracking-wide">
//               Order Summary
//             </h2>

//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div
//                   key={`${item.productId}-${item.size}`}
//                   className="flex justify-between text-sm"
//                 >
//                   <span>
//                     {item.name} (×{item.quantity})
//                   </span>
//                   <span>
//                     ${item.price * item.quantity}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Button
//               onClick={() => {
//                 clearCart();
//                 setSubmitted(true);
//               }}
//               className="w-full rounded-none tracking-widest uppercase py-4"
//             >
//               Confirm Order
//             </Button>
//           </div>

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const [submitted, setSubmitted] = useState(false);
//   const orderId = `RUT${Date.now().toString().slice(-6)}`;

//   if (submitted) {
//     return (
//       <main className="pt-28 pb-16 min-h-screen">
//         <div className="px-4 lg:max-w-5xl lg:mx-auto">

//           <h1 className="text-3xl md:text-4xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border border-border p-6 space-y-4">
//             <p className="text-muted-foreground">
//               Thank you for your order.
//             </p>
//             <p>
//               Order ID: <span className="font-bold">#{orderId}</span>
//             </p>
//           </div>

//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-28 pb-24 min-h-screen">
//       <div className="px-4 lg:max-w-6xl lg:mx-auto">

//         <h1 className="text-3xl md:text-4xl font-bold mb-8">
//           Checkout
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

//           {/* ================= SHIPPING FORM ================= */}
//           <div className="space-y-10">

//             <div>
//               <h2 className="text-lg font-bold mb-6">
//                 Shipping Information
//               </h2>

//               <div className="space-y-6">
//                 {["Full Name", "Phone", "Email", "Address"].map((label) => (
//                   <div key={label}>
//                     <Label className="text-xs uppercase tracking-widest">
//                       {label}
//                     </Label>
//                     <Input
//                       className="mt-2 rounded-none h-12"
//                       placeholder={`Enter your ${label.toLowerCase()}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ================= PAYMENT ================= */}
//             <div>
//               <h2 className="text-lg font-bold mb-6">
//                 Payment Method
//               </h2>

//               <div className="border border-border p-5 space-y-4">
//                 {["Credit / Debit Card", "UPI", "Cash on Delivery"].map((m) => (
//                   <label
//                     key={m}
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-foreground"
//                       defaultChecked={m === "Cash on Delivery"}
//                     />
//                     <span className="text-sm">{m}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* ================= DESKTOP SUMMARY ================= */}
//           <div className="hidden lg:block border border-border p-6 space-y-6 h-fit">

//             <h2 className="text-lg font-bold">
//               Order Summary
//             </h2>

//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div
//                   key={`${item.productId}-${item.size}`}
//                   className="flex justify-between text-sm"
//                 >
//                   <span>
//                     {item.name} (×{item.quantity})
//                   </span>
//                   <span>
//                     ${item.price * item.quantity}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Button
//               onClick={() => {
//                 clearCart();
//                 setSubmitted(true);
//               }}
//               className="w-full rounded-none uppercase tracking-widest py-4"
//             >
//               Confirm Order
//             </Button>

//           </div>

//         </div>
//       </div>

//       {/* ================= MOBILE STICKY CONFIRM ================= */}
//       <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden">
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-sm">Total</span>
//           <span className="font-bold">${totalPrice}</span>
//         </div>

//         <Button
//           onClick={() => {
//             clearCart();
//             setSubmitted(true);
//           }}
//           className="w-full rounded-none uppercase tracking-widest py-4"
//         >
//           Confirm Order
//         </Button>
//       </div>

//     </main>
//   );
// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const Checkout = () => {
//   const { items, totalPrice, clearCart } = useCart();
//   const [submitted, setSubmitted] = useState(false);
//   const orderId = `RUT${Date.now().toString().slice(-6)}`;

//   if (submitted) {
//     return (
//       <main className="pt-28 pb-16 min-h-screen">
//         <div className="px-4 max-w-5xl mx-auto">

//           <h1 className="text-3xl md:text-4xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border border-border p-6 space-y-4">
//             <p className="text-muted-foreground">
//               Thank you for your order.
//             </p>
//             <p>
//               Order ID: <span className="font-bold">#{orderId}</span>
//             </p>
//           </div>

//         </div>
//       </main>
//     );
//   }

//   return (
//     <main className="pt-28 pb-32 min-h-screen">
//       <div className="px-4 max-w-6xl mx-auto">

//         <h1 className="text-3xl md:text-4xl font-bold mb-10">
//           Checkout
//         </h1>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

//           {/* ================= SHIPPING FORM ================= */}
//           <div className="space-y-12">

//             <div>
//               <h2 className="text-lg font-bold mb-6">
//                 Shipping Information
//               </h2>

//               <div className="space-y-6">
//                 {["Full Name", "Phone", "Email", "Address"].map((label) => (
//                   <div key={label}>
//                     <Label className="text-xs uppercase tracking-widest">
//                       {label}
//                     </Label>
//                     <Input
//                       className="mt-2 rounded-none h-12 text-base"
//                       placeholder={`Enter your ${label.toLowerCase()}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* ================= MOBILE ORDER SUMMARY ================= */}
//             <div className="lg:hidden border border-border p-6 space-y-4">

//               <h2 className="text-lg font-bold">
//                 Order Summary
//               </h2>

//               {items.map((item) => (
//                 <div
//                   key={`${item.productId}-${item.size}`}
//                   className="flex justify-between text-sm"
//                 >
//                   <span>
//                     {item.name} (×{item.quantity})
//                   </span>
//                   <span>
//                     ${item.price * item.quantity}
//                   </span>
//                 </div>
//               ))}

//               <div className="border-t border-border pt-4 flex justify-between font-medium">
//                 <span>Total</span>
//                 <span>${totalPrice}</span>
//               </div>

//             </div>

//             {/* ================= PAYMENT ================= */}
//             <div>
//               <h2 className="text-lg font-bold mb-6">
//                 Payment Method
//               </h2>

//               <div className="border border-border p-5 space-y-4">
//                 {["Credit / Debit Card", "UPI", "Cash on Delivery"].map((m) => (
//                   <label
//                     key={m}
//                     className="flex items-center gap-3 cursor-pointer"
//                   >
//                     <input
//                       type="radio"
//                       name="payment"
//                       className="accent-foreground"
//                       defaultChecked={m === "Cash on Delivery"}
//                     />
//                     <span className="text-sm">{m}</span>
//                   </label>
//                 ))}
//               </div>
//             </div>

//           </div>

//           {/* ================= DESKTOP SUMMARY ================= */}
//           <div className="hidden lg:block border border-border p-6 space-y-6 h-fit">

//             <h2 className="text-lg font-bold">
//               Order Summary
//             </h2>

//             <div className="space-y-4">
//               {items.map((item) => (
//                 <div
//                   key={`${item.productId}-${item.size}`}
//                   className="flex justify-between text-sm"
//                 >
//                   <span>
//                     {item.name} (×{item.quantity})
//                   </span>
//                   <span>
//                     ${item.price * item.quantity}
//                   </span>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t border-border pt-4 flex justify-between font-medium">
//               <span>Total</span>
//               <span>${totalPrice}</span>
//             </div>

//             <Button
//               onClick={() => {
//                 clearCart();
//                 setSubmitted(true);
//               }}
//               className="w-full rounded-none uppercase tracking-widest py-4"
//             >
//               Confirm Order
//             </Button>

//           </div>

//         </div>
//       </div>

//       {/* ================= MOBILE STICKY CONFIRM ================= */}
//       <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-4 lg:hidden">
//         <div className="flex justify-between items-center mb-3">
//           <span className="text-sm">Total</span>
//           <span className="font-bold">${totalPrice}</span>
//         </div>

//         <Button
//           onClick={() => {
//             clearCart();
//             setSubmitted(true);
//           }}
//           className="w-full rounded-none uppercase tracking-widest py-4"
//         >
//           Confirm Order
//         </Button>
//       </div>

//     </main>
//   );
// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const API_BASE = "http://127.0.0.1:8000/api/auth";

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [submitted, setSubmitted] = useState(false);

//   const [promoCode, setPromoCode] = useState("");

//   const [discountPercent, setDiscountPercent] = useState(0);

//   const [discountAmount, setDiscountAmount] = useState(0);

//   const [finalTotal, setFinalTotal] = useState(totalPrice);

//   const [promoMessage, setPromoMessage] = useState("");

//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const orderId = `RUT${Date.now().toString().slice(-6)}`;


//   // ============================
//   // APPLY PROMO CODE
//   // ============================

//   const applyPromoCode = async () => {

//     if (!promoCode) {
//       setPromoMessage("Enter promo code");
//       return;
//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API_BASE}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             code: promoCode,
//           }),
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         const percent = data.discount_percentage;

//         const discount = (totalPrice * percent) / 100;

//         const final = totalPrice - discount;

//         setDiscountPercent(percent);

//         setDiscountAmount(discount);

//         setFinalTotal(final);

//         setPromoMessage(`Promo applied! ${percent}% OFF`);

//       } else {

//         setDiscountPercent(0);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage("Invalid promo code");

//       }

//     } catch (error) {

//       setPromoMessage("Error applying promo code");

//     }

//     setLoadingPromo(false);

//   };


//   // ============================
//   // ORDER CONFIRMED PAGE
//   // ============================

//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4 text-center">

//           <h1 className="text-4xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <p className="text-gray-500 mb-4">
//             Thank you for your purchase
//           </p>

//           <p className="text-lg">
//             Order ID:
//             <span className="font-bold ml-2">
//               #{orderId}
//             </span>
//           </p>

//         </div>

//       </main>

//     );

//   }


//   return (

//     <main className="pt-28 pb-20 min-h-screen">

//       <div className="max-w-7xl mx-auto px-4">

//         <h1 className="text-4xl font-bold mb-10">
//           Checkout
//         </h1>


//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">


//           {/* ============================
//               LEFT SIDE FORM
//           ============================ */}

//           <div className="space-y-10">


//             {/* SHIPPING */}

//             <div>

//               <h2 className="text-xl font-semibold mb-6">
//                 Shipping Information
//               </h2>

//               <div className="space-y-5">

//                 <div>

//                   <Label>Full Name</Label>

//                   <Input
//                     placeholder="Enter full name"
//                   />

//                 </div>


//                 <div>

//                   <Label>Phone</Label>

//                   <Input
//                     placeholder="Enter phone"
//                   />

//                 </div>


//                 <div>

//                   <Label>Email</Label>

//                   <Input
//                     placeholder="Enter email"
//                   />

//                 </div>


//                 <div>

//                   <Label>Address</Label>

//                   <Input
//                     placeholder="Enter address"
//                   />

//                 </div>

//               </div>

//             </div>


//             {/* PROMO CODE */}

//             <div>

//               <h2 className="text-xl font-semibold mb-4">
//                 Promo Code
//               </h2>

//               <div className="flex gap-3">

//                 <Input
//                   value={promoCode}
//                   onChange={(e) =>
//                     setPromoCode(e.target.value)
//                   }
//                   placeholder="Enter promo code"
//                 />

//                 <Button
//                   onClick={applyPromoCode}
//                   disabled={loadingPromo}
//                 >
//                   {loadingPromo
//                     ? "Applying..."
//                     : "Apply"}
//                 </Button>

//               </div>

//               {promoMessage && (

//                 <p className="text-sm mt-2 text-gray-500">
//                   {promoMessage}
//                 </p>

//               )}

//             </div>


//           </div>


//           {/* ============================
//               RIGHT SIDE SUMMARY
//           ============================ */}

//           <div className="border p-6 space-y-6 h-fit">


//             <h2 className="text-xl font-semibold">
//               Order Summary
//             </h2>


//             {/* ITEMS */}

//             <div className="space-y-3">

//               {items.map((item) => (

//                 <div
//                   key={`${item.productId}-${item.size}`}
//                   className="flex justify-between"
//                 >

//                   <span>
//                     {item.name} × {item.quantity}
//                   </span>

//                   <span>
//                     ₹{item.price * item.quantity}
//                   </span>

//                 </div>

//               ))}

//             </div>


//             <hr />


//             {/* SUBTOTAL */}

//             <div className="flex justify-between">

//               <span>Subtotal</span>

//               <span>₹{totalPrice}</span>

//             </div>


//             {/* DISCOUNT */}

//             {discountPercent > 0 && (

//               <div className="flex justify-between text-green-600">

//                 <span>
//                   Discount ({discountPercent}%)
//                 </span>

//                 <span>
//                   -₹{discountAmount.toFixed(2)}
//                 </span>

//               </div>

//             )}


//             {/* FINAL TOTAL */}

//             <div className="flex justify-between text-lg font-bold">

//               <span>Total</span>

//               <span>
//                 ₹{finalTotal.toFixed(2)}
//               </span>

//             </div>


//             {/* CONFIRM BUTTON */}

//             <Button

//               className="w-full py-6 uppercase"

//               onClick={() => {

//                 clearCart();

//                 setSubmitted(true);

//               }}

//             >

//               Confirm Order

//             </Button>


//           </div>


//         </div>

//       </div>

//     </main>

//   );

// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const API = "http://127.0.0.1:8000/api/auth";

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");

//   const [discountPercent, setDiscountPercent] = useState(0);

//   const [discountAmount, setDiscountAmount] = useState(0);

//   const [finalTotal, setFinalTotal] = useState(totalPrice);

//   const [promoMessage, setPromoMessage] = useState("");

//   const [promoApplied, setPromoApplied] = useState(false);

//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const [submitted, setSubmitted] = useState(false);

//   const orderId = `RUT${Date.now().toString().slice(-6)}`;


//   // ============================================
//   // APPLY PROMOCODE
//   // ============================================

//   const applyPromoCode = async () => {

//     if (!promoCode) {

//       setPromoMessage("Enter promo code");

//       return;

//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             code: promoCode,
//             cart_total: totalPrice
//           })
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         const discount =
//           (totalPrice * data.discount_percentage) / 100;

//         setDiscountPercent(data.discount_percentage);

//         setDiscountAmount(discount);

//         setFinalTotal(totalPrice - discount);

//         setPromoApplied(true);

//         setPromoMessage(
//           `Promo applied! ${data.discount_percentage}% OFF`
//         );

//       } else {

//         setPromoApplied(false);

//         setDiscountPercent(0);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage(data.message);

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };


//   // ============================================
//   // ORDER CONFIRM
//   // ============================================

//   const confirmOrder = () => {

//     clearCart();

//     setSubmitted(true);

//   };


//   // ============================================
//   // SUCCESS PAGE
//   // ============================================

//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">

//             Order Confirmed

//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>Order ID: #{orderId}</p>

//             <p>Total Paid: ₹{finalTotal.toFixed(2)}</p>

//           </div>

//         </div>

//       </main>

//     );

//   }


//   // ============================================
//   // MAIN PAGE
//   // ============================================

//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">

//           Checkout

//         </h1>


//         <div className="grid lg:grid-cols-2 gap-16">


//           {/* ============================================
//               LEFT SIDE
//           ============================================ */}

//           <div className="space-y-10">


//             {/* SHIPPING */}

//             <div>

//               <h2 className="font-semibold mb-4">

//                 Shipping Info

//               </h2>

//               <div className="space-y-4">

//                 <Input placeholder="Full Name" />

//                 <Input placeholder="Phone" />

//                 <Input placeholder="Email" />

//                 <Input placeholder="Address" />

//               </div>

//             </div>


//             {/* PROMOCODE */}

//             <div>

//               <h2 className="font-semibold mb-4">

//                 Promo Code

//               </h2>

//               <div className="flex gap-3">

//                 <Input
//                   placeholder="Enter promo code"
//                   value={promoCode}
//                   onChange={(e) =>
//                     setPromoCode(e.target.value)
//                   }
//                 />

//                 <Button
//                   onClick={applyPromoCode}
//                   disabled={loadingPromo}
//                 >
//                   Apply
//                 </Button>

//               </div>

//               {promoMessage && (

//                 <p className={`mt-2 text-sm ${
//                   promoApplied
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}>

//                   {promoMessage}

//                 </p>

//               )}

//             </div>


//           </div>


//           {/* ============================================
//               RIGHT SIDE SUMMARY
//           ============================================ */}

//           <div className="border p-6 space-y-6 h-fit">


//             <h2 className="font-semibold">

//               Order Summary

//             </h2>


//             {/* PRODUCTS */}

//             {items.map(item => (

//               <div
//                 key={item.productId}
//                 className="flex justify-between text-sm"
//               >

//                 <span>

//                   {item.name} × {item.quantity}

//                 </span>

//                 <span>

//                   ₹{item.price * item.quantity}

//                 </span>

//               </div>

//             ))}


//             <hr />


//             {/* SUBTOTAL */}

//             <div className="flex justify-between">

//               <span>Subtotal</span>

//               <span>₹{totalPrice}</span>

//             </div>


//             {/* DISCOUNT */}

//             {promoApplied && (

//               <div className="flex justify-between text-green-600">

//                 <span>

//                   Discount ({discountPercent}%)

//                 </span>

//                 <span>

//                   -₹{discountAmount.toFixed(2)}

//                 </span>

//               </div>

//             )}


//             <hr />


//             {/* FINAL */}

//             <div className="flex justify-between font-bold text-lg">

//               <span>Total</span>

//               <span>

//                 ₹{finalTotal.toFixed(2)}

//               </span>

//             </div>


//             {/* BUTTON */}

//             <Button
//               className="w-full"
//               onClick={confirmOrder}
//             >

//               Confirm Order

//             </Button>


//           </div>


//         </div>


//       </div>


//       {/* MOBILE BUTTON */}

//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">

//         <Button
//           className="w-full"
//           onClick={confirmOrder}
//         >

//           Pay ₹{finalTotal.toFixed(2)}

//         </Button>

//       </div>


//     </main>

//   );

// };

// export default Checkout;


// import { useState } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// const API = "http://127.0.0.1:8000/api/auth";

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   // ================================
//   // SHIPPING FIELDS
//   // ================================

//   const [fullName, setFullName] = useState("");

//   const [phone, setPhone] = useState("");

//   const [email, setEmail] = useState("");

//   const [address, setAddress] = useState("");


//   // ================================
//   // PROMO FIELDS
//   // ================================

//   const [promoCode, setPromoCode] = useState("");

//   const [discountAmount, setDiscountAmount] = useState(0);

//   const [finalTotal, setFinalTotal] = useState(totalPrice);

//   const [promoMessage, setPromoMessage] = useState("");

//   const [promoApplied, setPromoApplied] = useState(false);

//   const [loadingPromo, setLoadingPromo] = useState(false);


//   // ================================
//   // ORDER STATE
//   // ================================

//   const [submitted, setSubmitted] = useState(false);

//   const orderId = `RUT${Date.now().toString().slice(-6)}`;


//   // ================================
//   // APPLY PROMO CODE API
//   // ================================

//   const applyPromoCode = async () => {

//     if (!promoCode) {

//       setPromoMessage("Enter promo code");

//       return;

//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",

//           headers: {
//             "Content-Type": "application/json"
//           },

//           body: JSON.stringify({
//             code: promoCode,
//             cart_total: totalPrice
//           })

//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         setDiscountAmount(data.discount_amount);

//         setFinalTotal(data.final_total);

//         setPromoApplied(true);

//         setPromoMessage("Promo applied successfully");

//       }

//       else {

//         setPromoApplied(false);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage(data.message);

//       }

//     }

//     catch {

//       setPromoMessage("Server error");

//     }

//     setLoadingPromo(false);

//   };


//   // ================================
//   // CONFIRM ORDER
//   // ================================

//   const confirmOrder = () => {

//     if (!fullName || !phone || !email || !address) {

//       alert("Please fill all fields");

//       return;

//     }

//     clearCart();

//     setSubmitted(true);

//   };


//   // ================================
//   // SUCCESS PAGE
//   // ================================

//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">

//             Order Confirmed

//           </h1>

//           <div className="border p-6 space-y-2">

//             <p><b>Order ID:</b> #{orderId}</p>

//             <p><b>Name:</b> {fullName}</p>

//             <p><b>Phone:</b> {phone}</p>

//             <p><b>Email:</b> {email}</p>

//             <p><b>Address:</b> {address}</p>

//             <p><b>Total Paid:</b> ₹{finalTotal}</p>

//           </div>

//         </div>

//       </main>

//     );

//   }


//   // ================================
//   // CHECKOUT PAGE
//   // ================================

//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">

//           Checkout

//         </h1>


//         <div className="grid lg:grid-cols-2 gap-16">


//           {/* =========================
//               SHIPPING FORM
//           ========================= */}

//           <div className="space-y-6">

//             <div>

//               <Label>Full Name</Label>

//               <Input
//                 value={fullName}
//                 onChange={(e) =>
//                   setFullName(e.target.value)
//                 }
//               />

//             </div>


//             <div>

//               <Label>Phone</Label>

//               <Input
//                 value={phone}
//                 onChange={(e) =>
//                   setPhone(e.target.value)
//                 }
//               />

//             </div>


//             <div>

//               <Label>Email</Label>

//               <Input
//                 value={email}
//                 onChange={(e) =>
//                   setEmail(e.target.value)
//                 }
//               />

//             </div>


//             <div>

//               <Label>Address</Label>

//               <Input
//                 value={address}
//                 onChange={(e) =>
//                   setAddress(e.target.value)
//                 }
//               />

//             </div>


//             {/* =========================
//                 PROMOCODE
//             ========================= */}

//             <div>

//               <Label>Promo Code</Label>

//               <div className="flex gap-2 mt-2">

//                 <Input
//                   value={promoCode}
//                   onChange={(e) =>
//                     setPromoCode(e.target.value)
//                   }
//                 />

//                 <Button
//                   onClick={applyPromoCode}
//                   disabled={loadingPromo}
//                 >

//                   {loadingPromo
//                     ? "Applying..."
//                     : "Apply"}

//                 </Button>

//               </div>


//               {promoMessage && (

//                 <p className={`mt-2 text-sm ${
//                   promoApplied
//                   ? "text-green-600"
//                   : "text-red-500"
//                 }`}>

//                   {promoMessage}

//                 </p>

//               )}

//             </div>


//           </div>


//           {/* =========================
//               ORDER SUMMARY
//           ========================= */}

//           <div className="border p-6 space-y-6">


//             <h2 className="font-semibold">

//               Order Summary

//             </h2>


//             {items.map(item => (

//               <div
//                 key={item.productId}
//                 className="flex justify-between"
//               >

//                 <span>
//                   {item.name} × {item.quantity}
//                 </span>

//                 <span>
//                   ₹{item.price * item.quantity}
//                 </span>

//               </div>

//             ))}


//             <hr />


//             <div className="flex justify-between">

//               <span>Subtotal</span>

//               <span>₹{totalPrice}</span>

//             </div>


//             {promoApplied && (

//               <div className="flex justify-between text-green-600">

//                 <span>Discount</span>

//                 <span>-₹{discountAmount}</span>

//               </div>

//             )}


//             <hr />


//             <div className="flex justify-between font-bold text-lg">

//               <span>Total</span>

//               <span>₹{finalTotal}</span>

//             </div>


//             <Button
//               className="w-full"
//               onClick={confirmOrder}
//             >

//               Confirm Order

//             </Button>


//           </div>


//         </div>

//       </div>

//     </main>

//   );

// };

// export default Checkout;

// this is executed code 
// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");

//   const [promoApplied, setPromoApplied] = useState(false);

//   const [discountAmount, setDiscountAmount] = useState(0);

//   const [finalTotal, setFinalTotal] = useState(totalPrice);

//   const [promoMessage, setPromoMessage] = useState("");

//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const [submitted, setSubmitted] = useState(false);

//   const orderId = `RUT${Date.now().toString().slice(-6)}`;


//   // keep total updated if cart changes
//   useEffect(() => {

//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }

//   }, [totalPrice]);


//   // ================================
//   // APPLY PROMO
//   // ================================
//   const applyPromoCode = async () => {

//     if (!promoCode) {

//       setPromoMessage("Enter promo code");
//       return;

//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             code: promoCode,
//             cart_total: totalPrice
//           })
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         setDiscountAmount(data.discount_amount);

//         setFinalTotal(data.final_total);

//         setPromoApplied(true);

//         setPromoMessage(data.message);

//       } else {

//         setPromoApplied(false);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage(data.message);

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };


//   // ================================
//   // REMOVE PROMO
//   // ================================
//   const removePromoCode = () => {

//     setPromoApplied(false);

//     setPromoCode("");

//     setDiscountAmount(0);

//     setFinalTotal(totalPrice);

//     setPromoMessage("Promo removed");

//   };


//   // ================================
//   // CONFIRM ORDER
//   // ================================
//   const confirmOrder = () => {

//     clearCart();

//     setSubmitted(true);

//   };


//   // ================================
//   // SUCCESS PAGE
//   // ================================
//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>
//               Order ID: #{orderId}
//             </p>

//             <p>
//               Total Paid: ₹{finalTotal.toFixed(2)}
//             </p>

//           </div>

//         </div>

//       </main>

//     );

//   }


//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">
//           Checkout
//         </h1>


//         <div className="grid lg:grid-cols-2 gap-16">


//           {/* LEFT */}
//           <div className="space-y-10">


//             {/* SHIPPING */}
//             <div>

//               <h2 className="font-semibold mb-4">
//                 Shipping Info
//               </h2>

//               <div className="space-y-4">

//                 <Input placeholder="Full Name" />

//                 <Input placeholder="Phone" />

//                 <Input placeholder="Email" />

//                 <Input placeholder="Address" />

//               </div>

//             </div>


//             {/* PROMO */}
//             <div>

//               <h2 className="font-semibold mb-4">
//                 Promo Code
//               </h2>

//               <div className="flex gap-3">

//                 <Input
//                   placeholder="Enter promo code"
//                   value={promoCode}
//                   onChange={(e) =>
//                     setPromoCode(e.target.value)
//                   }
//                   disabled={promoApplied}
//                 />

//                 {!promoApplied ? (

//                   <Button
//                     onClick={applyPromoCode}
//                     disabled={loadingPromo}
//                   >
//                     Apply
//                   </Button>

//                 ) : (

//                   <Button
//                     variant="destructive"
//                     onClick={removePromoCode}
//                   >
//                     Remove
//                   </Button>

//                 )}

//               </div>


//               {promoMessage && (

//                 <p className={`mt-2 text-sm ${
//                   promoApplied
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}>

//                   {promoMessage}

//                 </p>

//               )}

//             </div>


//           </div>


//           {/* SUMMARY */}
//           <div className="border p-6 space-y-6 h-fit">

//             <h2 className="font-semibold">
//               Order Summary
//             </h2>


//             {items.map(item => (

//               <div
//                 key={item.productId}
//                 className="flex justify-between text-sm"
//               >

//                 <span>
//                   {item.name} × {item.quantity}
//                 </span>

//                 <span>
//                   ₹{item.price * item.quantity}
//                 </span>

//               </div>

//             ))}


//             <hr />


//             <div className="flex justify-between">

//               <span>Subtotal</span>

//               <span>
//                 ₹{totalPrice.toFixed(2)}
//               </span>

//             </div>


//             {promoApplied && (

//               <div className="flex justify-between text-green-600">

//                 <span>Discount</span>

//                 <span>
//                   -₹{discountAmount.toFixed(2)}
//                 </span>

//               </div>

//             )}


//             <hr />


//             <div className="flex justify-between font-bold text-lg">

//               <span>Total</span>

//               <span>
//                 ₹{finalTotal.toFixed(2)}
//               </span>

//             </div>


//             <Button
//               className="w-full"
//               onClick={confirmOrder}
//             >
//               Confirm Order
//             </Button>


//           </div>


//         </div>

//       </div>


//       {/* MOBILE */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">

//         <Button
//           className="w-full"
//           onClick={confirmOrder}
//         >
//           Pay ₹{finalTotal.toFixed(2)}
//         </Button>

//       </div>


//     </main>

//   );

// };

// export default Checkout;


// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(totalPrice);
//   const [promoMessage, setPromoMessage] = useState("");
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [razorpayOrderId, setRazorpayOrderId] = useState("");

//   // shipping states
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   useEffect(() => {
//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }
//   }, [totalPrice]);

//   const orderId = razorpayOrderId || `RUT${Date.now()}`;

//   // ================================
//   // APPLY PROMO
//   // ================================
//   const applyPromoCode = async () => {

//     if (!promoCode) {
//       setPromoMessage("Enter promo code");
//       return;
//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             code: promoCode,
//             cart_total: totalPrice
//           })
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         setDiscountAmount(data.discount_amount);
//         setFinalTotal(data.final_total);
//         setPromoApplied(true);
//         setPromoMessage(data.message);

//       } else {

//         setPromoApplied(false);
//         setDiscountAmount(0);
//         setFinalTotal(totalPrice);
//         setPromoMessage(data.message);

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };

//   // ================================
//   // REMOVE PROMO
//   // ================================
//   const removePromoCode = () => {

//     setPromoApplied(false);
//     setPromoCode("");
//     setDiscountAmount(0);
//     setFinalTotal(totalPrice);
//     setPromoMessage("Promo removed");

//   };

//   // ================================
//   // PAYMENT FUNCTION
//   // // ================================
//   // const confirmOrder = async () => {

//   //   if (!name || !phone || !address) {

//   //     alert("Please fill shipping details");

//   //     return;

//   //   }

//   //   try {

//   //     // STEP 1: CREATE ORDER
//   //     const res = await fetch(
//   //       `${API}/create-order/`,
//   //       {
//   //         method: "POST",
//   //         headers: {
//   //           "Content-Type": "application/json"
//   //         },
//   //         body: JSON.stringify({

//   //           name: name,
//   //           phone: phone,
//   //           address: address,
//   //           city: "Default City",
//   //           state: "Default State",
//   //           pincode: "500001",

//   //           subtotal: totalPrice,
//   //           discount: discountAmount,

//   //           items: items.map(item => ({
//   //             name: item.name,
//   //             quantity: item.quantity,
//   //             price: item.price
//   //           }))

//   //         })
//   //       }
//   //     );

//   //     const order = await res.json();

//   //     if (!order.order_id) {

//   //       alert("Order creation failed");

//   //       return;

//   //     }

//   //     setRazorpayOrderId(order.order_id);

//   //     // STEP 2: OPEN RAZORPAY
//   //     const options = {

//   //       key: order.key,

//   //       amount: order.amount,

//   //       currency: order.currency,

//   //       order_id: order.order_id,

//   //       name: "RUT Store",

//   //       description: "Order Payment",

//   //       handler: async function (response: any) {

//   //         // STEP 3: VERIFY PAYMENT
//   //         const verifyRes = await fetch(
//   //           `${API}/verify-payment/`,
//   //           {
//   //             method: "POST",
//   //             headers: {
//   //               "Content-Type": "application/json"
//   //             },
//   //             body: JSON.stringify(response)
//   //           }
//   //         );

//   //         const verifyData = await verifyRes.json();

//   //         if (verifyData.success) {

//   //           clearCart();

//   //           setSubmitted(true);

//   //         } else {

//   //           alert("Payment verification failed");

//   //         }

//   //       },

//   //       prefill: {
//   //         name: name,
//   //         email: email,
//   //         contact: phone
//   //       },

//   //       theme: {
//   //         color: "#000000"
//   //       }

//   //     };

//   //     const rzp = new window.Razorpay(options);

//   //     rzp.open();

//   //   } catch (error) {

//   //     console.log(error);

//   //     alert("Payment failed");

//   //   }

//   // };


//   const confirmOrder = async () => {

//   if (!name || !phone || !address) {

//     alert("Please fill shipping details");

//     return;

//   }

//   try {

//     // STEP 1: CREATE ORDER
//     const res = await fetch(
//       `${API}/create-order/`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({

//           name: name,
//           phone: phone,
//           address: address,
//           city: "Default City",
//           state: "Default State",
//           pincode: "500001",

//           subtotal: totalPrice,
//           discount: discountAmount,

//           items: items.map(item => ({
//             name: item.name,
//             quantity: item.quantity,
//             price: item.price
//           }))

//         })
//       }
//     );

//     const order = await res.json();

//     if (!order.order_id) {

//       alert("Order creation failed");

//       return;

//     }

//     setRazorpayOrderId(order.order_id);

//     // STEP 2: OPEN RAZORPAY
//     const options = {

//       key: order.key,

//       amount: order.amount,

//       currency: order.currency,

//       order_id: order.order_id,

//       name: "RUT Store",

//       description: "Order Payment",

//       handler: async function (response: any) {

//         try {

//           const verifyRes = await fetch(
//             `${API}/verify-payment/`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json"
//               },
//               body: JSON.stringify(response)
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {

//             clearCart();

//             setSubmitted(true);

//           } else {

//             alert("Payment verification failed");

//           }

//         } catch {

//           alert("Payment verification error");

//         }

//       },

//       modal: {

//         ondismiss: function () {

//           alert("Payment cancelled");

//         }

//       },

//       prefill: {
//         name: name,
//         email: email,
//         contact: phone
//       },

//       theme: {
//         color: "#000000"
//       }

//     };

//     const rzp = new window.Razorpay(options);

//     // HANDLE PAYMENT FAILURE EVENT
//     rzp.on("payment.failed", function (response: any) {

//       alert("Payment failed");

//       console.log("Failure reason:", response.error.description);

//     });

//     rzp.open();

//   } catch (error) {

//     console.log(error);

//     alert("Payment failed");

//   }

// };

//   // ================================
//   // SUCCESS PAGE
//   // ================================
//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>
//               Order ID: {orderId}
//             </p>

//             <p>
//               Total Paid: ₹{finalTotal.toFixed(2)}
//             </p>

//           </div>

//         </div>

//       </main>

//     );

//   }

//   // ================================
//   // MAIN PAGE
//   // ================================
//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">
//           Checkout
//         </h1>

//         <div className="grid lg:grid-cols-2 gap-16">

//           {/* SHIPPING */}
//           <div className="space-y-10">

//             <div>

//               <h2 className="font-semibold mb-4">
//                 Shipping Info
//               </h2>

//               <div className="space-y-4">

//                 <Input
//                   placeholder="Full Name"
//                   value={name}
//                   onChange={(e)=>setName(e.target.value)}
//                 />

//                 <Input
//                   placeholder="Phone"
//                   value={phone}
//                   onChange={(e)=>setPhone(e.target.value)}
//                 />

//                 <Input
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e)=>setEmail(e.target.value)}
//                 />

//                 <Input
//                   placeholder="Address"
//                   value={address}
//                   onChange={(e)=>setAddress(e.target.value)}
//                 />

//               </div>

//             </div>

//             {/* PROMO */}
//             <div>

//               <h2 className="font-semibold mb-4">
//                 Promo Code
//               </h2>

//               <div className="flex gap-3">

//                 <Input
//                   placeholder="Enter promo code"
//                   value={promoCode}
//                   onChange={(e)=>setPromoCode(e.target.value)}
//                   disabled={promoApplied}
//                 />

//                 {!promoApplied ? (

//                   <Button
//                     onClick={applyPromoCode}
//                     disabled={loadingPromo}
//                   >
//                     Apply
//                   </Button>

//                 ) : (

//                   <Button
//                     variant="destructive"
//                     onClick={removePromoCode}
//                   >
//                     Remove
//                   </Button>

//                 )}

//               </div>

//               {promoMessage && (

//                 <p className={`mt-2 text-sm ${
//                   promoApplied
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}>

//                   {promoMessage}

//                 </p>

//               )}

//             </div>

//           </div>

//           {/* SUMMARY */}
//           <div className="border p-6 space-y-6 h-fit">

//             <h2 className="font-semibold">
//               Order Summary
//             </h2>

//             {items.map(item => (

//               <div key={item.productId} className="flex justify-between text-sm">

//                 <span>
//                   {item.name} × {item.quantity}
//                 </span>

//                 <span>
//                   ₹{item.price * item.quantity}
//                 </span>

//               </div>

//             ))}

//             <hr />

//             <div className="flex justify-between">

//               <span>Subtotal</span>

//               <span>₹{totalPrice.toFixed(2)}</span>

//             </div>

//             {promoApplied && (

//               <div className="flex justify-between text-green-600">

//                 <span>Discount</span>

//                 <span>-₹{discountAmount.toFixed(2)}</span>

//               </div>

//             )}

//             <hr />

//             <div className="flex justify-between font-bold text-lg">

//               <span>Total</span>

//               <span>₹{finalTotal.toFixed(2)}</span>

//             </div>

//             <Button className="w-full" onClick={confirmOrder}>

//               Confirm Order

//             </Button>

//           </div>

//         </div>

//       </div>

//       {/* MOBILE */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 lg:hidden">

//         <Button className="w-full" onClick={confirmOrder}>

//           Pay ₹{finalTotal.toFixed(2)}

//         </Button>

//       </div>

//     </main>

//   );

// };

// export default Checkout;


// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// /* ✅ Razorpay loader for Vite */
// const loadRazorpayScript = () => {
//   return new Promise<boolean>((resolve) => {

//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");

//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);

//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);

//   });
// };

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(totalPrice);
//   const [promoMessage, setPromoMessage] = useState("");
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [razorpayOrderId, setRazorpayOrderId] = useState("");

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   useEffect(() => {

//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }

//   }, [totalPrice]);

//   const orderId = razorpayOrderId || `RUT${Date.now()}`;

//   /* ================================
//      CONFIRM ORDER
//   ================================ */

//   const confirmOrder = async () => {

//     if (!name || !phone || !address) {

//       alert("Please fill shipping details");

//       return;

//     }

//     /* ✅ Load Razorpay safely */

//     const loaded = await loadRazorpayScript();

//     if (!loaded) {

//       alert("Razorpay SDK failed to load");

//       return;

//     }

//     try {

//       const res = await fetch(
//         `${API}/create-order/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({

//             name,
//             phone,
//             address,

//             city: "Default City",
//             state: "Default State",
//             pincode: "500001",

//             subtotal: totalPrice,
//             discount: discountAmount,

//             items: items.map(item => ({
//               name: item.name,
//               quantity: item.quantity,
//               price: item.price
//             }))

//           })
//         }
//       );

//       const order = await res.json();

//       if (!order.order_id) {

//         alert("Order creation failed");

//         return;

//       }

//       setRazorpayOrderId(order.order_id);

//       const options = {

//         key: order.key,

//         amount: order.amount,

//         currency: order.currency,

//         order_id: order.order_id,

//         name: "RUT Store",

//         description: "Order Payment",

//         handler: async function (response: any) {

//           try {

//             const verifyRes = await fetch(
//               `${API}/verify-payment/`,
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(response)
//               }
//             );

//             const verifyData = await verifyRes.json();

//             if (verifyData.success) {

//               clearCart();

//               setSubmitted(true);

//             } else {

//               alert("Payment verification failed");

//             }

//           } catch {

//             alert("Payment verification error");

//           }

//         },

//         modal: {

//           ondismiss: function () {

//             alert("Payment cancelled");

//           }

//         },

//         prefill: {

//           name,
//           email,
//           contact: phone

//         },

//         theme: {

//           color: "#000000"

//         }

//       };

//       const rzp = new window.Razorpay(options);

//       rzp.on("payment.failed", function (response: any) {

//         alert("Payment failed");

//         console.log(response.error);

//       });

//       rzp.open();

//     } catch (error) {

//       console.log(error);

//       alert("Payment failed");

//     }

//   };

//   /* SUCCESS PAGE */

//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <p>Order ID: {orderId}</p>

//           <p>Total Paid: ₹{finalTotal.toFixed(2)}</p>

//         </div>

//       </main>

//     );

//   }

//   /* MAIN PAGE */

//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <Button onClick={confirmOrder}>
//         Confirm Order
//       </Button>

//     </main>

//   );

// };

// export default Checkout;



// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// /* ✅ Load Razorpay safely (Vite compatible) */
// const loadRazorpayScript = () => {
//   return new Promise<boolean>((resolve) => {

//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");

//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);

//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);

//   });
// };

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(totalPrice);
//   const [promoMessage, setPromoMessage] = useState("");
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [submitted, setSubmitted] = useState(false);
//   const [razorpayOrderId, setRazorpayOrderId] = useState("");

//   // shipping states
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   useEffect(() => {

//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }

//   }, [totalPrice]);

//   const orderId = razorpayOrderId || `RUT${Date.now()}`;

//   // ================================
//   // APPLY PROMO
//   // ================================
//   const applyPromoCode = async () => {

//     if (!promoCode) {

//       setPromoMessage("Enter promo code");

//       return;

//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({
//             code: promoCode,
//             cart_total: totalPrice
//           })
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         setDiscountAmount(data.discount_amount);

//         setFinalTotal(data.final_total);

//         setPromoApplied(true);

//         setPromoMessage(data.message);

//       } else {

//         setPromoApplied(false);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage(data.message);

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };

//   // ================================
//   // REMOVE PROMO
//   // ================================
//   const removePromoCode = () => {

//     setPromoApplied(false);

//     setPromoCode("");

//     setDiscountAmount(0);

//     setFinalTotal(totalPrice);

//     setPromoMessage("Promo removed");

//   };

//   // ================================
//   // RAZORPAY PAYMENT
//   // ================================
//   const confirmOrder = async () => {

//     if (!name || !phone || !address) {

//       alert("Please fill shipping details");

//       return;

//     }

//     // Load Razorpay script
//     const scriptLoaded = await loadRazorpayScript();

//     if (!scriptLoaded) {

//       alert("Failed to load Razorpay SDK");

//       return;

//     }

//     try {

//       // CREATE ORDER IN DJANGO
//       const res = await fetch(
//         `${API}/create-order/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({

//             name: name,
//             phone: phone,
//             address: address,

//             city: "Default City",
//             state: "Default State",
//             pincode: "500001",

//             subtotal: totalPrice,
//             discount: discountAmount,

//             items: items.map(item => ({
//               name: item.name,
//               quantity: item.quantity,
//               price: item.price
//             }))

//           })
//         }
//       );

//       const order = await res.json();

//       if (!order.order_id) {

//         alert("Order creation failed");

//         return;

//       }

//       setRazorpayOrderId(order.order_id);

//       // Razorpay options
//       const options = {

//         key: order.key,

//         amount: order.amount,

//         currency: order.currency,

//         order_id: order.order_id,

//         name: "RUT Store",

//         description: "Order Payment",

//         handler: async function (response: any) {

//           try {

//             const verifyRes = await fetch(
//               `${API}/verify-payment/`,
//               {
//                 method: "POST",
//                 headers: {
//                   "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(response)
//               }
//             );

//             const verifyData = await verifyRes.json();

//             if (verifyData.success) {

//               clearCart();

//               setSubmitted(true);

//             } else {

//               alert("Payment verification failed");

//             }

//           } catch {

//             alert("Verification error");

//           }

//         },

//         modal: {

//           ondismiss: function () {

//             alert("Payment cancelled");

//           }

//         },

//         prefill: {

//           name: name,

//           email: email,

//           contact: phone

//         },

//         theme: {

//           color: "#000000"

//         }

//       };

//       const rzp = new window.Razorpay(options);

//       // Handle failure
//       rzp.on("payment.failed", function (response: any) {

//         alert("Payment failed");

//         console.log(response.error);

//       });

//       rzp.open();

//     } catch (error) {

//       console.log(error);

//       alert("Payment failed");

//     }

//   };

//   // ================================
//   // SUCCESS PAGE
//   // ================================
//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>Order ID: {orderId}</p>

//             <p>Total Paid: ₹{finalTotal.toFixed(2)}</p>

//           </div>

//         </div>

//       </main>

//     );

//   }

//   // ================================
//   // MAIN UI (UNCHANGED)
//   // ================================
//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">
//           Checkout
//         </h1>

//         {/* SHIPPING */}

//         <Input
//           placeholder="Full Name"
//           value={name}
//           onChange={(e)=>setName(e.target.value)}
//         />

//         <Input
//           placeholder="Phone"
//           value={phone}
//           onChange={(e)=>setPhone(e.target.value)}
//         />

//         <Input
//           placeholder="Email"
//           value={email}
//           onChange={(e)=>setEmail(e.target.value)}
//         />

//         <Input
//           placeholder="Address"
//           value={address}
//           onChange={(e)=>setAddress(e.target.value)}
//         />

//         <Button onClick={confirmOrder}>
//           Confirm Order
//         </Button>

//       </div>

//     </main>

//   );

// };

// export default Checkout;




// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// /* Razorpay loader */
// const loadRazorpayScript = () => {
//   return new Promise<boolean>((resolve) => {

//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");

//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);

//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);

//   });
// };

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(totalPrice);
//   const [promoMessage, setPromoMessage] = useState("");
//   const [loadingPromo, setLoadingPromo] = useState(false);
//   const [submitted, setSubmitted] = useState(false);

//   /* shipping states */
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   const [razorpayOrderId, setRazorpayOrderId] = useState("");

//   const orderId = razorpayOrderId || `RUT${Date.now().toString().slice(-6)}`;

//   useEffect(() => {
//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }
//   }, [totalPrice]);

//   // ================================
//   // APPLY PROMO
//   // ================================
//   const applyPromoCode = async () => {

//     if (!promoCode) {
//       setPromoMessage("Enter promo code");
//       return;
//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(`${API}/validate-promocode/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           code: promoCode,
//           cart_total: totalPrice
//         })
//       });

//       const data = await res.json();

//       if (data.valid) {

//         setDiscountAmount(data.discount_amount);
//         setFinalTotal(data.final_total);
//         setPromoApplied(true);
//         setPromoMessage(data.message);

//       } else {

//         setPromoApplied(false);
//         setDiscountAmount(0);
//         setFinalTotal(totalPrice);
//         setPromoMessage(data.message);

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };

//   // ================================
//   // REMOVE PROMO
//   // ================================
//   const removePromoCode = () => {

//     setPromoApplied(false);
//     setPromoCode("");
//     setDiscountAmount(0);
//     setFinalTotal(totalPrice);
//     setPromoMessage("Promo removed");

//   };

//   // ================================
//   // CONFIRM ORDER WITH RAZORPAY
//   // ================================
//   const confirmOrder = async () => {

//     if (!name || !phone || !address) {
//       alert("Please fill shipping details");
//       return;
//     }

//     const loaded = await loadRazorpayScript();

//     if (!loaded) {
//       alert("Razorpay SDK failed to load");
//       return;
//     }

//     try {

//       const res = await fetch(`${API}/create-order/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({

//           name,
//           phone,
//           address,

//           city: "Default City",
//           state: "Default State",
//           pincode: "500001",

//           subtotal: totalPrice,
//           discount: discountAmount,

//           items: items.map(item => ({
//             name: item.name,
//             quantity: item.quantity,
//             price: item.price
//           }))

//         })
//       });

//       const order = await res.json();

//       if (!order.order_id) {
//         alert("Order creation failed");
//         return;
//       }

//       setRazorpayOrderId(order.order_id);

//       const options = {

//         key: order.key,

//         amount: order.amount,

//         currency: order.currency,

//         order_id: order.order_id,

//         name: "RUT Store",

//         description: "Order Payment",

//         handler: async function (response: any) {

//           const verifyRes = await fetch(`${API}/verify-payment/`, {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(response)
//           });

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {

//             clearCart();
//             setSubmitted(true);

//           } else {

//             alert("Payment verification failed");

//           }

//         },

//         modal: {
//           ondismiss: function () {
//             alert("Payment cancelled");
//           }
//         },

//         prefill: {
//           name,
//           email,
//           contact: phone
//         },

//         theme: {
//           color: "#000000"
//         }

//       };

//       const rzp = new window.Razorpay(options);

//       rzp.on("payment.failed", function () {
//         alert("Payment failed");
//       });

//       rzp.open();

//     } catch {
//       alert("Payment failed");
//     }

//   };

//   // ================================
//   // SUCCESS PAGE
//   // ================================
//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>Order ID: #{orderId}</p>

//             <p>Total Paid: ₹{finalTotal.toFixed(2)}</p>

//           </div>

//         </div>

//       </main>

//     );

//   }

//   // ================================
//   // YOUR ORIGINAL UI UNCHANGED
//   // ================================
//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">
//           Checkout
//         </h1>

//         <div className="grid lg:grid-cols-2 gap-16">

//           {/* LEFT */}
//           <div className="space-y-10">

//             <div>

//               <h2 className="font-semibold mb-4">
//                 Shipping Info
//               </h2>

//               <div className="space-y-4">

//                 <Input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />

//                 <Input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

//                 <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

//                 <Input placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />

//               </div>

//             </div>

//             {/* Promo section unchanged */}

//           </div>

//           {/* SUMMARY */}
//           <div className="border p-6 space-y-6 h-fit">

//             <h2 className="font-semibold">Order Summary</h2>

//             {items.map(item => (
//               <div key={item.productId} className="flex justify-between text-sm">
//                 <span>{item.name} × {item.quantity}</span>
//                 <span>₹{item.price * item.quantity}</span>
//               </div>
//             ))}

//             <hr />

//             <div className="flex justify-between">
//               <span>Total</span>
//               <span>₹{finalTotal.toFixed(2)}</span>
//             </div>

//             <Button className="w-full" onClick={confirmOrder}>
//               Confirm Order
//             </Button>

//           </div>

//         </div>

//       </div>

//     </main>

//   );

// };

// export default Checkout;



// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }

// /* Razorpay loader */
// const loadRazorpayScript = () => {
//   return new Promise<boolean>((resolve) => {

//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");

//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);

//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);

//   });
// };

// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();

//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(totalPrice);
//   const [promoMessage, setPromoMessage] = useState("");
//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const [submitted, setSubmitted] = useState(false);
//   const [razorpayOrderId, setRazorpayOrderId] = useState("");

//   /* Shipping states */
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");

//   const orderId = razorpayOrderId || `RUT${Date.now().toString().slice(-6)}`;

//   /* Keep total updated */
//   useEffect(() => {

//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }

//   }, [totalPrice]);

//   // ================================
//   // APPLY PROMO (STRICT CASE SENSITIVE)
//   // ================================
//   const applyPromoCode = async () => {

//     const trimmedCode = promoCode.trim();

//     if (!trimmedCode) {

//       setPromoMessage("Enter promo code");

//       return;

//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({

//             // EXACT CASE sent
//             code: trimmedCode,

//             cart_total: totalPrice

//           })
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         setDiscountAmount(data.discount_amount);

//         setFinalTotal(data.final_total);

//         setPromoApplied(true);

//         setPromoMessage(data.message || "Promo applied");

//       } else {

//         setPromoApplied(false);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage(data.message || "Invalid promo code");

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };

//   // ================================
//   // REMOVE PROMO
//   // ================================
//   const removePromoCode = () => {

//     setPromoApplied(false);

//     setPromoCode("");

//     setDiscountAmount(0);

//     setFinalTotal(totalPrice);

//     setPromoMessage("Promo removed");

//   };

//   // ================================
//   // CONFIRM ORDER WITH RAZORPAY
//   // ================================
//   const confirmOrder = async () => {

//     if (!name || !phone || !address) {

//       alert("Please fill shipping details");

//       return;

//     }

//     const loaded = await loadRazorpayScript();

//     if (!loaded) {

//       alert("Failed to load Razorpay");

//       return;

//     }

//     try {

//       const res = await fetch(
//         `${API}/create-order/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({

//             name,
//             phone,
//             address,

//             city: "Default City",
//             state: "Default State",
//             pincode: "500001",

//             subtotal: totalPrice,
//             discount: discountAmount,

//             items: items.map(item => ({
//               name: item.name,
//               quantity: item.quantity,
//               price: item.price
//             }))

//           })
//         }
//       );

//       const order = await res.json();

//       if (!order.order_id) {

//         alert("Order creation failed");

//         return;

//       }

//       setRazorpayOrderId(order.order_id);

//       const options = {

//         key: order.key,

//         amount: order.amount,

//         currency: order.currency,

//         order_id: order.order_id,

//         name: "RUT Store",

//         description: "Order Payment",

//         handler: async function (response: any) {

//           const verifyRes = await fetch(
//             `${API}/verify-payment/`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json"
//               },
//               body: JSON.stringify(response)
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {

//             clearCart();

//             setSubmitted(true);

//           } else {

//             alert("Payment verification failed");

//           }

//         },

//         modal: {

//           ondismiss: function () {

//             alert("Payment cancelled");

//           }

//         },

//         prefill: {

//           name,
//           email,
//           contact: phone

//         },

//         theme: {

//           color: "#000000"

//         }

//       };

//       const rzp = new window.Razorpay(options);

//       rzp.on("payment.failed", function () {

//         alert("Payment failed");

//       });

//       rzp.open();

//     } catch {

//       alert("Payment failed");

//     }

//   };

//   // ================================
//   // SUCCESS PAGE
//   // ================================
//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>Order ID: #{orderId}</p>

//             <p>Total Paid: ₹{finalTotal.toFixed(2)}</p>

//           </div>

//         </div>

//       </main>

//     );

//   }

//   // ================================
//   // ORIGINAL UI (UNCHANGED)
//   // ================================
//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">
//           Checkout
//         </h1>

//         <div className="grid lg:grid-cols-2 gap-16">

//           {/* LEFT */}
//           <div className="space-y-10">

//             {/* SHIPPING */}
//             <div>

//               <h2 className="font-semibold mb-4">
//                 Shipping Info
//               </h2>

//               <div className="space-y-4">

//                 <Input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />

//                 <Input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

//                 <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

//                 <Input placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />

//               </div>

//             </div>

//             {/* PROMO */}
//             <div>

//               <h2 className="font-semibold mb-4">
//                 Promo Code
//               </h2>

//               <div className="flex gap-3">

//                 <Input
//                   placeholder="Enter promo code"
//                   value={promoCode}
//                   onChange={(e)=>setPromoCode(e.target.value)}
//                   disabled={promoApplied}
//                 />

//                 {!promoApplied ? (

//                   <Button onClick={applyPromoCode} disabled={loadingPromo}>
//                     Apply
//                   </Button>

//                 ) : (

//                   <Button variant="destructive" onClick={removePromoCode}>
//                     Remove
//                   </Button>

//                 )}

//               </div>

//               {promoMessage && (

//                 <p className={`mt-2 text-sm ${
//                   promoApplied ? "text-green-600" : "text-red-500"
//                 }`}>
//                   {promoMessage}
//                 </p>

//               )}

//             </div>

//           </div>

//           {/* SUMMARY */}
//           <div className="border p-6 space-y-6 h-fit">

//             <h2 className="font-semibold">
//               Order Summary
//             </h2>

//             {items.map(item => (

//               <div key={item.productId} className="flex justify-between text-sm">

//                 <span>{item.name} × {item.quantity}</span>

//                 <span>₹{item.price * item.quantity}</span>

//               </div>

//             ))}

//             <hr />

//             <div className="flex justify-between font-bold text-lg">

//               <span>Total</span>

//               <span>₹{finalTotal.toFixed(2)}</span>

//             </div>

//             <Button className="w-full" onClick={confirmOrder}>
//               Confirm Order
//             </Button>

//           </div>

//         </div>

//       </div>

//     </main>

//   );

// };

// export default Checkout;


// import { useState, useEffect } from "react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";

// const API = "http://127.0.0.1:8000/api/auth";

// declare global {
//   interface Window {
//     Razorpay: any;
//   }
// }


// /* ================================
//    Razorpay Script Loader
// ================================ */

// const loadRazorpayScript = () => {

//   return new Promise<boolean>((resolve) => {

//     if (window.Razorpay) {
//       resolve(true);
//       return;
//     }

//     const script = document.createElement("script");

//     script.src = "https://checkout.razorpay.com/v1/checkout.js";

//     script.onload = () => resolve(true);

//     script.onerror = () => resolve(false);

//     document.body.appendChild(script);

//   });

// };


// const Checkout = () => {

//   const { items, totalPrice, clearCart } = useCart();


//   /* ================================
//      STATES
//   ================================ */

//   const [promoCode, setPromoCode] = useState("");
//   const [promoApplied, setPromoApplied] = useState(false);
//   const [discountAmount, setDiscountAmount] = useState(0);
//   const [finalTotal, setFinalTotal] = useState(totalPrice);
//   const [promoMessage, setPromoMessage] = useState("");
//   const [loadingPromo, setLoadingPromo] = useState(false);

//   const [submitted, setSubmitted] = useState(false);
//   const [razorpayOrderId, setRazorpayOrderId] = useState("");

//   /* Shipping */
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [stateValue, setStateValue] = useState("");
//   const [pincode, setPincode] = useState("");
//   const [notes, setNotes] = useState("");


//   const orderId =
//     razorpayOrderId || `RUT${Date.now().toString().slice(-6)}`;


//   /* ================================
//      Update total
//   ================================ */

//   useEffect(() => {

//     if (!promoApplied) {
//       setFinalTotal(totalPrice);
//     }

//   }, [totalPrice]);


//   /* ================================
//      APPLY PROMO (CASE SENSITIVE)
//   ================================ */

//   const applyPromoCode = async () => {

//     const trimmedCode = promoCode.trim();

//     if (!trimmedCode) {

//       setPromoMessage("Enter promo code");

//       return;

//     }

//     setLoadingPromo(true);

//     try {

//       const res = await fetch(
//         `${API}/validate-promocode/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({

//             code: trimmedCode,
//             cart_total: totalPrice

//           })
//         }
//       );

//       const data = await res.json();

//       if (data.valid) {

//         setPromoApplied(true);

//         setDiscountAmount(data.discount_amount);

//         setFinalTotal(data.final_total);

//         setPromoMessage(data.message);

//       } else {

//         setPromoApplied(false);

//         setDiscountAmount(0);

//         setFinalTotal(totalPrice);

//         setPromoMessage(data.message);

//       }

//     } catch {

//       setPromoMessage("Error applying promo");

//     }

//     setLoadingPromo(false);

//   };


//   /* ================================
//      REMOVE PROMO
//   ================================ */

//   const removePromoCode = () => {

//     setPromoApplied(false);

//     setPromoCode("");

//     setDiscountAmount(0);

//     setFinalTotal(totalPrice);

//     setPromoMessage("Promo removed");

//   };


//   /* ================================
//      CONFIRM ORDER + RAZORPAY
//   ================================ */

//   const confirmOrder = async () => {

//     if (!name || !phone || !address || !city || !stateValue || !pincode) {

//       alert("Please fill all shipping details");

//       return;

//     }

//     const loaded = await loadRazorpayScript();

//     if (!loaded) {

//       alert("Failed to load Razorpay");

//       return;

//     }

//     try {

//       /* Create order in backend */

//       const res = await fetch(
//         `${API}/create-order/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify({

//             name,
//             phone,
//             email,
//             address,
//             city,
//             state: stateValue,
//             pincode,
//             notes,
//             promo_code: promoCode,

//             subtotal: totalPrice,
//             discount: discountAmount,

//             items: items.map(item => ({
//               name: item.name,
//               quantity: item.quantity,
//               price: item.price
//             }))

//           })
//         }
//       );

//       const order = await res.json();

//       if (!order.order_id) {

//         alert("Order creation failed");

//         return;

//       }

//       setRazorpayOrderId(order.order_id);


//       /* Razorpay options */

//       const options = {

//         key: order.key,

//         amount: order.amount,

//         currency: order.currency,

//         order_id: order.order_id,

//         name: "RUT Store",

//         description: "Order Payment",

//         handler: async function (response: any) {

//           const verifyRes = await fetch(
//             `${API}/verify-payment/`,
//             {
//               method: "POST",
//               headers: {
//                 "Content-Type": "application/json"
//               },
//               body: JSON.stringify(response)
//             }
//           );

//           const verifyData = await verifyRes.json();

//           if (verifyData.success) {

//             clearCart();

//             setSubmitted(true);

//           } else {

//             alert("Payment verification failed");

//           }

//         },

//         modal: {

//           ondismiss: function () {

//             alert("Payment cancelled");

//           }

//         },

//         prefill: {

//           name,
//           email,
//           contact: phone

//         },

//         theme: {

//           color: "#000000"

//         }

//       };


//       const rzp = new window.Razorpay(options);


//       rzp.on("payment.failed", function () {

//         alert("Payment failed");

//       });


//       rzp.open();

//     } catch {

//       alert("Payment failed");

//     }

//   };


//   /* ================================
//      SUCCESS PAGE
//   ================================ */

//   if (submitted) {

//     return (

//       <main className="pt-28 pb-20 min-h-screen">

//         <div className="max-w-4xl mx-auto px-4">

//           <h1 className="text-3xl font-bold mb-6">
//             Order Confirmed
//           </h1>

//           <div className="border p-6 space-y-3">

//             <p>Order ID: #{orderId}</p>

//             <p>Total Paid: ₹{finalTotal.toFixed(2)}</p>

//           </div>

//         </div>

//       </main>

//     );

//   }


//   /* ================================
//      MAIN PAGE UI
//   ================================ */

//   return (

//     <main className="pt-28 pb-28 min-h-screen">

//       <div className="max-w-6xl mx-auto px-4">

//         <h1 className="text-3xl font-bold mb-10">
//           Checkout
//         </h1>


//         <div className="grid lg:grid-cols-2 gap-16">


//           {/* LEFT */}

//           <div className="space-y-10">


//             {/* SHIPPING */}

//             <div>

//               <h2 className="font-semibold mb-4">
//                 Shipping Info
//               </h2>

//               <div className="space-y-4">

//                 <Input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />

//                 <Input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

//                 <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

//                 <Input placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />

//                 <Input placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} />

//                 <Input placeholder="State" value={stateValue} onChange={(e)=>setStateValue(e.target.value)} />

//                 <Input placeholder="Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} />

//                 <Input placeholder="Notes (Optional)" value={notes} onChange={(e)=>setNotes(e.target.value)} />

//               </div>

//             </div>


//             {/* PROMO */}

//             <div>

//               <h2 className="font-semibold mb-4">
//                 Promo Code
//               </h2>

//               <div className="flex gap-3">

//                 <Input
//                   placeholder="Enter promo code"
//                   value={promoCode}
//                   onChange={(e)=>setPromoCode(e.target.value)}
//                   disabled={promoApplied}
//                 />

//                 {!promoApplied ? (

//                   <Button onClick={applyPromoCode}>
//                     Apply
//                   </Button>

//                 ) : (

//                   <Button variant="destructive" onClick={removePromoCode}>
//                     Remove
//                   </Button>

//                 )}

//               </div>

//               {promoMessage && (

//                 <p className={`mt-2 text-sm ${
//                   promoApplied
//                     ? "text-green-600"
//                     : "text-red-500"
//                 }`}>
//                   {promoMessage}
//                 </p>

//               )}

//             </div>


//           </div>


//           {/* SUMMARY */}

//           <div className="border p-6 space-y-6 h-fit">

//             <h2 className="font-semibold">
//               Order Summary
//             </h2>

//             {items.map(item => (

//               <div key={item.productId} className="flex justify-between">

//                 <span>{item.name} × {item.quantity}</span>

//                 <span>₹{item.price * item.quantity}</span>

//               </div>

//             ))}

//             <hr />

//             <div className="flex justify-between font-bold text-lg">

//               <span>Total</span>

//               <span>₹{finalTotal.toFixed(2)}</span>

//             </div>

//             <Button className="w-full" onClick={confirmOrder}>
//               Confirm Order
//             </Button>

//           </div>


//         </div>

//       </div>

//     </main>

//   );

// };

// export default Checkout;



import { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

const API = "http://127.0.0.1:8000/api/auth";

declare global {
  interface Window {
    Razorpay: any;
  }
}

/* ================================
   Razorpay Script Loader
================================ */

const loadRazorpayScript = () => {
  return new Promise<boolean>((resolve) => {

    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");

    script.src = "https://checkout.razorpay.com/v1/checkout.js";

    script.onload = () => resolve(true);

    script.onerror = () => resolve(false);

    document.body.appendChild(script);

  });
};


const Checkout = () => {

  const navigate = useNavigate();

  const { items, totalPrice, clearCart } = useCart();


  /* ================================
     STATES
  ================================ */

  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(totalPrice);
  const [promoMessage, setPromoMessage] = useState("");
  const [loadingPromo, setLoadingPromo] = useState(false);

  const [razorpayOrderId, setRazorpayOrderId] = useState("");

  /* Shipping */

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [pincode, setPincode] = useState("");
  const [notes, setNotes] = useState("");


  /* ================================
     Update total
  ================================ */

  useEffect(() => {

    if (!promoApplied) {
      setFinalTotal(totalPrice);
    }

  }, [totalPrice]);


  /* ================================
     APPLY PROMO
  ================================ */

  const applyPromoCode = async () => {

    const trimmedCode = promoCode.trim();

    if (!trimmedCode) {

      setPromoMessage("Enter promo code");

      return;

    }

    setLoadingPromo(true);

    try {

      const res = await fetch(
        `${API}/validate-promocode/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            code: trimmedCode,
            cart_total: totalPrice
          })
        }
      );

      const data = await res.json();

      if (data.valid) {

        setPromoApplied(true);
        setDiscountAmount(data.discount_amount);
        setFinalTotal(data.final_total);
        setPromoMessage(data.message);

      } else {

        setPromoApplied(false);
        setDiscountAmount(0);
        setFinalTotal(totalPrice);
        setPromoMessage(data.message);

      }

    } catch {

      setPromoMessage("Error applying promo");

    }

    setLoadingPromo(false);

  };


  /* ================================
     REMOVE PROMO
  ================================ */

  const removePromoCode = () => {

    setPromoApplied(false);
    setPromoCode("");
    setDiscountAmount(0);
    setFinalTotal(totalPrice);
    setPromoMessage("Promo removed");

  };


  /* ================================
     CONFIRM ORDER
  ================================ */

  const confirmOrder = async () => {

    if (!name || !phone || !address || !city || !stateValue || !pincode) {

      alert("Please fill all shipping details");

      return;

    }

    const loaded = await loadRazorpayScript();

    if (!loaded) {

      alert("Failed to load Razorpay");

      return;

    }

    try {

      /* CREATE ORDER */

      const res = await fetch(
        `${API}/create-order/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({

            name,
            phone,
            email,
            address,
            city,
            state: stateValue,
            pincode,
            notes,
            promo_code: promoCode,

            subtotal: totalPrice,
            discount: discountAmount,

            items: items.map(item => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price
            }))

          })
        }
      );

      const order = await res.json();

      if (!order.order_id) {

        alert("Order creation failed");

        return;

      }

      setRazorpayOrderId(order.order_id);


      /* RAZORPAY OPTIONS */

      const options = {

        key: order.key,

        amount: order.amount,

        currency: order.currency,

        order_id: order.order_id,

        name: "RUT Store",

        description: "Order Payment",

        handler: async function (response: any) {

          const verifyRes = await fetch(
            `${API}/verify-payment/`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(response)
            }
          );

          const verifyData = await verifyRes.json();

          if (verifyData.success) {

            clearCart();

            /* REDIRECT TO SUCCESS PAGE */

            navigate("/payment-success", {

              state: {

                orderId: response.razorpay_order_id,
                paymentId: response.razorpay_payment_id,
                amount: finalTotal

              }

            });

          }

          else {

            alert("Payment verification failed");

          }

        },

        modal: {

          ondismiss: function () {

            alert("Payment cancelled");

          }

        },

        prefill: {

          name,
          email,
          contact: phone

        },

        theme: {

          color: "#000000"

        }

      };


      const rzp = new window.Razorpay(options);


      rzp.on("payment.failed", function () {

        alert("Payment failed");

      });


      rzp.open();

    }

    catch {

      alert("Payment failed");

    }

  };


  /* ================================
     UI
  ================================ */

  return (

    <main className="pt-28 pb-28 min-h-screen">

      <div className="max-w-6xl mx-auto px-4">

        <h1 className="text-3xl font-bold mb-10">
          Checkout
        </h1>


        <div className="grid lg:grid-cols-2 gap-16">


          {/* LEFT */}

          <div className="space-y-10">


            {/* SHIPPING */}

            <div>

              <h2 className="font-semibold mb-4">
                Shipping Info
              </h2>

              <div className="space-y-4">

                <Input placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />

                <Input placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />

                <Input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />

                <Input placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} />

                <Input placeholder="City" value={city} onChange={(e)=>setCity(e.target.value)} />

                <Input placeholder="State" value={stateValue} onChange={(e)=>setStateValue(e.target.value)} />

                <Input placeholder="Pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)} />

                <Input placeholder="Notes (Optional)" value={notes} onChange={(e)=>setNotes(e.target.value)} />

              </div>

            </div>


            {/* PROMO */}

            <div>

              <h2 className="font-semibold mb-4">
                Promo Code
              </h2>

              <div className="flex gap-3">

                <Input
                  placeholder="Enter promo code"
                  value={promoCode}
                  onChange={(e)=>setPromoCode(e.target.value)}
                  disabled={promoApplied}
                />

                {!promoApplied ? (

                  <Button onClick={applyPromoCode} disabled={loadingPromo}>
                    Apply
                  </Button>

                ) : (

                  <Button variant="destructive" onClick={removePromoCode}>
                    Remove
                  </Button>

                )}

              </div>

              {promoMessage && (

                <p className={`mt-2 text-sm ${
                  promoApplied ? "text-green-600" : "text-red-500"
                }`}>
                  {promoMessage}
                </p>

              )}

            </div>


          </div>


          {/* SUMMARY */}

          <div className="border p-6 space-y-6 h-fit">

            <h2 className="font-semibold">
              Order Summary
            </h2>

            {items.map(item => (

              <div key={item.productId} className="flex justify-between">

                <span>{item.name} × {item.quantity}</span>

                <span>₹{item.price * item.quantity}</span>

              </div>

            ))}

            <hr />

            <div className="flex justify-between font-bold text-lg">

              <span>Total</span>

              <span>₹{finalTotal.toFixed(2)}</span>

            </div>

            <Button className="w-full" onClick={confirmOrder}>
              Confirm Order
            </Button>

          </div>


        </div>

      </div>

    </main>

  );

};

export default Checkout;