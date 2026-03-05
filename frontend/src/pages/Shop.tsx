// import { useState, useMemo } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { products } from '@/data/products';

// const filters = ['all', 'men', 'women', 'unisex', 'new', 'streetwear'];

// const Shop = () => {
//   const [searchParams] = useSearchParams();
//   const initialCategory = searchParams.get('category') || 'all';
//   const [active, setActive] = useState(initialCategory);

//   const filtered = useMemo(() => {
//     if (active === 'all') return products;
//     if (active === 'new') return products.filter(p => p.isNewArrival);
//     return products.filter(p => p.category === active);
//   }, [active]);

//   return (
//     <main className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center mb-12">Shop</h1>

//         {/* Filters */}
//         <div className="flex items-center justify-center gap-2 flex-wrap mb-12">
//           {filters.map(f => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               className={`px-5 py-2 text-xs font-sans tracking-widest uppercase border transition-all ${
//                 active === f
//                   ? 'bg-foreground text-background border-foreground'
//                   : 'bg-transparent text-foreground border-border hover:border-foreground'
//               }`}
//             >
//               {f === 'new' ? 'New Arrivals' : f}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
//         >
//           {filtered.map(product => (
//             <motion.div
//               key={product.id}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link to={`/product/${product.id}`} className="group block">
//                 <div className="aspect-[3/4] overflow-hidden bg-muted">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>
//                 <div className="mt-3 space-y-1">
//                   <h3 className="text-sm font-sans font-medium tracking-wide">{product.name}</h3>
//                   <p className="text-sm font-sans text-muted-foreground">${product.price}</p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </main>
//   );
// };

// export default Shop;



// import { useState, useMemo } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "@/data/products";

// const filters = ["all", "men", "women", "unisex", "new", "streetwear"];

// const Shop = () => {
//   const [searchParams] = useSearchParams();
//   const initialCategory = searchParams.get("category") || "all";
//   const [active, setActive] = useState(initialCategory);

//   const filtered = useMemo(() => {
//     if (active === "all") return products;
//     if (active === "new") return products.filter((p) => p.isNewArrival);
//     return products.filter((p) => p.category === active);
//   }, [active]);

//   return (
//     <main className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* Page Title */}
//         <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
//           Shop
//         </h1>

//         {/* ===============================
//             FILTERS (Mobile Optimized)
//         ================================= */}
//         <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap ${
//                 active === f
//                   ? "bg-foreground text-background border-foreground"
//                   : "bg-transparent text-foreground border-border hover:border-foreground"
//               }`}
//             >
//               {f === "new" ? "New Arrivals" : f}
//             </button>
//           ))}
//         </div>

//         {/* ===============================
//             PRODUCT GRID
//         ================================= */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
//         >
//           {filtered.map((product) => (
//             <motion.div
//               key={product.id}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >
//                 <div className="aspect-[3/4] overflow-hidden bg-muted">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="mt-3 space-y-1">
//                   <h3 className="text-xs md:text-sm font-medium tracking-wide">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     ${product.price}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </main>
//   );
// };

// export default Shop;


// import { useState, useMemo } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "@/data/products";
// import { useIsMobile } from "@/hooks/use-mobile";

// const filters = ["all", "men", "women", "unisex", "new", "streetwear"];

// const Shop = () => {
//   const [searchParams] = useSearchParams();
//   const initialCategory = searchParams.get("category") || "all";
//   const [active, setActive] = useState(initialCategory);

//   const isMobile = useIsMobile(); // 👈 hook included

//   const filtered = useMemo(() => {
//     if (active === "all") return products;
//     if (active === "new") return products.filter((p) => p.isNewArrival);
//     return products.filter((p) => p.category === active);
//   }, [active]);

//   return (
//     <main className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* ===============================
//             PAGE TITLE
//         ================================= */}
//         <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
//           Shop
//         </h1>

//         {/* ===============================
//             FILTERS
//         ================================= */}
//         <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap ${
//                 active === f
//                   ? "bg-foreground text-background border-foreground"
//                   : "bg-transparent text-foreground border-border hover:border-foreground"
//               }`}
//             >
//               {f === "new" ? "New Arrivals" : f}
//             </button>
//           ))}
//         </div>

//         {/* ===============================
//             PRODUCT GRID (Hook Controlled)
//         ================================= */}
//         <motion.div
//           layout
//           className={`grid gap-4 md:gap-6 ${
//             isMobile
//               ? "grid-cols-2"
//               : "grid-cols-3 lg:grid-cols-4"
//           }`}
//         >
//           {filtered.map((product) => (
//             <motion.div
//               key={product.id}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >
//                 <div className="aspect-[3/4] overflow-hidden bg-muted">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="mt-3 space-y-1">
//                   <h3 className="text-xs md:text-sm font-medium tracking-wide">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     ${product.price}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </main>
//   );
// };

// export default Shop;


// import { useState, useMemo } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "@/data/products";

// const filters = ["all", "men", "women", "unisex", "new", "streetwear"];

// const Shop = () => {
//   const [searchParams] = useSearchParams();
//   const initialCategory = searchParams.get("category") || "all";
//   const [active, setActive] = useState(initialCategory);

//   const filtered = useMemo(() => {
//     if (active === "all") return products;
//     if (active === "new") return products.filter((p) => p.isNewArrival);
//     return products.filter((p) => p.category === active);
//   }, [active]);

//   return (
//     <main className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* ===============================
//             PAGE TITLE
//         ================================= */}
//         <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
//           Shop
//         </h1>

//         {/* ===============================
//             FILTERS
//         ================================= */}
//         <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap ${
//                 active === f
//                   ? "bg-foreground text-background border-foreground"
//                   : "bg-transparent text-foreground border-border hover:border-foreground"
//               }`}
//             >
//               {f === "new" ? "New Arrivals" : f}
//             </button>
//           ))}
//         </div>

//         {/* ===============================
//             PRODUCT GRID
//             📱 Mobile: 2
//             💻 Tablet: 3
//             🖥 Desktop: 4
//         ================================= */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
//         >
//           {filtered.map((product) => (
//             <motion.div
//               key={product.id}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >
//                 <div className="aspect-[3/4] overflow-hidden bg-muted">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="mt-3 space-y-1">
//                   <h3 className="text-xs md:text-sm font-medium tracking-wide">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     ${product.price}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </main>
//   );
// };

// export default Shop;


// import { useState, useMemo } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "@/data/products";

// const filters = ["all", "men", "women", "unisex", "new", "streetwear"];

// const Shop = () => {
//   const [searchParams] = useSearchParams();
//   const initialCategory = searchParams.get("category") || "all";
//   const [active, setActive] = useState(initialCategory);

//   const filtered = useMemo(() => {
//     if (active === "all") return products;
//     if (active === "new") return products.filter((p) => p.isNewArrival);
//     return products.filter((p) => p.category === active);
//   }, [active]);

//   return (
//     <main className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* PAGE TITLE */}
//         <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
//           Shop
//         </h1>

//         {/* FILTERS */}
//         <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">
//           {filters.map((f) => (
//             <button
//               key={f}
//               onClick={() => setActive(f)}
//               className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap ${
//                 active === f
//                   ? "bg-foreground text-background border-foreground"
//                   : "bg-transparent text-foreground border-border hover:border-foreground"
//               }`}
//             >
//               {f === "new" ? "New Arrivals" : f}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCT GRID */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
//         >
//           {filtered.map((product) => (
//             <motion.div
//               key={product.id}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >
//               <Link to={`/product/${product.id}`} className="group block">
//                 <div className="aspect-[3/4] overflow-hidden bg-muted">
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />
//                 </div>

//                 <div className="mt-3 space-y-1">
//                   <h3 className="text-xs md:text-sm font-medium tracking-wide">
//                     {product.name}
//                   </h3>
//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     ${product.price}
//                   </p>
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//       </div>
//     </main>
//   );
// };

// export default Shop;


// import { useState, useMemo, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "@/data/products";

// const filters = ["all", "men", "women", "unisex", "new", "streetwear"];

// const Shop = () => {

//   const [searchParams] = useSearchParams();
//   const categoryFromURL = searchParams.get("category") || "all";

//   const [active, setActive] = useState(categoryFromURL);

//   // Sync when URL changes
//   useEffect(() => {
//     setActive(categoryFromURL);
//   }, [categoryFromURL]);

//   const filtered = useMemo(() => {

//     if (active === "all") return products;

//     if (active === "new") {
//       return products.filter((p) => p.isNewArrival);
//     }

//     return products.filter(
//       (p) => p.category.toLowerCase() === active.toLowerCase()
//     );

//   }, [active]);


//   return (

//     <main className="pt-24 pb-16">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* PAGE TITLE */}
//         <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
//           Shop
//         </h1>

//         {/* FILTERS */}
//         <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">

//           {filters.map((f) => (

//             <button
//               key={f}
//               onClick={() => setActive(f)}

//               className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap ${
//                 active === f
//                   ? "bg-foreground text-background border-foreground"
//                   : "bg-transparent text-foreground border-border hover:border-foreground"
//               }`}
//             >
//               {f === "new" ? "New Arrivals" : f}

//             </button>

//           ))}

//         </div>


//         {/* PRODUCT GRID */}
//         <motion.div
//           layout
//           className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
//         >

//           {filtered.map((product) => (

//             <motion.div
//               key={product.id}
//               layout
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3 }}
//             >

//               <Link to={`/product/${product.id}`} className="group block">

//                 <div className="aspect-[3/4] overflow-hidden bg-muted">

//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                     loading="lazy"
//                   />

//                 </div>

//                 <div className="mt-3 space-y-1">

//                   <h3 className="text-xs md:text-sm font-medium tracking-wide">
//                     {product.name}
//                   </h3>

//                   <p className="text-xs md:text-sm text-muted-foreground">
//                     ${product.price}
//                   </p>

//                 </div>

//               </Link>

//             </motion.div>

//           ))}

//         </motion.div>

//       </div>

//     </main>

//   );

// };

// export default Shop;


// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { useProducts } from "@/hooks/useProducts";
// import { useCategories } from "@/hooks/useCategories";


// const Shop = () => {

//   const [searchParams] = useSearchParams();

//   const categoryFromURL =
//     searchParams.get("category") || "all";

//   const [active, setActive] =
//     useState(categoryFromURL);


//   const { data: products = [], isLoading } =
//     useProducts(active);


//   const { data: categories = [] } =
//     useCategories();


//   useEffect(() => {

//     setActive(categoryFromURL);

//   }, [categoryFromURL]);


//   if (isLoading)
//     return <div>Loading...</div>;


//   return (

//     <main className="pt-24">

//       <div className="max-w-7xl mx-auto px-4">

//         <h1 className="text-4xl text-center mb-10">
//           Shop
//         </h1>


//         <div className="flex gap-4 justify-center mb-8">

//           <button onClick={() => setActive("all")}>
//             All
//           </button>


//           {categories.map((c: any) => (

//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//             >
//               {c.name}
//             </button>

//           ))}

//         </div>


//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

//           {products.map((product: any) => (

//             <Link
//               key={product.id}
//               to={`/product/${product.id}`}
//             >

//               <img
//                 src={product.images[0]}
//               />

//               <h3>{product.name}</h3>

//               <p>${product.price}</p>

//             </Link>

//           ))}

//         </div>

//       </div>

//     </main>

//   );

// };

// export default Shop;


// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { useProducts } from "@/hooks/useProducts";
// import { useCategories } from "@/hooks/useCategories";

// const Shop = () => {

//   const [searchParams] = useSearchParams();

//   const categoryFromURL =
//     searchParams.get("category") || "all";

//   const [active, setActive] =
//     useState(categoryFromURL);


//   const {
//     data: products = [],
//     isLoading
//   } = useProducts(active);


//   const {
//     data: categories = []
//   } = useCategories();


//   useEffect(() => {

//     setActive(categoryFromURL);

//   }, [categoryFromURL]);


//   if (isLoading)
//     return (
//       <div className="pt-32 text-center">
//         Loading products...
//       </div>
//     );


//   return (

//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">


//         {/* TITLE */}

//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-widest">

//           Shop

//         </h1>


//         {/* CATEGORY FILTER */}

//         <div className="flex flex-wrap justify-center gap-8 mb-14">


//           {/* ALL BUTTON */}

//           <button

//             onClick={() => setActive("all")}

//             className={`relative uppercase text-sm tracking-widest transition

//               after:absolute after:left-0 after:bottom-[-6px]

//               after:h-[1px] after:bg-white

//               after:transition-all

//               ${active === "all"
//                 ? "after:w-full"
//                 : "after:w-0 hover:after:w-full"
//               }

//             `}

//           >

//             All

//           </button>


//           {/* CATEGORY BUTTONS */}

//           {categories.map((c: any) => (

//             <button

//               key={c.slug}

//               onClick={() => setActive(c.slug)}

//               className={`relative uppercase text-sm tracking-widest transition

//                 after:absolute after:left-0 after:bottom-[-6px]

//                 after:h-[1px] after:bg-white

//                 after:transition-all

//                 ${active === c.slug
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//                 }

//               `}

//             >

//               {c.name}

//             </button>

//           ))}

//         </div>


//         {/* PRODUCTS GRID */}

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


//           {products.map((product: any) => {

//             const price = Number(product.price);

//             const discountPrice =
//               product.discount_price
//                 ? Number(product.discount_price)
//                 : null;


//             return (

//               <Link

//                 key={product.id}

//                 to={`/product/${product.id}`}

//                 className="group block"

//               >


//                 {/* CARD */}

//                 <div className="w-full">


//                   {/* IMAGE CONTAINER FIXED SIZE */}

//                   <div className="aspect-[3/4] overflow-hidden bg-gray-100">

//                     <img

//                       src={product.images?.[0]}

//                       className="w-full h-full object-cover

//                       group-hover:scale-105

//                       transition duration-500"

//                     />

//                   </div>


//                   {/* PRODUCT INFO */}

//                   <div className="mt-3 space-y-1">


//                     <h3 className="text-sm uppercase tracking-wide">

//                       {product.name}

//                     </h3>


//                     {/* PRICE */}

//                     <div className="flex gap-2 items-center">


//                       {discountPrice ? (

//                         <>

//                           <span className="font-semibold">

//                             ₹{discountPrice}

//                           </span>

//                           <span className="line-through text-gray-400 text-sm">

//                             ₹{price}

//                           </span>

//                         </>

//                       ) : (

//                         <span>

//                           ₹{price}

//                         </span>

//                       )}

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


// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { useProducts } from "@/hooks/useProducts";
// import { useCategories } from "@/hooks/useCategories";

// const Shop = () => {

//   const [searchParams] = useSearchParams();

//   const categoryFromURL =
//     searchParams.get("category") || "all";

//   const [active, setActive] =
//     useState(categoryFromURL);


//   const {
//     data: products = [],
//     isLoading
//   } = useProducts(active);


//   const {
//     data: categories = []
//   } = useCategories();


//   useEffect(() => {

//     setActive(categoryFromURL);

//   }, [categoryFromURL]);


//   if (isLoading) {

//     return (

//       <div className="pt-32 text-center">
//         Loading products...
//       </div>

//     );

//   }


//   return (

//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">


//         {/* TITLE */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-widest">
//           Shop
//         </h1>


//         {/* CATEGORY FILTER */}
//         <div className="flex flex-wrap justify-center gap-8 mb-14">


//           {/* ALL */}
//           <button
//             onClick={() => setActive("all")}
//             className={`relative uppercase text-sm tracking-widest transition

//               after:absolute after:left-0 after:bottom-[-6px]
//               after:h-[1px] after:bg-current
//               after:transition-all

//               ${
//                 active === "all"
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//               }

//             `}
//           >
//             All
//           </button>


//           {/* CATEGORY BUTTONS */}
//           {categories.map((c: any) => (

//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative uppercase text-sm tracking-widest transition

//                 after:absolute after:left-0 after:bottom-[-6px]
//                 after:h-[1px] after:bg-current
//                 after:transition-all

//                 ${
//                   active === c.slug
//                     ? "after:w-full"
//                     : "after:w-0 hover:after:w-full"
//                 }

//               `}
//             >

//               {c.name}

//             </button>

//           ))}

//         </div>


//         {/* PRODUCTS GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">


//           {products.map((product: any) => {

//             const price = Number(product.price);

//             const discountPrice =
//               product.discount_price
//                 ? Number(product.discount_price)
//                 : null;

//             const finalPrice =
//               discountPrice || price;

//             const isOutOfStock =
//               product.is_out_of_stock === true;


//             return (

//               <Link
//                 key={product.id}
//                 to={
//                   isOutOfStock
//                     ? "#"
//                     : `/product/${product.id}`
//                 }
//                 className="group block"
//               >


//                 {/* CARD */}
//                 <div className="w-full">


//                   {/* IMAGE */}
//                   <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">


//                     <img
//                       src={product.images?.[0]}
//                       alt={product.name}
//                       className={`

//                         w-full h-full object-cover
//                         transition duration-500
//                         group-hover:scale-105

//                         ${
//                           isOutOfStock
//                             ? "opacity-50"
//                             : ""
//                         }

//                       `}
//                     />


//                     {/* BADGES */}
//                     <div className="absolute top-2 left-2 flex flex-col gap-2">


//                       {product.is_new_arrival && (

//                         <span className="bg-white text-black text-xs px-2 py-1">
//                           NEW
//                         </span>

//                       )}


//                       {product.is_best_seller && (

//                         <span className="bg-black text-white text-xs px-2 py-1">
//                           BEST SELLER
//                         </span>

//                       )}


//                       {isOutOfStock && (

//                         <span className="bg-red-600 text-white text-xs px-2 py-1">
//                           OUT OF STOCK
//                         </span>

//                       )}


//                     </div>


//                   </div>


//                   {/* INFO */}
//                   <div className="mt-3 space-y-1">


//                     <h3 className="text-sm uppercase tracking-wide">

//                       {product.name}

//                     </h3>


//                     {/* PRICE */}
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
//     return (
//       <div className="pt-32 text-center">
//         Loading products...
//       </div>
//     );
//   }

//   return (
//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* ================= TITLE ================= */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 uppercase tracking-widest">
//           Shop
//         </h1>

//         {/* ================= CATEGORY FILTER ================= */}
//         <div className="flex flex-wrap justify-center gap-8 mb-14">

//           {/* ALL BUTTON */}
//           <button
//             onClick={() => setActive("all")}
//             className={`relative uppercase text-sm tracking-widest transition
//               after:absolute after:left-0 after:bottom-[-6px]
//               after:h-[1px] after:bg-current after:transition-all
//               ${active === "all"
//                 ? "after:w-full"
//                 : "after:w-0 hover:after:w-full"
//               }
//             `}
//           >
//             All
//           </button>

//           {/* CATEGORY BUTTONS */}
//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative uppercase text-sm tracking-widest transition
//                 after:absolute after:left-0 after:bottom-[-6px]
//                 after:h-[1px] after:bg-current after:transition-all
//                 ${active === c.slug
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//                 }
//               `}
//             >
//               {c.name}
//             </button>
//           ))}

//         </div>

//         {/* ================= PRODUCTS GRID ================= */}
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

//                 {/* CARD */}
//                 <div className="flex flex-col h-full">

//                   {/* IMAGE SECTION */}
//                   <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">

//                     <img
//                       src={product.images?.[0]}
//                       alt={product.name}
//                       className={`w-full h-full object-cover transition duration-500 group-hover:scale-105 ${
//                         isOutOfStock ? "opacity-50" : ""
//                       }`}
//                     />

//                     {/* BADGES */}
//                     <div className="absolute top-2 left-2 flex flex-col gap-2">

//                       {product.is_new_arrival && (
//                         <span className="bg-white text-black text-xs px-2 py-1 uppercase">
//                           NEW
//                         </span>
//                       )}

//                       {product.is_best_seller && (
//                         <span className="bg-black text-white text-xs px-2 py-1 uppercase">
//                           BEST SELLER
//                         </span>
//                       )}

//                       {isOutOfStock && (
//                         <span className="bg-red-600 text-white text-xs px-2 py-1 uppercase">
//                           OUT OF STOCK
//                         </span>
//                       )}

//                     </div>

//                   </div>

//                   {/* INFO SECTION */}
//                   <div className="mt-3 flex flex-col flex-grow">

//                     <h3 className="text-sm uppercase tracking-wide min-h-[40px]">
//                       {product.name}
//                     </h3>

//                     <div className="flex gap-2 items-center mt-auto">

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


// import { useState, useEffect } from "react";
// import { Link, useSearchParams } from "react-router-dom";
// import { useProducts } from "@/hooks/useProducts";
// import { useCategories } from "@/hooks/useCategories";

// const Shop = () => {

//   const [searchParams] = useSearchParams();

//   const categoryFromURL =
//     searchParams.get("category") || "all";

//   const [active, setActive] =
//     useState(categoryFromURL);

//   const {
//     data: products = [],
//     isLoading
//   } = useProducts(active);

//   const {
//     data: categories = []
//   } = useCategories();

//   useEffect(() => {
//     setActive(categoryFromURL);
//   }, [categoryFromURL]);

//   if (isLoading) {
//     return (
//       <div className="pt-32 text-center">
//         Loading products...
//       </div>
//     );
//   }

//   return (
//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* TITLE */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest">
//           Shop
//         </h1>

//         {/* CATEGORY FILTER */}
//         <div className="flex flex-wrap justify-center gap-8 mb-14">

//           {/* ALL */}
//           <button
//             onClick={() => setActive("all")}
//             className={`relative text-sm tracking-widest transition

//               after:absolute after:left-0 after:bottom-[-6px]
//               after:h-[1px] after:bg-current
//               after:transition-all

//               ${
//                 active === "all"
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//               }
//             `}
//           >
//             All
//           </button>

//           {/* CATEGORY BUTTONS */}
//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative text-sm tracking-widest transition

//                 after:absolute after:left-0 after:bottom-[-6px]
//                 after:h-[1px] after:bg-current
//                 after:transition-all

//                 ${
//                   active === c.slug
//                     ? "after:w-full"
//                     : "after:w-0 hover:after:w-full"
//                 }
//               `}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCTS GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product: any) => {

//             const price = Number(product.price);
//             const discountPrice =
//               product.discount_price
//                 ? Number(product.discount_price)
//                 : null;

//             const finalPrice =
//               discountPrice || price;

//             const isOutOfStock =
//               product.is_out_of_stock === true;

//             return (
//               <Link
//                 key={product.id}
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >

//                 {/* CARD */}
//                 <div className="w-full">

//                   {/* IMAGE */}
//                   <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">

//                     <img
//                       src={product.images?.[0]}
//                       alt={product.name}
//                       className={`

//                         w-full h-full object-cover
//                         transition duration-500
//                         group-hover:scale-105

//                         ${
//                           isOutOfStock
//                             ? "opacity-50"
//                             : ""
//                         }

//                       `}
//                     />

//                     {/* BADGES */}
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

//                       {isOutOfStock && (
//                         <span className="bg-red-600 text-white text-xs px-2 py-1">
//                           Out of Stock
//                         </span>
//                       )}

//                     </div>

//                   </div>

//                   {/* INFO */}
//                   <div className="mt-3 space-y-1">

//                     {/* PRODUCT NAME (exact DB text) */}
//                     <h3 className="text-sm tracking-wide">
//                       {product.name}
//                     </h3>

//                     {/* PRICE */}
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
//     return (
//       <div className="pt-32 text-center">
//         Loading products...
//       </div>
//     );
//   }

//   return (
//     <main className="pt-28 pb-20">

//       <div className="max-w-7xl mx-auto px-4">

//         {/* TITLE */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-widest">
//           Shop
//         </h1>

//         {/* CATEGORY FILTER */}
//         <div className="flex flex-wrap justify-center gap-8 mb-14">

//           <button
//             onClick={() => setActive("all")}
//             className={`relative text-sm tracking-widest transition
//               after:absolute after:left-0 after:bottom-[-6px]
//               after:h-[1px] after:bg-current after:transition-all
//               ${
//                 active === "all"
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//               }
//             `}
//           >
//             All
//           </button>

//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative text-sm tracking-widest transition
//                 after:absolute after:left-0 after:bottom-[-6px]
//                 after:h-[1px] after:bg-current after:transition-all
//                 ${
//                   active === c.slug
//                     ? "after:w-full"
//                     : "after:w-0 hover:after:w-full"
//                 }
//               `}
//             >
//               {c.name}
//             </button>
//           ))}
//         </div>

//         {/* PRODUCTS GRID */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {products.map((product: any) => {

//             const price = Number(product.price);
//             const discountPrice =
//               product.discount_price
//                 ? Number(product.discount_price)
//                 : null;

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
//                         isOutOfStock ? "opacity-60" : ""
//                       }`}
//                     />

//                     {/* BADGES */}
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

//                       {isOutOfStock && (
//                         <span className="bg-red-600 text-white text-xs px-2 py-1">
//                           Out of Stock
//                         </span>
//                       )}

//                     </div>

//                   </div>

//                   {/* INFO */}
//                   <div className="mt-3 space-y-1">

//                     {/* EXACT DB TEXT */}
//                     <h3 className="text-sm tracking-wide">
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
//               active === "all"
//                 ? "font-semibold"
//                 : "text-gray-500"
//             }`}
//           >
//             All
//           </button>

//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative text-sm transition ${
//                 active === c.slug
//                   ? "font-semibold"
//                   : "text-gray-500"
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

//                     {/* BADGES */}
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

//                       {isOutOfStock && (
//                         <span className="bg-red-600 text-white text-xs px-2 py-1">
//                           Out of Stock
//                         </span>
//                       )}

//                     </div>

//                   </div>

//                   {/* INFO */}
//                   <div className="mt-3 space-y-1">

//                     {/* Product name EXACT as DB */}
//                     <h3 className="text-sm">
//                       {product.name}
//                     </h3>

//                     {/* PRICE */}
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
//     return (
//       <div className="pt-32 text-center">
//         Loading products...
//       </div>
//     );
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
//             className={`text-sm transition ${
//               active === "all"
//                 ? "font-semibold"
//                 : "text-gray-500"
//             }`}
//           >
//             All
//           </button>

//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`text-sm transition ${
//                 active === c.slug
//                   ? "font-semibold"
//                   : "text-gray-500"
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

//             return (
//               <Link
//                 key={product.id}
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >
//                 <div className="w-full">

//                   {/* IMAGE */}
//                   <div className="aspect-[3/4] overflow-hidden bg-gray-100">

//                     <img
//                       src={product.images?.[0]}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
//                     />

//                   </div>

//                   {/* INFO */}
//                   <div className="mt-3 space-y-1">

//                     {/* Product name EXACT as DB */}
//                     <h3 className="text-sm">
//                       {product.name}
//                     </h3>

//                     {/* PRICE */}
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
//     return (
//       <div className="pt-32 text-center">
//         Loading products...
//       </div>
//     );
//   }

//   return (
//     <main className="pt-28 pb-20 bg-black text-white">
//       <div className="max-w-7xl mx-auto px-4">

//         {/* ================= TITLE ================= */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
//           Shop
//         </h1>

//         {/* ================= CATEGORY FILTER ================= */}
//         <div className="flex flex-wrap justify-center gap-10 mb-16">

//           {/* ALL BUTTON */}
//           <button
//             onClick={() => setActive("all")}
//             className={`relative text-sm tracking-widest transition duration-300
//               ${
//                 active === "all"
//                   ? "font-semibold text-white"
//                   : "text-gray-400 hover:text-white"
//               }

//               after:absolute after:left-0 after:-bottom-2
//               after:h-[2px] after:bg-white
//               after:transition-all after:duration-300
//               ${
//                 active === "all"
//                   ? "after:w-full"
//                   : "after:w-0 hover:after:w-full"
//               }
//             `}
//           >
//             All
//           </button>

//           {/* CATEGORY BUTTONS */}
//           {categories.map((c: any) => (
//             <button
//               key={c.slug}
//               onClick={() => setActive(c.slug)}
//               className={`relative text-sm tracking-widest transition duration-300
//                 ${
//                   active === c.slug
//                     ? "font-semibold text-white"
//                     : "text-gray-400 hover:text-white"
//                 }

//                 after:absolute after:left-0 after:-bottom-2
//                 after:h-[2px] after:bg-white
//                 after:transition-all after:duration-300
//                 ${
//                   active === c.slug
//                     ? "after:w-full"
//                     : "after:w-0 hover:after:w-full"
//                 }
//               `}
//             >
//               {c.name}
//             </button>
//           ))}

//         </div>

//         {/* ================= PRODUCTS GRID ================= */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

//           {products.map((product: any) => {
//             const price = Number(product.price);
//             const discountPrice = product.discount_price
//               ? Number(product.discount_price)
//               : null;

//             const finalPrice = discountPrice || price;

//             return (
//               <Link
//                 key={product.id}
//                 to={`/product/${product.id}`}
//                 className="group block"
//               >
//                 <div className="w-full">

//                   {/* IMAGE */}
//                   <div className="aspect-[3/4] overflow-hidden bg-gray-800">

//                     <img
//                       src={product.images?.[0]}
//                       alt={product.name}
//                       className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
//                     />

//                   </div>

//                   {/* INFO */}
//                   <div className="mt-4 space-y-1">

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


import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";

const Shop = () => {
  const [searchParams] = useSearchParams();
  const categoryFromURL = searchParams.get("category") || "all";
  const [active, setActive] = useState(categoryFromURL);

  const { data: products = [], isLoading } = useProducts(active);
  const { data: categories = [] } = useCategories();

  useEffect(() => {
    setActive(categoryFromURL);
  }, [categoryFromURL]);

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

        {/* ================= PAGE TITLE ================= */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-center mb-10 md:mb-12">
          Shop
        </h1>

        {/* ================= FILTER BUTTONS ================= */}
        <div className="flex md:justify-center gap-2 overflow-x-auto md:flex-wrap mb-10 md:mb-12 scrollbar-hide">

          {/* ALL BUTTON */}
          <button
            onClick={() => setActive("all")}
            className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap
              ${
                active === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-foreground border-border hover:border-foreground"
              }
            `}
          >
            All
          </button>

          {/* CATEGORY BUTTONS */}
          {categories.map((c: any) => (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`px-4 md:px-5 py-2 text-[10px] md:text-xs tracking-widest uppercase border transition-all whitespace-nowrap
                ${
                  active === c.slug
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-foreground border-border hover:border-foreground"
                }
              `}
            >
              {c.name}
            </button>
          ))}

        </div>

        {/* ================= PRODUCT GRID ================= */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
        >
          {products.map((product: any) => {
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

                  {/* IMAGE */}
                  <div className="aspect-[3/4] overflow-hidden bg-muted">
                    <img
                      src={product.images?.[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  {/* INFO */}
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
