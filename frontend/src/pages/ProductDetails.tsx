// import { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { Minus, Plus, ArrowLeft } from 'lucide-react';
// import { getProductById, products } from '@/data/products';
// import { useCart } from '@/context/CartContext';
// import { Button } from '@/components/ui/button';

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const product = getProductById(id || '');
//   const { addToCart } = useCart();
//   const [selectedSize, setSelectedSize] = useState('M');
//   const [quantity, setQuantity] = useState(1);
//   const [activeImage, setActiveImage] = useState(0);

//   if (!product) {
//     return (
//       <main className="pt-24 pb-16 text-center">
//         <p className="font-sans">Product not found.</p>
//         <Link to="/shop" className="text-sm font-sans underline mt-4 inline-block">Back to Shop</Link>
//       </main>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       quantity,
//       image: product.images[0],
//     });
//   };

//   const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

//   return (
//     <main className="pt-20 pb-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <Link to="/shop" className="inline-flex items-center gap-2 text-sm font-sans tracking-widest uppercase mb-8 hover:opacity-70 transition-opacity">
//           <ArrowLeft size={16} /> Back
//         </Link>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
//           {/* Images */}
//           <div className="space-y-4">
//             <motion.div
//               key={activeImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="aspect-[3/4] bg-muted overflow-hidden"
//             >
//               <img
//                 src={product.images[activeImage]}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>
//             <div className="flex gap-2">
//               {product.images.map((img, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveImage(i)}
//                   className={`w-20 h-20 overflow-hidden border-2 transition-colors ${
//                     activeImage === i ? 'border-foreground' : 'border-transparent'
//                   }`}
//                 >
//                   <img src={img} alt="" className="w-full h-full object-cover" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Info */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">{product.name}</h1>
//               <p className="text-2xl font-sans">${product.price}</p>
//             </div>

//             <p className="text-sm font-sans text-muted-foreground leading-relaxed">{product.description}</p>

//             {/* Size */}
//             <div>
//               <p className="text-xs font-sans tracking-widest uppercase mb-3">Size</p>
//               <div className="flex gap-2">
//                 {product.sizes.map(s => (
//                   <button
//                     key={s}
//                     onClick={() => setSelectedSize(s)}
//                     className={`w-12 h-12 border text-sm font-sans transition-colors ${
//                       selectedSize === s
//                         ? 'bg-foreground text-background border-foreground'
//                         : 'border-border hover:border-foreground'
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity */}
//             <div>
//               <p className="text-xs font-sans tracking-widest uppercase mb-3">Quantity</p>
//               <div className="flex items-center border border-border w-fit">
//                 <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 hover:opacity-70">
//                   <Minus size={16} />
//                 </button>
//                 <span className="px-6 text-sm font-sans">{quantity}</span>
//                 <button onClick={() => setQuantity(q => q + 1)} className="p-3 hover:opacity-70">
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             <Button
//               onClick={handleAddToCart}
//               className="w-full py-6 rounded-none font-sans text-sm tracking-widest uppercase"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>

//         {/* Related */}
//         {related.length > 0 && (
//           <section className="mt-24">
//             <h2 className="text-2xl font-bold tracking-wide mb-8">Related Products</h2>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
//               {related.map(p => (
//                 <Link key={p.id} to={`/product/${p.id}`} className="group block">
//                   <div className="aspect-[3/4] overflow-hidden bg-muted">
//                     <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
//                   </div>
//                   <div className="mt-3 space-y-1">
//                     <h3 className="text-sm font-sans font-medium tracking-wide">{p.name}</h3>
//                     <p className="text-sm font-sans text-muted-foreground">${p.price}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>

//       {/* Mobile sticky Add to Cart */}
//       <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden z-40">
//         <Button onClick={handleAddToCart} className="w-full py-5 rounded-none font-sans text-sm tracking-widest uppercase">
//           Add to Cart — ${product.price * quantity}
//         </Button>
//       </div>
//     </main>
//   );
// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { getProductById, products } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const product = getProductById(id || "");
//   const { addToCart } = useCart();

//   const [selectedSize, setSelectedSize] = useState("M");
//   const [quantity, setQuantity] = useState(1);
//   const [activeImage, setActiveImage] = useState(0);

//   if (!product) {
//     return (
//       <main className="pt-24 pb-16 text-center">
//         <p className="text-sm">Product not found.</p>
//         <Link
//           to="/shop"
//           className="text-sm underline mt-4 inline-block"
//         >
//           Back to Shop
//         </Link>
//       </main>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       quantity,
//       image: product.images[0],
//     });
//   };

//   const related = products
//     .filter(
//       (p) =>
//         p.category === product.category && p.id !== product.id
//     )
//     .slice(0, 4);

//   return (
//     <main className="pt-20 pb-20">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Back Button */}
//         <Link
//           to="/shop"
//           className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-8 hover:opacity-70 transition-opacity"
//         >
//           <ArrowLeft size={16} /> Back
//         </Link>

//         {/* ===============================
//             PRODUCT GRID
//         ================================= */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

//           {/* Images */}
//           <div className="space-y-4">
//             <motion.div
//               key={activeImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="aspect-[3/4] bg-muted overflow-hidden"
//             >
//               <img
//                 src={product.images[activeImage]}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <div className="flex gap-2">
//               {product.images.map((img, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveImage(i)}
//                   className={`w-20 h-20 overflow-hidden border-2 ${
//                     activeImage === i
//                       ? "border-foreground"
//                       : "border-transparent"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Info */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">
//                 {product.name}
//               </h1>
//               <p className="text-2xl">
//                 ${product.price}
//               </p>
//             </div>

//             <p className="text-sm text-muted-foreground leading-relaxed">
//               {product.description}
//             </p>

//             {/* Size */}
//             <div>
//               <p className="text-xs tracking-widest uppercase mb-3">
//                 Size
//               </p>
//               <div className="flex gap-2">
//                 {product.sizes.map((s) => (
//                   <button
//                     key={s}
//                     onClick={() => setSelectedSize(s)}
//                     className={`w-12 h-12 border text-sm ${
//                       selectedSize === s
//                         ? "bg-foreground text-background border-foreground"
//                         : "border-border hover:border-foreground"
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Quantity */}
//             <div>
//               <p className="text-xs tracking-widest uppercase mb-3">
//                 Quantity
//               </p>
//               <div className="flex items-center border border-border w-fit">
//                 <button
//                   onClick={() =>
//                     setQuantity((q) => Math.max(1, q - 1))
//                   }
//                   className="p-3"
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <span className="px-6 text-sm">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() =>
//                     setQuantity((q) => q + 1)
//                   }
//                   className="p-3"
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             <Button
//               onClick={handleAddToCart}
//               className="w-full py-6 rounded-none text-sm tracking-widest uppercase"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>

//         {/* ===============================
//             RELATED PRODUCTS
//         ================================= */}
//         {related.length > 0 && (
//           <section className="mt-24">
//             <h2 className="text-2xl font-bold tracking-wide mb-8">
//               Related Products
//             </h2>

//             <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//               {related.map((p) => (
//                 <Link
//                   key={p.id}
//                   to={`/product/${p.id}`}
//                   className="group block"
//                 >
//                   <div className="aspect-[3/4] overflow-hidden bg-muted">
//                     <img
//                       src={p.images[0]}
//                       alt={p.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="mt-3 space-y-1">
//                     <h3 className="text-sm font-medium tracking-wide">
//                       {p.name}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       ${p.price}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>

//       {/* ===============================
//           MOBILE STICKY BUTTON
//       ================================= */}
//       <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden z-40">
//         <Button
//           onClick={handleAddToCart}
//           className="w-full py-5 rounded-none text-sm tracking-widest uppercase"
//         >
//           Add to Cart — ${product.price * quantity}
//         </Button>
//       </div>
//     </main>
//   );
// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { getProductById, products } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const ProductDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const product = getProductById(id || "");
//   const { addToCart } = useCart();

//   const [selectedSize, setSelectedSize] = useState("M");
//   const [quantity, setQuantity] = useState(1);
//   const [activeImage, setActiveImage] = useState(0);

//   if (!product) {
//     return (
//       <main className="pt-24 pb-16 text-center">
//         <p className="text-sm">Product not found.</p>
//         <Link to="/shop" className="text-sm underline mt-4 inline-block">
//           Back to Shop
//         </Link>
//       </main>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       productId: product.id,
//       name: product.name,
//       price: product.price,
//       size: selectedSize,
//       quantity,
//       image: product.images[0],
//     });
//   };

//   const related = products
//     .filter(
//       (p) => p.category === product.category && p.id !== product.id
//     )
//     .slice(0, 4);

//   return (
//     <main className="pt-20 pb-20">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* BACK BUTTON */}
//         <Link
//           to="/shop"
//           className="inline-flex items-center gap-2 text-sm tracking-widest uppercase mb-8 hover:opacity-70 transition-opacity"
//         >
//           <ArrowLeft size={16} /> Back
//         </Link>

//         {/* PRODUCT SECTION */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

//           {/* IMAGES */}
//           <div className="space-y-4">
//             <motion.div
//               key={activeImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="aspect-[3/4] bg-muted overflow-hidden"
//             >
//               <img
//                 src={product.images[activeImage]}
//                 alt={product.name}
//                 className="w-full h-full object-cover"
//               />
//             </motion.div>

//             <div className="flex gap-2">
//               {product.images.map((img, i) => (
//                 <button
//                   key={i}
//                   onClick={() => setActiveImage(i)}
//                   className={`w-20 h-20 overflow-hidden border-2 ${
//                     activeImage === i
//                       ? "border-foreground"
//                       : "border-transparent"
//                   }`}
//                 >
//                   <img
//                     src={img}
//                     alt=""
//                     className="w-full h-full object-cover"
//                   />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* INFO */}
//           <div className="space-y-8">
//             <div>
//               <h1 className="text-3xl md:text-4xl font-bold tracking-wide mb-2">
//                 {product.name}
//               </h1>
//               <p className="text-2xl">${product.price}</p>
//             </div>

//             <p className="text-sm text-muted-foreground leading-relaxed">
//               {product.description}
//             </p>

//             {/* SIZE */}
//             <div>
//               <p className="text-xs tracking-widest uppercase mb-3">
//                 Size
//               </p>
//               <div className="flex gap-2">
//                 {product.sizes.map((s) => (
//                   <button
//                     key={s}
//                     onClick={() => setSelectedSize(s)}
//                     className={`w-12 h-12 border text-sm ${
//                       selectedSize === s
//                         ? "bg-foreground text-background border-foreground"
//                         : "border-border hover:border-foreground"
//                     }`}
//                   >
//                     {s}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* QUANTITY */}
//             <div>
//               <p className="text-xs tracking-widest uppercase mb-3">
//                 Quantity
//               </p>
//               <div className="flex items-center border border-border w-fit">
//                 <button
//                   onClick={() =>
//                     setQuantity((q) => Math.max(1, q - 1))
//                   }
//                   className="p-3"
//                 >
//                   <Minus size={16} />
//                 </button>
//                 <span className="px-6 text-sm">
//                   {quantity}
//                 </span>
//                 <button
//                   onClick={() => setQuantity((q) => q + 1)}
//                   className="p-3"
//                 >
//                   <Plus size={16} />
//                 </button>
//               </div>
//             </div>

//             <Button
//               onClick={handleAddToCart}
//               className="w-full py-6 rounded-none text-sm tracking-widest uppercase"
//             >
//               Add to Cart
//             </Button>
//           </div>
//         </div>

//         {/* RELATED PRODUCTS */}
//         {related.length > 0 && (
//           <section className="mt-24">
//             <h2 className="text-2xl font-bold tracking-wide mb-8">
//               Related Products
//             </h2>

//             {/* FIXED GRID */}
//             <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//               {related.map((p) => (
//                 <Link
//                   key={p.id}
//                   to={`/product/${p.id}`}
//                   className="group block"
//                 >
//                   <div className="aspect-[3/4] overflow-hidden bg-muted">
//                     <img
//                       src={p.images[0]}
//                       alt={p.name}
//                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       loading="lazy"
//                     />
//                   </div>

//                   <div className="mt-3 space-y-1">
//                     <h3 className="text-sm font-medium tracking-wide">
//                       {p.name}
//                     </h3>
//                     <p className="text-sm text-muted-foreground">
//                       ${p.price}
//                     </p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </section>
//         )}
//       </div>

//       {/* MOBILE STICKY BUTTON */}
//       <div className="fixed bottom-0 left-0 right-0 p-4 bg-background border-t border-border md:hidden z-40">
//         <Button
//           onClick={handleAddToCart}
//           className="w-full py-5 rounded-none text-sm tracking-widest uppercase"
//         >
//           Add to Cart — ${product.price * quantity}
//         </Button>
//       </div>
//     </main>
//   );
// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { getProductById, products } from "@/data/products";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const ProductDetails = () => {

//   const { id } = useParams<{ id: string }>();
//   const product = getProductById(id || "");

//   const { addToCart } = useCart();

//   const [selectedSize, setSelectedSize] = useState("M");
//   const [quantity, setQuantity] = useState(1);
//   const [activeImage, setActiveImage] = useState(0);

//   if (!product) {
//     return (
//       <main className="pt-24 pb-16 text-center">
//         <p>Product not found</p>
//         <Link to="/shop">Back to shop</Link>
//       </main>
//     );
//   }

//   const handleAddToCart = () => {
//     addToCart({
//       productId: product.id,
//       name: product.name,
//       price: product.discountPrice || product.price,
//       size: selectedSize,
//       quantity,
//       image: product.images[0],
//     });
//   };

//   const related = products
//     .filter(
//       (p) => p.category === product.category && p.id !== product.id
//     )
//     .slice(0, 4);

//   return (
//     <main className="pt-20 pb-20">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* BACK BUTTON */}
//         <Link
//           to="/shop"
//           className="inline-flex items-center gap-2 text-sm mb-8 hover:opacity-70"
//         >
//           <ArrowLeft size={16} /> Back
//         </Link>


//         {/* MAIN GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


//           {/* IMAGE */}
//           <div>

//             <motion.img
//               key={activeImage}
//               src={product.images[activeImage]}
//               className="w-full aspect-[3/4] object-cover"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//             />

//             {/* thumbnails */}
//             <div className="flex gap-2 mt-3">

//               {product.images.map((img, i) => (

//                 <img
//                   key={i}
//                   src={img}
//                   onClick={() => setActiveImage(i)}
//                   className={`w-20 h-20 object-cover cursor-pointer border ${
//                     activeImage === i
//                       ? "border-white"
//                       : "border-transparent"
//                   }`}
//                 />

//               ))}

//             </div>

//           </div>


//           {/* INFO */}
//           <div>

//             <h1 className="text-3xl font-bold mb-2">
//               {product.name}
//             </h1>


//             {/* PRICE WITH DISCOUNT */}
//             <div className="flex items-center gap-3 mb-4">

//               {product.discountPrice ? (
//                 <>
//                   <span className="text-2xl font-bold text-white">
//                     ${product.discountPrice}
//                   </span>

//                   <span className="text-lg line-through text-gray-400">
//                     ${product.price}
//                   </span>

//                   <span className="text-green-400 text-sm">
//                     {Math.round(
//                       ((product.price - product.discountPrice) /
//                         product.price) *
//                         100
//                     )}
//                     % OFF
//                   </span>
//                 </>
//               ) : (
//                 <span className="text-2xl font-bold">
//                   ${product.price}
//                 </span>
//               )}

//             </div>


//             <p className="text-gray-400 mb-6">
//               {product.description}
//             </p>


//             {/* SIZE */}
//             <div className="mb-6">

//               <p className="mb-2 text-sm">Size</p>

//               <div className="flex gap-2">

//                 {product.sizes.map((size) => (

//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 border ${
//                       selectedSize === size
//                         ? "bg-white text-black"
//                         : ""
//                     }`}
//                   >
//                     {size}
//                   </button>

//                 ))}

//               </div>

//             </div>


//             {/* QUANTITY */}
//             <div className="flex items-center gap-3 mb-6">

//               <button
//                 onClick={() =>
//                   setQuantity((q) => Math.max(1, q - 1))
//                 }
//               >
//                 <Minus />
//               </button>

//               <span>{quantity}</span>

//               <button
//                 onClick={() => setQuantity((q) => q + 1)}
//               >
//                 <Plus />
//               </button>

//             </div>


//             <Button
//               onClick={handleAddToCart}
//               className="w-full"
//             >
//               Add to Cart
//             </Button>

//           </div>

//         </div>


//         {/* RELATED PRODUCTS SAME HEIGHT */}
//         <div className="mt-20">

//           <h2 className="text-2xl mb-6">
//             Related Products
//           </h2>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//             {related.map((p) => (

//               <Link key={p.id} to={`/product/${p.id}`}>

//                 <div className="h-full flex flex-col">

//                   <img
//                     src={p.images[0]}
//                     className="aspect-[3/4] object-cover"
//                   />

//                   <div className="mt-2 flex-grow">

//                     <p>{p.name}</p>

//                     {p.discountPrice ? (
//                       <div className="flex gap-2">

//                         <span className="text-white">
//                           ${p.discountPrice}
//                         </span>

//                         <span className="line-through text-gray-400">
//                           ${p.price}
//                         </span>

//                       </div>
//                     ) : (
//                       <p>${p.price}</p>
//                     )}

//                   </div>

//                 </div>

//               </Link>

//             ))}

//           </div>

//         </div>

//       </div>

//     </main>
//   );
// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { motion } from "framer-motion";
// import { useProduct } from "@/hooks/useProduct";
// import { useProducts } from "@/hooks/useProducts";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";

// const ProductDetails = () => {

//   const { id } = useParams();

//   const { data: product, isLoading } = useProduct(id || "");

//   const { data: allProducts } = useProducts();

//   const { addToCart } = useCart();

//   const [quantity, setQuantity] = useState(1);

//   const [activeImage, setActiveImage] = useState(0);

//   const [selectedSize, setSelectedSize] = useState("M");


//   if (isLoading)
//     return <div className="pt-24 text-center">Loading...</div>;

//   if (!product)
//     return <div className="pt-24 text-center">Product not found</div>;


//   // Convert string to number
//   const price = Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;

//   const finalPrice =
//     discountPrice || price;


//   const related =
//     allProducts?.filter(
//       (p: any) =>
//         p.category === product.category &&
//         p.id !== product.id
//     ) || [];


//   const handleAddToCart = () => {

//     addToCart({

//       productId: product.id,

//       name: product.name,

//       price: finalPrice,

//       size: selectedSize,

//       quantity,

//       image: product.images[0],

//     });

//   };


//   return (

//     <main className="pt-24 pb-20">

//       <div className="max-w-7xl mx-auto px-4">


//         {/* BACK BUTTON */}

//         <Link
//           to="/shop"
//           className="relative inline-flex items-center gap-2 text-sm tracking-widest uppercase after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//         >
//           <ArrowLeft size={16}/>
//           Back
//         </Link>



//         <div className="grid md:grid-cols-2 gap-12 mt-6">


//           {/* IMAGE */}

//           <div>

//             <motion.img
//               key={activeImage}
//               src={product.images[activeImage]}
//               className="w-full aspect-[3/4] object-cover"
//             />


//             <div className="flex gap-3 mt-3">

//               {product.images.map((img: string, i: number) => (

//                 <img
//                   key={i}
//                   src={img}
//                   onClick={() => setActiveImage(i)}
//                   className="w-20 h-20 object-cover cursor-pointer border"
//                 />

//               ))}

//             </div>

//           </div>



//           {/* INFO */}

//           <div>

//             <h1 className="text-3xl font-bold">

//               {product.name}

//             </h1>


//             {/* PRICE */}

//             <div className="flex gap-4 mt-3 items-center">

//               <span className="text-2xl font-bold">

//                 ${finalPrice}

//               </span>


//               {discountPrice && (

//                 <span className="line-through text-gray-400">

//                   ${price}

//                 </span>

//               )}

//             </div>


//             {/* CATEGORY */}

//             <div className="mt-3">

//               <Link
//                 to={`/shop?category=${product.category}`}
//                 className="relative uppercase text-sm after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {product.category}
//               </Link>

//             </div>


//             {/* SIZE */}

//             <div className="mt-6">

//               <p className="uppercase text-sm mb-2">
//                 Size
//               </p>

//               <div className="flex gap-2">

//                 {product.sizes.map((s: string) => (

//                   <button
//                     key={s}
//                     onClick={() => setSelectedSize(s)}
//                     className="border px-4 py-2"
//                   >
//                     {s}
//                   </button>

//                 ))}

//               </div>

//             </div>


//             {/* QUANTITY */}

//             <div className="flex gap-4 mt-6">

//               <button
//                 onClick={() =>
//                   setQuantity(q =>
//                     Math.max(1, q - 1)
//                   )
//                 }
//               >
//                 <Minus size={18}/>
//               </button>

//               {quantity}

//               <button
//                 onClick={() =>
//                   setQuantity(q => q + 1)
//                 }
//               >
//                 <Plus size={18}/>
//               </button>

//             </div>


//             <Button
//               onClick={handleAddToCart}
//               className="mt-6 w-full"
//             >
//               Add to Cart
//             </Button>

//           </div>

//         </div>



//         {/* RELATED */}

//         <div className="mt-20">

//           <h2 className="text-2xl font-bold mb-6">
//             Related Products
//           </h2>


//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

//             {related.slice(0,4).map((p: any) => {

//               const rp =
//                 p.discount_price
//                   ? Number(p.discount_price)
//                   : Number(p.price);

//               return (

//                 <Link
//                   key={p.id}
//                   to={`/product/${p.id}`}
//                   className="group"
//                 >

//                   <img
//                     src={p.images[0]}
//                     className="aspect-[3/4] object-cover"
//                   />


//                   <h3
//                     className="mt-2 relative inline-block after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all group-hover:after:w-full"
//                   >
//                     {p.name}
//                   </h3>


//                   <div className="flex gap-2">

//                     <span>${rp}</span>


//                     {p.discount_price && (

//                       <span className="line-through text-gray-400">

//                         ${p.price}

//                       </span>

//                     )}

//                   </div>

//                 </Link>

//               );

//             })}

//           </div>

//         </div>

//       </div>

//     </main>

//   );

// };

// export default ProductDetails;




// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { useProduct } from "@/hooks/useProduct";

// const ProductDetails = () => {

//   const { id } = useParams();

//   const { data: product, isLoading } = useProduct(id || "");

//   const { addToCart } = useCart();

//   const [quantity, setQuantity] = useState(1);

//   const [selectedSize, setSelectedSize] = useState("M");

//   const [activeImage, setActiveImage] = useState(0);


//   if (isLoading) {
//     return (
//       <div className="pt-32 text-center">
//         Loading product...
//       </div>
//     );
//   }


//   if (!product) {
//     return (
//       <div className="pt-32 text-center">
//         Product not found
//       </div>
//     );
//   }


//   const price = Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;


//   const isOutOfStock =
//     product.is_out_of_stock === true;


//   const handleAddToCart = () => {

//     if (isOutOfStock) return;

//     addToCart({

//       productId: product.id,

//       name: product.name,

//       price: discountPrice || price,

//       size: selectedSize,

//       quantity,

//       image: product.images?.[0],

//     });

//   };


//   return (

//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">


//         {/* BACK */}
//         <Link
//           to="/shop"
//           className="relative inline-flex items-center gap-2 uppercase text-sm tracking-widest mb-10
//           after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-current after:w-0 hover:after:w-full after:transition-all"
//         >
//           <ArrowLeft size={16}/>
//           Back
//         </Link>


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


//           {/* IMAGE */}
//           <div className="relative">

//             {/* OUT OF STOCK BADGE */}
//             {isOutOfStock && (
//               <div className="absolute top-4 left-4 z-10 bg-black text-white px-4 py-2 text-xs uppercase tracking-widest">
//                 Out of Stock
//               </div>
//             )}

//             {/* MAIN IMAGE */}
//             <motion.div
//               key={activeImage}
//               initial={{opacity:0}}
//               animate={{opacity:1}}
//               className="aspect-[3/4] bg-gray-100 overflow-hidden"
//             >
//               <img
//                 src={product.images?.[activeImage]}
//                 className={`w-full h-full object-cover ${
//                   isOutOfStock ? "opacity-60" : ""
//                 }`}
//               />
//             </motion.div>


//             {/* THUMBNAILS */}
//             <div className="flex gap-3 mt-4">

//               {product.images?.map((img: string, index: number) => (

//                 <button
//                   key={index}
//                   onClick={() => setActiveImage(index)}
//                   className={`w-20 aspect-square overflow-hidden border transition
//                   ${
//                     activeImage === index
//                     ? "border-black"
//                     : "border-transparent opacity-60 hover:opacity-100"
//                   }`}
//                 >

//                   <img
//                     src={img}
//                     className="w-full h-full object-cover"
//                   />

//                 </button>

//               ))}

//             </div>

//           </div>


//           {/* DETAILS */}
//           <div className="space-y-6">


//             {/* NAME */}
//             <h1 className="text-3xl font-bold uppercase tracking-wide">
//               {product.name}
//             </h1>


//             {/* PRICE */}
//             <div className="flex items-center gap-3 text-2xl">

//               {discountPrice ? (
//                 <>
//                   <span className="font-semibold">
//                     ₹{discountPrice}
//                   </span>

//                   <span className="line-through text-gray-400 text-lg">
//                     ₹{price}
//                   </span>

//                   <span className="text-green-600 text-sm">
//                     ({product.discount_percentage}% OFF)
//                   </span>
//                 </>
//               ) : (
//                 <span>
//                   ₹{price}
//                 </span>
//               )}

//             </div>


//             {/* DESCRIPTION */}
//             <p className="text-muted-foreground">
//               {product.description}
//             </p>


//             {/* SIZE */}
//             {product.sizes?.length > 0 && (

//               <div>

//                 <p className="uppercase text-sm mb-2">
//                   Size
//                 </p>

//                 <div className="flex gap-2">

//                   {product.sizes.map((size: string) => (

//                     <button
//                       key={size}
//                       disabled={isOutOfStock}
//                       onClick={() => setSelectedSize(size)}
//                       className={`border px-4 py-2 text-sm transition
//                       ${
//                         selectedSize === size
//                         ? "border-black"
//                         : "border-gray-400"
//                       }`}
//                     >
//                       {size}
//                     </button>

//                   ))}

//                 </div>

//               </div>

//             )}


//             {/* QUANTITY */}
//             <div>

//               <p className="uppercase text-sm mb-2">
//                 Quantity
//               </p>

//               <div className="flex items-center border w-fit">

//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() =>
//                     setQuantity(q => Math.max(1, q - 1))
//                   }
//                   className="p-3"
//                 >
//                   <Minus size={16}/>
//                 </button>

//                 <span className="px-6">
//                   {quantity}
//                 </span>

//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() => setQuantity(q => q + 1)}
//                   className="p-3"
//                 >
//                   <Plus size={16}/>
//                 </button>

//               </div>

//             </div>


//             {/* ADD TO CART */}
//             <Button
//               disabled={isOutOfStock}
//               onClick={handleAddToCart}
//               className={`w-full uppercase tracking-widest py-6
//               ${
//                 isOutOfStock
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : ""
//               }`}
//             >
//               {isOutOfStock
//                 ? "Out Of Stock"
//                 : "Add To Cart"}
//             </Button>


//           </div>

//         </div>

//       </div>


//       {/* MOBILE */}
//       {!isOutOfStock && (
//         <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">

//           <Button
//             onClick={handleAddToCart}
//             className="w-full uppercase"
//           >
//             Add To Cart — ₹{(discountPrice || price) * quantity}
//           </Button>

//         </div>
//       )}

//     </main>

//   );

// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { useProduct } from "@/hooks/useProduct";

// const ProductDetails = () => {

//   const { id } = useParams();

//   const { data: product, isLoading } =
//     useProduct(id || "");

//   const { addToCart } = useCart();

//   const [quantity, setQuantity] =
//     useState(1);

//   const [selectedSize, setSelectedSize] =
//     useState("M");

//   const [activeImage, setActiveImage] =
//     useState(0);


//   if (isLoading) {

//     return (

//       <div className="pt-32 text-center">
//         Loading product...
//       </div>

//     );

//   }


//   if (!product) {

//     return (

//       <div className="pt-32 text-center">
//         Product not found
//       </div>

//     );

//   }


//   const price =
//     Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;

//   const finalPrice =
//     discountPrice || price;

//   const isOutOfStock =
//     product.is_out_of_stock === true;


//   const handleAddToCart = () => {

//     if (isOutOfStock) return;

//     addToCart({

//       productId: product.id,

//       name: product.name,

//       price: finalPrice,

//       size: selectedSize,

//       quantity,

//       image: product.images?.[0],

//     });

//   };


//   return (

//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">


//         {/* BACK BUTTON */}
//         <Link
//           to="/shop"
//           className="relative inline-flex items-center gap-2 uppercase text-sm tracking-widest mb-10

//           after:absolute after:left-0 after:bottom-[-4px]
//           after:h-[1px] after:bg-current
//           after:w-0 hover:after:w-full
//           after:transition-all"
//         >

//           <ArrowLeft size={16} />

//           Back

//         </Link>



//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">


//           {/* IMAGE SECTION */}
//           <div className="relative">


//             {/* OUT OF STOCK BADGE */}
//             {isOutOfStock && (

//               <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-xs uppercase tracking-widest">
//                 Out Of Stock
//               </div>

//             )}



//             {/* MAIN IMAGE */}
//             <motion.div
//               key={activeImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="aspect-[3/4] bg-gray-100 overflow-hidden"
//             >

//               <img
//                 src={product.images?.[activeImage]}
//                 alt={product.name}
//                 className={`

//                   w-full h-full object-cover

//                   ${
//                     isOutOfStock
//                       ? "opacity-60"
//                       : ""
//                   }

//                 `}
//               />

//             </motion.div>



//             {/* THUMBNAILS */}
//             <div className="flex gap-3 mt-4">

//               {product.images?.map(
//                 (img: string, index: number) => (

//                   <button
//                     key={index}
//                     onClick={() =>
//                       setActiveImage(index)
//                     }
//                     className={`

//                       w-20 aspect-square
//                       overflow-hidden border

//                       ${
//                         activeImage === index
//                           ? "border-black"
//                           : "border-transparent opacity-60 hover:opacity-100"
//                       }

//                     `}
//                   >

//                     <img
//                       src={img}
//                       className="w-full h-full object-cover"
//                     />

//                   </button>

//                 )
//               )}

//             </div>


//           </div>



//           {/* DETAILS SECTION */}
//           <div className="space-y-6">


//             {/* NAME */}
//             <h1 className="text-3xl font-bold uppercase tracking-wide">
//               {product.name}
//             </h1>



//             {/* PRICE */}
//             <div className="flex items-center gap-3 text-2xl">


//               {discountPrice ? (

//                 <>

//                   <span className="font-semibold">
//                     ₹{discountPrice}
//                   </span>


//                   <span className="line-through text-gray-400 text-lg">
//                     ₹{price}
//                   </span>


//                   <span className="text-green-600 text-sm">
//                     ({product.discount_percentage}% OFF)
//                   </span>

//                 </>

//               ) : (

//                 <span>
//                   ₹{price}
//                 </span>

//               )}


//             </div>



//             {/* DESCRIPTION */}
//             <p className="text-gray-600">
//               {product.description}
//             </p>



//             {/* SIZE */}
//             {product.sizes?.length > 0 && (

//               <div>

//                 <p className="uppercase text-sm mb-2">
//                   Size
//                 </p>

//                 <div className="flex gap-2">

//                   {product.sizes.map(
//                     (size: string) => (

//                       <button
//                         key={size}
//                         disabled={isOutOfStock}
//                         onClick={() =>
//                           setSelectedSize(size)
//                         }
//                         className={`

//                           border px-4 py-2 text-sm uppercase

//                           ${
//                             selectedSize === size
//                               ? "border-black"
//                               : "border-gray-400"
//                           }

//                         `}
//                       >

//                         {size}

//                       </button>

//                     )
//                   )}

//                 </div>

//               </div>

//             )}



//             {/* QUANTITY */}
//             <div>

//               <p className="uppercase text-sm mb-2">
//                 Quantity
//               </p>

//               <div className="flex items-center border w-fit">

//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() =>
//                     setQuantity(q =>
//                       Math.max(1, q - 1)
//                     )
//                   }
//                   className="p-3"
//                 >
//                   <Minus size={16}/>
//                 </button>


//                 <span className="px-6">
//                   {quantity}
//                 </span>


//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() =>
//                     setQuantity(q => q + 1)
//                   }
//                   className="p-3"
//                 >
//                   <Plus size={16}/>
//                 </button>


//               </div>

//             </div>



//             {/* ADD TO CART */}
//             <Button
//               disabled={isOutOfStock}
//               onClick={handleAddToCart}
//               className={`

//                 w-full uppercase tracking-widest py-6

//                 ${
//                   isOutOfStock
//                     ? "bg-gray-400 cursor-not-allowed"
//                     : ""
//                 }

//               `}
//             >

//               {isOutOfStock
//                 ? "Out Of Stock"
//                 : "Add To Cart"}

//             </Button>


//           </div>


//         </div>


//       </div>



//       {/* MOBILE BUTTON */}
//       {!isOutOfStock && (

//         <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">

//           <Button
//             onClick={handleAddToCart}
//             className="w-full uppercase"
//           >

//             Add To Cart — ₹{finalPrice * quantity}

//           </Button>

//         </div>

//       )}


//     </main>

//   );

// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { useProduct } from "@/hooks/useProduct";

// const ProductDetails = () => {
//   const { id } = useParams();

//   const { data: product, isLoading } =
//     useProduct(id || "");

//   const { addToCart } = useCart();

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [activeImage, setActiveImage] = useState(0);

//   if (isLoading) {
//     return (
//       <div className="pt-32 text-center">
//         Loading product...
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="pt-32 text-center">
//         Product not found
//       </div>
//     );
//   }

//   const price = Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;

//   const finalPrice =
//     discountPrice || price;

//   const isOutOfStock =
//     product.is_out_of_stock === true;

//   const handleAddToCart = () => {
//     if (isOutOfStock) return;

//     addToCart({
//       productId: product.id,
//       name: product.name,
//       price: finalPrice,
//       size: selectedSize,
//       quantity,
//       image: product.images?.[0],
//     });
//   };

//   return (
//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* BACK BUTTON */}
//         <Link
//           to="/shop"
//           className="relative inline-flex items-center gap-2 text-sm tracking-widest mb-10

//           after:absolute after:left-0 after:bottom-[-4px]
//           after:h-[1px] after:bg-current
//           after:w-0 hover:after:w-full
//           after:transition-all"
//         >
//           <ArrowLeft size={16} />
//           Back
//         </Link>

//         {/* GRID */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//           {/* IMAGE SECTION */}
//           <div className="relative">

//             {/* OUT OF STOCK BADGE */}
//             {isOutOfStock && (
//               <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-xs tracking-widest">
//                 Out Of Stock
//               </div>
//             )}

//             {/* MAIN IMAGE */}
//             <motion.div
//               key={activeImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="aspect-[3/4] bg-gray-100 overflow-hidden"
//             >
//               <img
//                 src={product.images?.[activeImage]}
//                 alt={product.name}
//                 className={`w-full h-full object-cover ${
//                   isOutOfStock ? "opacity-60" : ""
//                 }`}
//               />
//             </motion.div>

//             {/* THUMBNAILS */}
//             <div className="flex gap-3 mt-4">
//               {product.images?.map(
//                 (img: string, index: number) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveImage(index)}
//                     className={`w-20 aspect-square overflow-hidden border ${
//                       activeImage === index
//                         ? "border-black"
//                         : "border-transparent opacity-60 hover:opacity-100"
//                     }`}
//                   >
//                     <img
//                       src={img}
//                       className="w-full h-full object-cover"
//                     />
//                   </button>
//                 )
//               )}
//             </div>

//           </div>

//           {/* DETAILS SECTION */}
//           <div className="space-y-6">

//             {/* ✅ PRODUCT NAME (FIXED HERE) */}
//             <h1 className="text-3xl font-bold tracking-wide">
//               {product.name}
//             </h1>

//             {/* PRICE */}
//             <div className="flex items-center gap-3 text-2xl">
//               {discountPrice ? (
//                 <>
//                   <span className="font-semibold">
//                     ₹{discountPrice}
//                   </span>
//                   <span className="line-through text-gray-400 text-lg">
//                     ₹{price}
//                   </span>
//                   <span className="text-green-600 text-sm">
//                     ({product.discount_percentage}% OFF)
//                   </span>
//                 </>
//               ) : (
//                 <span>₹{price}</span>
//               )}
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-gray-600">
//               {product.description}
//             </p>

//             {/* SIZE */}
//             {product.sizes?.length > 0 && (
//               <div>
//                 <p className="text-sm mb-2">
//                   Size
//                 </p>

//                 <div className="flex gap-2">
//                   {product.sizes.map(
//                     (size: string) => (
//                       <button
//                         key={size}
//                         disabled={isOutOfStock}
//                         onClick={() =>
//                           setSelectedSize(size)
//                         }
//                         className={`border px-4 py-2 text-sm ${
//                           selectedSize === size
//                             ? "border-black"
//                             : "border-gray-400"
//                         }`}
//                       >
//                         {size}
//                       </button>
//                     )
//                   )}
//                 </div>
//               </div>
//             )}

//             {/* QUANTITY */}
//             <div>
//               <p className="text-sm mb-2">
//                 Quantity
//               </p>

//               <div className="flex items-center border w-fit">
//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() =>
//                     setQuantity(q =>
//                       Math.max(1, q - 1)
//                     )
//                   }
//                   className="p-3"
//                 >
//                   <Minus size={16}/>
//                 </button>

//                 <span className="px-6">
//                   {quantity}
//                 </span>

//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() =>
//                     setQuantity(q => q + 1)
//                   }
//                   className="p-3"
//                 >
//                   <Plus size={16}/>
//                 </button>
//               </div>
//             </div>

//             {/* ADD TO CART */}
//             <Button
//               disabled={isOutOfStock}
//               onClick={handleAddToCart}
//               className={`w-full tracking-widest py-6 ${
//                 isOutOfStock
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : ""
//               }`}
//             >
//               {isOutOfStock
//                 ? "Out Of Stock"
//                 : "Add To Cart"}
//             </Button>

//           </div>

//         </div>

//       </div>

//       {/* MOBILE BUTTON */}
//       {!isOutOfStock && (
//         <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">
//           <Button
//             onClick={handleAddToCart}
//             className="w-full"
//           >
//             Add To Cart — ₹{finalPrice * quantity}
//           </Button>
//         </div>
//       )}

//     </main>
//   );
// };

// export default ProductDetails;


// import { useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, ArrowLeft } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { Button } from "@/components/ui/button";
// import { useProduct } from "@/hooks/useProduct";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const { data: product, isLoading } = useProduct(id || "");
//   const { addToCart } = useCart();

//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState("M");
//   const [activeImage, setActiveImage] = useState(0);

//   if (isLoading) return <div className="pt-32 text-center">Loading product...</div>;
//   if (!product) return <div className="pt-32 text-center">Product not found</div>;

//   const price = Number(product.price);
//   const discountPrice = product.discount_price
//     ? Number(product.discount_price)
//     : null;

//   const finalPrice = discountPrice || price;
//   const isOutOfStock = product.is_out_of_stock === true;

//   const handleAddToCart = () => {
//     if (isOutOfStock) return;

//     addToCart({
//       productId: product.id,
//       name: product.name,
//       price: finalPrice,
//       size: selectedSize,
//       quantity,
//       image: product.images?.[0],
//     });
//   };

//   return (
//     <main className="pt-28 pb-20">
//       <div className="max-w-7xl mx-auto px-4">

//         <Link to="/shop" className="inline-flex items-center gap-2 mb-10">
//           <ArrowLeft size={16} />
//           Back
//         </Link>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

//           {/* IMAGE */}
//           <div className="relative">

//             {isOutOfStock && (
//               <div className="absolute top-4 left-4 z-10 bg-red-600 text-white px-3 py-1 text-xs">
//                 Out Of Stock
//               </div>
//             )}

//             <motion.div
//               key={activeImage}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="aspect-[3/4] bg-gray-100 overflow-hidden"
//             >
//               <img
//                 src={product.images?.[activeImage]}
//                 alt={product.name}
//                 className={`w-full h-full object-cover ${
//                   isOutOfStock ? "opacity-60" : ""
//                 }`}
//               />
//             </motion.div>

//             <div className="flex gap-3 mt-4">
//               {product.images?.map((img: string, index: number) => (
//                 <button
//                   key={index}
//                   onClick={() => setActiveImage(index)}
//                   className="w-20 aspect-square overflow-hidden border"
//                 >
//                   <img src={img} className="w-full h-full object-cover" />
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* DETAILS */}
//           <div className="space-y-6">

//             <h1 className="text-3xl font-bold">
//               {product.name}
//             </h1>

//             <div className="flex items-center gap-3 text-2xl">
//               {discountPrice ? (
//                 <>
//                   <span className="font-semibold">
//                     ₹{discountPrice}
//                   </span>
//                   <span className="line-through text-gray-400 text-lg">
//                     ₹{price}
//                   </span>
//                   <span className="text-green-600 text-sm">
//                     ({product.discount_percentage}% OFF)
//                   </span>
//                 </>
//               ) : (
//                 <span>₹{price}</span>
//               )}
//             </div>

//             <p className="text-gray-600">
//               {product.description}
//             </p>

//             <div>
//               <p className="text-sm mb-2">Quantity</p>
//               <div className="flex items-center border w-fit">
//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                   className="p-3"
//                 >
//                   <Minus size={16}/>
//                 </button>

//                 <span className="px-6">{quantity}</span>

//                 <button
//                   disabled={isOutOfStock}
//                   onClick={() => setQuantity(q => q + 1)}
//                   className="p-3"
//                 >
//                   <Plus size={16}/>
//                 </button>
//               </div>
//             </div>

//             <Button
//               disabled={isOutOfStock}
//               onClick={handleAddToCart}
//               className={`w-full py-6 ${
//                 isOutOfStock
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : ""
//               }`}
//             >
//               {isOutOfStock
//                 ? "Out Of Stock"
//                 : "Add To Cart"}
//             </Button>

//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProductDetails;


// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { useProducts } from "@/hooks/useProducts";
// import { useCategories } from "@/hooks/useCategories";

// const Shop = () => {
//   const [searchParams] = useSearchParams();
//   const categoryFromURL = searchParams.get("category") || "all";
//   const [active, setActive] = useState(categoryFromURL);

//   const { data: products = [], isLoading } = useProducts(active);
//   const { data: categories = [] } = useCategories();

//   useEffect(() => {
//     setActive(categoryFromURL);
//   }, [categoryFromURL]);

//   if (isLoading) {
//     return <div className="pt-32 text-center">Loading products...</div>;
//   }

//   return (
//     <main className="pt-28 pb-20">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* TITLE */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           Shop
//         </h1>

//         {/* CATEGORY FILTER */}
//         <div className="flex flex-wrap justify-center gap-8 mb-14">

//           <button
//             onClick={() => setActive("all")}
//             className={`relative text-sm transition ${
//               active === "all" ? "font-semibold" : "text-gray-500"
//             }`}
//           >
//             All
//           </button>

//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative text-sm transition ${
//                 active === c.slug ? "font-semibold" : "text-gray-500"
//               }`}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCTS GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product: any) => {

//             const price = Number(product.price);
//             const discountPrice = product.discount_price
//               ? Number(product.discount_price)
//               : null;

//             const finalPrice = discountPrice || price;
//             const isOutOfStock = product.is_out_of_stock === true;

//             return (
//               <Link
//                 key={product.id}
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >
//                 <div className="w-full">

//                   {/* IMAGE */}
//                   <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">

//                     <img
//                       src={product.images?.[0]}
//                       alt={product.name}
//                       className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 ${
//                         isOutOfStock ? "opacity-50" : ""
//                       }`}
//                     />

//                     {/* ONLY New & Best Seller badges */}
//                     <div className="absolute top-2 left-2 flex flex-col gap-2">

//                       {product.is_new_arrival && (
//                         <span className="bg-white text-black text-xs px-2 py-1">
//                           New
//                         </span>
//                       )}

//                       {product.is_best_seller && (
//                         <span className="bg-black text-white text-xs px-2 py-1">
//                           Best Seller
//                         </span>
//                       )}

//                     </div>

//                   </div>

//                   {/* INFO */}
//                   <div className="mt-3 space-y-1">

//                     <h3 className="text-sm">
//                       {product.name}
//                     </h3>

//                     <div className="flex gap-2 items-center">
//                       {discountPrice && (
//                         <span className="line-through text-gray-400 text-sm">
//                           ₹{price}
//                         </span>
//                       )}

//                       <span className="font-semibold text-sm">
//                         ₹{finalPrice}
//                       </span>
//                     </div>

//                   </div>

//                 </div>
//               </Link>
//             );
//           })}

//         </div>
//       </div>
//     </main>
//   );
// };

// export default Shop;


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

  const handleAddToCart = () => {
    if (isOutOfStock) return;

    addToCart({
      productId: product.id,
      name: product.name,
      price: finalPrice,
      quantity,
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

            {/* OUT OF STOCK BADGE */}
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
                {product.images.map(
                  (img: string, index: number) => (
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
                  )
                )}
              </div>
            )}

          </div>

          {/* ================= DETAILS SECTION ================= */}
          <div className="space-y-6">

            {/* PRODUCT NAME */}
            <h1 className="text-3xl font-bold">
              {product.name}
            </h1>

            {/* PRICE SECTION */}
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

            {/* QUANTITY */}
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

            {/* ADD TO CART BUTTON */}
            <Button
              disabled={isOutOfStock}
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

      {/* ================= MOBILE STICKY BUTTON ================= */}
      {!isOutOfStock && (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t md:hidden">
          <Button
            onClick={handleAddToCart}
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
