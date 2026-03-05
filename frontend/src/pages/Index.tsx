// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from 'lucide-react';
// import { getNewArrivals, getBestsellers } from '@/data/products';
// import { Button } from '@/components/ui/button';

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: '-50px' },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: 'Men', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', slug: 'men' },
//   { name: 'Women', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80', slug: 'women' },
//   { name: 'Unisex', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80', slug: 'unisex' },
//   { name: 'Streetwear', image: 'https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80', slug: 'streetwear' },
// ];

// const promises = [
//   { icon: Gem, title: 'Premium Craftsmanship', desc: 'Every piece crafted with exceptional materials' },
//   { icon: Shirt, title: 'Modern Streetwear Identity', desc: 'Where contemporary meets timeless' },
//   { icon: Clock, title: '24/7 Digital Availability', desc: 'Shop anytime, anywhere' },
//   { icon: ShoppingBag, title: 'Seamless Shopping', desc: 'Effortless from browse to doorstep' },
// ];

// const ProductCard = ({ product }: { product: ReturnType<typeof getNewArrivals>[0] }) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-sans font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm font-sans text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   return (
//     <main>
//       {/* Hero */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="relative h-screen flex items-center justify-center overflow-hidden"
//       >
//         <img
//           src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80"
//           alt="RUTNUG Hero"
//           className="absolute inset-0 w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="relative z-10 text-center text-white px-4">
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-4"
//           >
//             RUTNUG
//           </motion.h1>
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-lg md:text-xl font-sans font-light tracking-[0.2em] mb-8"
//           >
//             Luxury Without Limits
//           </motion.p>
//           <motion.div
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.9, duration: 0.8 }}
//           >
//             <Link to="/shop">
//               <Button className="bg-white text-black hover:bg-white/90 font-sans text-sm tracking-widest uppercase px-10 py-6 rounded-none">
//                 Shop Now <ArrowRight size={16} />
//               </Button>
//             </Link>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* Featured Categories */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center tracking-wide mb-12">Collections</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map(cat => (
//             <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="group relative aspect-[3/4] overflow-hidden">
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
//                 loading="lazy"
//               />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.section>

//       {/* New Arrivals */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <div className="flex items-center justify-between mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold tracking-wide">New Arrivals</h2>
//           <Link to="/shop?category=new" className="text-sm font-sans tracking-widest uppercase hover:opacity-70 transition-opacity flex items-center gap-2">
//             View All <ArrowRight size={14} />
//           </Link>
//         </div>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map(p => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* Bestsellers */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-12">Bestsellers</h2>
//         <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 md:pb-0">
//           {bestsellers.map(p => (
//             <div key={p.id} className="min-w-[70vw] md:min-w-0">
//               <ProductCard product={p} />
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* Brand Story */}
//       <motion.section {...fadeIn} className="bg-secondary py-24 md:py-32">
//         <div className="max-w-3xl mx-auto px-4 text-center space-y-8">
//           <h2 className="text-4xl md:text-6xl font-bold tracking-wide leading-tight">
//             The Art of Modern Fashion
//           </h2>
//           <p className="text-base md:text-lg font-sans leading-relaxed text-muted-foreground max-w-2xl mx-auto">
//             RUTNUG is born from the belief that fashion should be both a statement and an experience. We blend contemporary streetwear with timeless elegance, crafting apparel that reflects confidence, individuality, and uncompromising quality.
//           </p>
//         </div>
//       </motion.section>

//       {/* Luxury Promise */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {promises.map(p => (
//             <div key={p.title} className="text-center space-y-4 py-8">
//               <p.icon size={32} className="mx-auto" strokeWidth={1} />
//               <h3 className="text-lg font-bold tracking-wide">{p.title}</h3>
//               <p className="text-sm font-sans text-muted-foreground">{p.desc}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* CTA */}
//       <motion.section {...fadeIn} className="bg-secondary py-24">
//         <div className="text-center space-y-8 px-4">
//           <h2 className="text-3xl md:text-5xl font-bold tracking-wide">Explore The Collection</h2>
//           <Link to="/shop">
//             <Button className="font-sans text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>
//       </motion.section>
//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";

// /* ===============================
//    Hero Images (Luxury B&W)
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-50px" },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", slug: "men" },
//   { name: "Women", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", slug: "women" },
//   { name: "Unisex", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", slug: "unisex" },
//   { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80", slug: "streetwear" },
// ];

// const promises = [
//   { icon: Gem, title: "Premium Craftsmanship", desc: "Every piece crafted with exceptional materials" },
//   { icon: Shirt, title: "Modern Streetwear Identity", desc: "Where contemporary meets timeless" },
//   { icon: Clock, title: "24/7 Digital Availability", desc: "Shop anytime, anywhere" },
//   { icon: ShoppingBag, title: "Seamless Shopping", desc: "Effortless from browse to doorstep" },
// ];

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ===============================
//           HERO CAROUSEL
//       ================================= */}
//       <section className="relative h-screen overflow-hidden flex items-center justify-center">

//         {heroImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         ))}

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Content */}
//         <div className="relative z-10 text-center text-white px-4">
//           <motion.h1
//             key={currentSlide}
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6"
//           >
//             RUTNUG
//           </motion.h1>

//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.4, duration: 0.8 }}
//             className="text-lg md:text-xl font-light tracking-[0.2em] mb-10"
//           >
//             Luxury Without Limits
//           </motion.p>

//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>

//         {/* Dots */}
//         <div className="absolute bottom-10 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index ? "bg-white scale-125" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===============================
//           FEATURED CATEGORIES
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Collections</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map(cat => (
//             <Link key={cat.slug} to={`/shop?category=${cat.slug}`} className="group relative aspect-[3/4] overflow-hidden">
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
//               />
//               <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           NEW ARRIVALS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <div className="flex justify-between items-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">New Arrivals</h2>
//           <Link to="/shop?category=new" className="text-sm tracking-widest uppercase flex items-center gap-2">
//             View All <ArrowRight size={14} />
//           </Link>
//         </div>

//         {/* 2 products per row on mobile */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BESTSELLERS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">Bestsellers</h2>

//         <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 md:pb-0">
//           {bestsellers.map((p: any) => (
//             <div key={p.id} className="min-w-[70vw] md:min-w-0">
//               <ProductCard product={p} />
//             </div>
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useIsMobile } from "@/hooks/use-mobile";

// /* ===============================
//    Hero Images
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-50px" },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", slug: "men" },
//   { name: "Women", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", slug: "women" },
//   { name: "Unisex", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", slug: "unisex" },
//   { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80", slug: "streetwear" },
// ];

// const promises = [
//   { icon: Gem, title: "Premium Craftsmanship", desc: "Every piece crafted with exceptional materials" },
//   { icon: Shirt, title: "Modern Streetwear Identity", desc: "Where contemporary meets timeless" },
//   { icon: Clock, title: "24/7 Digital Availability", desc: "Shop anytime, anywhere" },
//   { icon: ShoppingBag, title: "Seamless Shopping", desc: "Effortless from browse to doorstep" },
// ];

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const isMobile = useIsMobile(); // 👈 using your hook

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* HERO */}
//       <section className="relative h-screen overflow-hidden flex items-center justify-center">
//         {heroImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         ))}

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6">
//             RUTNUG
//           </h1>
//           <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-10">
//             Luxury Without Limits
//           </p>
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* NEW ARRIVALS */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div
//           className={`grid gap-4 md:gap-6 ${
//             isMobile ? "grid-cols-2" : "grid-cols-3 lg:grid-cols-4"
//           }`}
//         >
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useIsMobile } from "@/hooks/use-mobile";

// /* ===============================
//    Hero Images
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-50px" },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", slug: "men" },
//   { name: "Women", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", slug: "women" },
//   { name: "Unisex", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", slug: "unisex" },
//   { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80", slug: "streetwear" },
// ];

// const promises = [
//   { icon: Gem, title: "Premium Craftsmanship", desc: "Every piece crafted with exceptional materials" },
//   { icon: Shirt, title: "Modern Streetwear Identity", desc: "Where contemporary meets timeless" },
//   { icon: Clock, title: "24/7 Digital Availability", desc: "Shop anytime, anywhere" },
//   { icon: ShoppingBag, title: "Seamless Shopping", desc: "Effortless from browse to doorstep" },
// ];

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const isMobile = useIsMobile();

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ===============================
//           HERO SECTION
//       ================================= */}
//       <section className="relative h-screen overflow-hidden flex items-center justify-center">
//         {heroImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         ))}

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6">
//             RUTNUG
//           </h1>
//           <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-10">
//             Luxury Without Limits
//           </p>
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>

//         <div className="absolute bottom-10 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index ? "bg-white scale-125" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===============================
//           FEATURED CATEGORIES
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Collections
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map(cat => (
//             <Link
//               key={cat.slug}
//               to={`/shop?category=${cat.slug}`}
//               className="group relative aspect-[3/4] overflow-hidden"
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
//               />
//               <div className="absolute inset-0 bg-black/40" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           NEW ARRIVALS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div
//           className={`grid gap-4 md:gap-6 ${
//             isMobile ? "grid-cols-2" : "grid-cols-3 lg:grid-cols-4"
//           }`}
//         >
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BESTSELLERS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div
//           className={`grid gap-4 md:gap-6 ${
//             isMobile ? "grid-cols-2" : "grid-cols-3 lg:grid-cols-4"
//           }`}
//         >
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BRAND STORY
//       ================================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-24 text-center px-4">
//         <h2 className="text-4xl md:text-6xl font-bold mb-6">
//           The Art of Modern Fashion
//         </h2>
//         <p className="max-w-3xl mx-auto text-muted-foreground">
//           RUTNUG blends contemporary streetwear with timeless elegance,
//           delivering apparel that reflects confidence, individuality,
//           and uncompromising quality.
//         </p>
//       </motion.section>

//       {/* ===============================
//           LUXURY PROMISE
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {promises.map(p => (
//             <div key={p.title} className="space-y-4">
//               <p.icon size={32} className="mx-auto" strokeWidth={1} />
//               <h3 className="font-bold">{p.title}</h3>
//               <p className="text-sm text-muted-foreground">{p.desc}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           CTA SECTION
//       ================================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-24 text-center px-4">
//         <h2 className="text-3xl md:text-5xl font-bold mb-8">
//           Explore The Collection
//         </h2>
//         <Link to="/shop">
//           <Button className="text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//             Shop Now <ArrowRight size={16} />
//           </Button>
//         </Link>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";

// /* ===============================
//    Hero Images
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-50px" },
//   transition: { duration: 0.7 },
// };

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ===============================
//           HERO SECTION (Mobile Optimized)
//       ================================= */}
//       <section className="relative h-[85vh] md:h-screen overflow-hidden flex items-center justify-center">

//         {heroImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1 }}
//           />
//         ))}

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 text-center text-white px-6">
//           <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold tracking-[0.25em] mb-6">
//             RUTNUG
//           </h1>
//           <p className="text-sm sm:text-base md:text-xl font-light tracking-[0.2em] mb-8">
//             Luxury Without Limits
//           </p>

//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-xs sm:text-sm tracking-widest uppercase px-10 py-5 rounded-none">
//               Shop Now <ArrowRight size={14} />
//             </Button>
//           </Link>
//         </div>

//         {/* Dots */}
//         <div className="absolute bottom-6 md:bottom-10 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
//                 currentSlide === index ? "bg-white scale-125" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===============================
//           NEW ARRIVALS (2 per row mobile)
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-16 md:py-20">
//         <div className="flex justify-between items-center mb-10">
//           <h2 className="text-2xl md:text-4xl font-bold">
//             New Arrivals
//           </h2>
//           <Link to="/shop" className="text-xs md:text-sm tracking-widest uppercase">
//             View All
//           </Link>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BESTSELLERS (Mobile Scroll Style)
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-16 md:py-20">
//         <h2 className="text-2xl md:text-4xl font-bold mb-10">
//           Bestsellers
//         </h2>

//         {/* Mobile horizontal scroll */}
//         <div className="flex md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 md:pb-0">
//           {bestsellers.map((p: any) => (
//             <div key={p.id} className="min-w-[60vw] md:min-w-0">
//               <ProductCard product={p} />
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BRAND STORY
//       ================================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-20 md:py-28 text-center px-6">
//         <h2 className="text-3xl md:text-6xl font-bold mb-6">
//           The Art of Modern Fashion
//         </h2>
//         <p className="max-w-3xl mx-auto text-sm md:text-lg text-muted-foreground leading-relaxed">
//           RUTNUG blends contemporary streetwear with timeless elegance,
//           delivering apparel that reflects confidence, individuality,
//           and uncompromising quality.
//         </p>
//       </motion.section>

//       {/* ===============================
//           CTA SECTION
//       ================================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-20 text-center px-6">
//         <h2 className="text-2xl md:text-5xl font-bold mb-8">
//           Explore The Collection
//         </h2>
//         <Link to="/shop">
//           <Button className="text-xs md:text-sm tracking-widest uppercase px-10 py-5 rounded-none">
//             Shop Now <ArrowRight size={14} />
//           </Button>
//         </Link>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";

// /* ===============================
//    Hero Images
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true, margin: "-50px" },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", slug: "men" },
//   { name: "Women", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", slug: "women" },
//   { name: "Unisex", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", slug: "unisex" },
//   { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80", slug: "streetwear" },
// ];

// const promises = [
//   { icon: Gem, title: "Premium Craftsmanship", desc: "Every piece crafted with exceptional materials" },
//   { icon: Shirt, title: "Modern Streetwear Identity", desc: "Where contemporary meets timeless" },
//   { icon: Clock, title: "24/7 Digital Availability", desc: "Shop anytime, anywhere" },
//   { icon: ShoppingBag, title: "Seamless Shopping", desc: "Effortless from browse to doorstep" },
// ];

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ===============================
//           HERO SECTION
//       ================================= */}
//       <section className="relative h-screen overflow-hidden flex items-center justify-center">

//         {heroImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         ))}

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6">
//             RUTNUG
//           </h1>
//           <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-10">
//             Luxury Without Limits
//           </p>
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>

//         {/* Dots */}
//         <div className="absolute bottom-10 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index ? "bg-white scale-125" : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>
//       </section>

//       {/* ===============================
//           COLLECTIONS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Collections
//         </h2>

//         {/* 2 on mobile, 4 on desktop */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//           {categories.map(cat => (
//             <Link
//               key={cat.slug}
//               to={`/shop?category=${cat.slug}`}
//               className="group relative aspect-[3/4] overflow-hidden"
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
//               />
//               <div className="absolute inset-0 bg-black/40" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           NEW ARRIVALS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         {/* 2 mobile, 3 tablet, 4 desktop */}
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BESTSELLERS
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           BRAND STORY
//       ================================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-24 text-center px-4">
//         <h2 className="text-4xl md:text-6xl font-bold mb-6">
//           The Art of Modern Fashion
//         </h2>
//         <p className="max-w-3xl mx-auto text-muted-foreground">
//           RUTNUG blends contemporary streetwear with timeless elegance,
//           delivering apparel that reflects confidence, individuality,
//           and uncompising quality.
//         </p>
//       </motion.section>

//       {/* ===============================
//           LUXURY PROMISE
//       ================================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {promises.map(p => (
//             <div key={p.title} className="space-y-4">
//               <p.icon size={32} className="mx-auto" strokeWidth={1} />
//               <h3 className="font-bold">{p.title}</h3>
//               <p className="text-sm text-muted-foreground">{p.desc}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//       {/* ===============================
//           CTA SECTION
//       ================================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-24 text-center px-4">
//         <h2 className="text-3xl md:text-5xl font-bold mb-8">
//           Explore The Collection
//         </h2>
//         <Link to="/shop">
//           <Button className="text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//             Shop Now <ArrowRight size={16} />
//           </Button>
//         </Link>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";

// /* ===============================
//    HERO IMAGES
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", slug: "men" },
//   { name: "Women", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", slug: "women" },
//   { name: "Unisex", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", slug: "unisex" },
//   { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80", slug: "streetwear" },
// ];

// const promises = [
//   { icon: Gem, title: "Premium Craftsmanship", desc: "Every piece crafted with exceptional materials" },
//   { icon: Shirt, title: "Modern Streetwear Identity", desc: "Where contemporary meets timeless" },
//   { icon: Clock, title: "24/7 Digital Availability", desc: "Shop anytime, anywhere" },
//   { icon: ShoppingBag, title: "Seamless Shopping", desc: "Effortless from browse to doorstep" },
// ];

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ================= HERO ================= */}
//       <section className="relative h-screen overflow-hidden flex items-center justify-center">
//         {heroImages.map((img, index) => (
//           <motion.img
//             key={index}
//             src={img}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: index === currentSlide ? 1 : 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         ))}

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 text-center text-white px-4">
//           <h1 className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6">
//             RUTNUG
//           </h1>
//           <p className="text-lg md:text-xl font-light tracking-[0.2em] mb-10">
//             Luxury Without Limits
//           </p>
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>
//         </div>
//       </section>

//       {/* ================= COLLECTIONS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Collections
//         </h2>

//         {/* 2 mobile, 4 desktop */}
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {categories.map((cat) => (
//             <Link
//               key={cat.slug}
//               to={`/shop?category=${cat.slug}`}
//               className="group relative aspect-[3/4] overflow-hidden"
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
//               />
//               <div className="absolute inset-0 bg-black/40" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= NEW ARRIVALS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         {/* 2 mobile, 3 large tablet, 4 desktop */}
//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= BESTSELLERS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= BRAND STORY ================= */}
//       <motion.section {...fadeIn} className="bg-secondary py-24 text-center px-4">
//         <h2 className="text-4xl md:text-6xl font-bold mb-6">
//           The Art of Modern Fashion
//         </h2>
//         <p className="max-w-3xl mx-auto text-muted-foreground">
//           RUTNUG blends contemporary streetwear with timeless elegance,
//           delivering apparel that reflects confidence and individuality.
//         </p>
//       </motion.section>

//       {/* ================= LUXURY PROMISE ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
//           {promises.map((p) => (
//             <div key={p.title} className="space-y-4">
//               <p.icon size={32} className="mx-auto" strokeWidth={1} />
//               <h3 className="font-bold">{p.title}</h3>
//               <p className="text-sm text-muted-foreground">{p.desc}</p>
//             </div>
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, Gem, Shirt, Clock, ShoppingBag } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";

// /* ===============================
//    HERO IMAGES
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };

// const categories = [
//   { name: "Men", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80", slug: "men" },
//   { name: "Women", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80", slug: "women" },
//   { name: "Unisex", image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80", slug: "unisex" },
//   { name: "Streetwear", image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=800&q=80", slug: "streetwear" },
// ];

// const promises = [
//   { icon: Gem, title: "Premium Craftsmanship", desc: "Every piece crafted with exceptional materials" },
//   { icon: Shirt, title: "Modern Streetwear Identity", desc: "Where contemporary meets timeless" },
//   { icon: Clock, title: "24/7 Digital Availability", desc: "Shop anytime, anywhere" },
//   { icon: ShoppingBag, title: "Seamless Shopping", desc: "Effortless from browse to doorstep" },
// ];

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   /* ===============================
//      AUTO SLIDE
//   ================================= */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ================= HERO BANNER ================= */}
//       <section className="relative h-screen w-full overflow-hidden">

//         {/* Images */}
//         <AnimatePresence>
//           <motion.img
//             key={currentSlide}
//             src={heroImages[currentSlide]}
//             alt="RUTNUG Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         </AnimatePresence>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

//           <motion.h1
//             key={`title-${currentSlide}`}
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6"
//           >
//             RUTNUG
//           </motion.h1>

//           <motion.p
//             key={`tagline-${currentSlide}`}
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-lg md:text-xl font-light tracking-[0.2em] mb-10"
//           >
//             Luxury Without Limits
//           </motion.p>

//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>

//         </div>

//         {/* Dots Navigation */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//       </section>

//       {/* ================= COLLECTIONS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           Collections
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
//           {categories.map((cat) => (
//             <Link
//               key={cat.slug}
//               to={`/shop?category=${cat.slug}`}
//               className="group relative aspect-[3/4] overflow-hidden"
//             >
//               <img
//                 src={cat.image}
//                 alt={cat.name}
//                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
//               />
//               <div className="absolute inset-0 bg-black/40" />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <span className="text-white text-lg md:text-2xl font-bold tracking-widest uppercase">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= NEW ARRIVALS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= BESTSELLERS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import logo from "@/assets/Rutnug1.jpeg"; // ✅ CORRECT IMPORT

// /* ===============================
//    HERO IMAGES
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   /* ===============================
//      AUTO SLIDE
//   ================================= */
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ================= HERO BANNER ================= */}
//       <section className="relative h-screen w-full overflow-hidden">

//         {/* Background Slider Images */}
//         <AnimatePresence>
//           <motion.img
//             key={currentSlide}
//             src={heroImages[currentSlide]}
//             alt="Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         </AnimatePresence>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Center Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

//           {/* ✅ LOGO */}
//           <motion.img
//             src={logo}
//             alt="Rutnug Logo"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className="w-36 md:w-56 mb-8 drop-shadow-2xl"
//           />

//           {/* Brand Name
//           <motion.h1
//             initial={{ y: 40, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             className="text-5xl md:text-8xl font-bold tracking-[0.3em] mb-6"
//           >
//             RUTNUG
//           </motion.h1> */}

//           {/* Tagline */}
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-lg md:text-xl font-light tracking-[0.2em] mb-10"
//           >
//             Luxury Without Limits
//           </motion.p>

//           {/* CTA */}
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>

//         </div>

//         {/* Slider Dots */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//       </section>

//       {/* ================= NEW ARRIVALS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= BESTSELLERS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";

// import logoLight from "@/assets/Rutnuglogo.png"; // Black logo
// import logoDark from "@/assets/Rutnug1.jpeg";    // White logo

// /* ===============================
//    HERO IMAGES
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const { isDark } = useTheme(); // 🔥 Detect theme
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ================= HERO BANNER ================= */}
//       <section className="relative h-screen w-full overflow-hidden">

//         {/* Background Slider */}
//         <AnimatePresence>
//           <motion.img
//             key={currentSlide}
//             src={heroImages[currentSlide]}
//             alt="Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         </AnimatePresence>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Center Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

//           {/* 🔥 THEME BASED LOGO */}
//           <motion.img
//             key={isDark ? "dark-logo" : "light-logo"}
//             src={isDark ? logoDark : logoLight}
//             alt="Rutnug Logo"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-36 md:w-56 mb-8 drop-shadow-2xl"
//           />

//           {/* Tagline */}
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-lg md:text-xl font-light tracking-[0.2em] mb-10"
//           >
//             Luxury Without Limits
//           </motion.p>

//           {/* CTA */}
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>

//         </div>

//         {/* Slider Dots */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//       </section>

//       {/* ================= NEW ARRIVALS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>
//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= BESTSELLERS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>
//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";

// // ✅ IMPORT WITH SPACES (EXACT FILE NAMES)
// import logoLight from "@/assets/IMG_1760 copy.png";       // Black logo (Light theme)
// import logoDark from "@/assets/IMG_1760 copywhite.png";   // White logo (Dark theme)

// /* ===============================
//    HERO IMAGES
// ================================= */
// const heroImages = [
//   "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1920&q=80",
//   "https://images.unsplash.com/photo-1520975922203-b2b0d3d8f5d1?w=1920&q=80",
//   "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=80",
// ];

// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };

// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>
//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">{product.name}</h3>
//       <p className="text-sm text-muted-foreground">${product.price}</p>
//     </div>
//   </Link>
// );

// const Index = () => {
//   const { isDark } = useTheme();
//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroImages.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main>

//       {/* ================= HERO BANNER ================= */}
//       <section className="relative h-screen w-full overflow-hidden">

//         {/* Background Slider */}
//         <AnimatePresence>
//           <motion.img
//             key={currentSlide}
//             src={heroImages[currentSlide]}
//             alt="Banner"
//             className="absolute inset-0 w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2 }}
//           />
//         </AnimatePresence>

//         {/* Dark Overlay */}
//         <div className="absolute inset-0 bg-black/60" />

//         {/* Center Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">

//           {/* ✅ THEME BASED LOGO */}
//           <motion.img
//             key={isDark ? "dark-logo" : "light-logo"}
//             src={isDark ? logoDark : logoLight}
//             alt="Rutnug Logo"
//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="w-40 md:w-64 mb-8 drop-shadow-2xl"
//           />

//           {/* Tagline */}
//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3, duration: 0.8 }}
//             className="text-lg md:text-xl font-light tracking-[0.2em] mb-10"
//           >
//             Luxury Without Limits
//           </motion.p>

//           {/* CTA */}
//           <Link to="/shop">
//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">
//               Shop Now <ArrowRight size={16} />
//             </Button>
//           </Link>

//         </div>

//         {/* Slider Dots */}
//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//           {heroImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />
//           ))}
//         </div>

//       </section>

//       {/* ================= NEW ARRIVALS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>
//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//       {/* ================= BESTSELLERS ================= */}
//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">
//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>
//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}
//         </div>
//       </motion.section>

//     </main>
//   );
// };

// export default Index;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";

// // ✅ Banner imports
// import { useBanners } from "@/hooks/useBanners";
// import { getHeroImages } from "@/data/heroImages";

// // ✅ IMPORT WITH SPACES (EXACT FILE NAMES)
// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };


// const ProductCard = ({ product }: any) => (
//   <Link to={`/product/${product.id}`} className="group block">
//     <div className="aspect-[3/4] overflow-hidden bg-muted">
//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />
//     </div>

//     <div className="mt-3 space-y-1">
//       <h3 className="text-sm font-medium tracking-wide">
//         {product.name}
//       </h3>

//       <p className="text-sm text-muted-foreground">
//         ${product.price}
//       </p>
//     </div>
//   </Link>
// );


// const Index = () => {

//   const { isDark } = useTheme();

//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   // ✅ Fetch banners from backend
//   const { data: banners, isLoading } = useBanners();

//   // ✅ Convert banners to heroImages
//   const heroImages = getHeroImages(banners);

//   const [currentSlide, setCurrentSlide] = useState(0);


//   // Auto slide
//   useEffect(() => {

//     if (heroImages.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         (prev + 1) % heroImages.length
//       );

//     }, 5000);

//     return () => clearInterval(interval);

//   }, [heroImages]);


//   // Prevent crash if no banners
//   if (isLoading) {
//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading banners...
//       </div>
//     );
//   }


//   return (
//     <main>

//       {/* ================= HERO BANNER ================= */}

//       <section className="relative h-screen w-full overflow-hidden">

//         {/* Background Slider */}

//         <AnimatePresence>

//           <motion.img
//             key={currentSlide}
//             src={heroImages[currentSlide]}
//             alt="Banner"
//             className="absolute inset-0 w-full h-full object-cover"

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}

//             transition={{ duration: 1.2 }}
//           />

//         </AnimatePresence>


//         {/* Dark Overlay */}

//         <div className="absolute inset-0 bg-black/60" />


//         {/* Center Content */}

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">


//           {/* Logo */}

//           <motion.img
//             key={isDark ? "dark-logo" : "light-logo"}

//             src={isDark ? logoDark : logoLight}

//             alt="Rutnug Logo"

//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ duration: 0.6 }}

//             className="w-40 md:w-64 mb-8 drop-shadow-2xl"
//           />


//           {/* Tagline */}

//           <motion.p
//             initial={{ y: 20, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}

//             transition={{ delay: 0.3, duration: 0.8 }}

//             className="text-lg md:text-xl font-light tracking-[0.2em] mb-10"
//           >
//             Luxury Without Limits
//           </motion.p>


//           {/* CTA */}

//           <Link to="/shop">

//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>

//         </div>


//         {/* Slider dots */}

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {heroImages.map((_, index) => (

//             <button
//               key={index}

//               onClick={() => setCurrentSlide(index)}

//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />

//           ))}

//         </div>

//       </section>



//       {/* ================= NEW ARRIVALS ================= */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>


//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {newArrivals.slice(0, 4).map((p: any) => (

//             <ProductCard key={p.id} product={p} />

//           ))}

//         </div>

//       </motion.section>



//       {/* ================= BESTSELLERS ================= */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>


//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {bestsellers.map((p: any) => (

//             <ProductCard key={p.id} product={p} />

//           ))}

//         </div>

//       </motion.section>


//     </main>
//   );

// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";

// // Banner hook
// import { useBanners } from "@/hooks/useBanners";

// // Logos
// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };


// const ProductCard = ({ product }: any) => (

//   <Link to={`/product/${product.id}`} className="group block">

//     <div className="aspect-[3/4] overflow-hidden bg-muted">

//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />

//     </div>

//     <div className="mt-3 space-y-1">

//       <h3 className="text-sm font-medium tracking-wide">
//         {product.name}
//       </h3>

//       <p className="text-sm text-muted-foreground">
//         ${product.price}
//       </p>

//     </div>

//   </Link>

// );


// const Index = () => {

//   const { isDark } = useTheme();

//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   // Fetch banners from backend
//   const { data: banners, isLoading } = useBanners();

//   const [currentSlide, setCurrentSlide] = useState(0);


//   // Auto slide effect
//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         (prev + 1) % banners.length
//       );

//     }, 5000);

//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading) {

//     return (
//       <div className="h-screen flex items-center justify-center">
//         Loading banners...
//       </div>
//     );

//   }


//   return (

//     <main>

//       {/* HERO BANNER */}

//       <section className="relative h-screen w-full overflow-hidden">


//         {/* Banner Image */}

//         <AnimatePresence>

//           <motion.img
//             key={currentSlide}
//             src={banners?.[currentSlide]?.image}
//             alt="Banner"

//             className="absolute inset-0 w-full h-full object-cover"

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}

//             transition={{ duration: 1.2 }}
//           />

//         </AnimatePresence>


//         {/* Dark Overlay */}

//         <div className="absolute inset-0 bg-black/60" />


//         {/* Center Content */}

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">


//           {/* Logo */}

//           <motion.img
//             key={isDark ? "dark-logo" : "light-logo"}
//             src={isDark ? logoDark : logoLight}
//             alt="Rutnug Logo"

//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ duration: 0.6 }}

//             className="w-40 md:w-64 mb-6 drop-shadow-2xl"
//           />


//           {/* Banner Title */}

//           <motion.h1
//             key={banners?.[currentSlide]?.title}

//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ delay: 0.3 }}

//             className="text-3xl md:text-5xl font-bold mb-4"
//           >
//             {banners?.[currentSlide]?.title}
//           </motion.h1>


//           {/* Banner Subtitle */}

//           <motion.p
//             key={banners?.[currentSlide]?.subtitle}

//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ delay: 0.5 }}

//             className="text-lg md:text-xl font-light tracking-wide mb-10"
//           >
//             {banners?.[currentSlide]?.subtitle}
//           </motion.p>


//           {/* CTA Button */}

//           <Link to={banners?.[currentSlide]?.link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>


//         </div>


//         {/* Slider Dots */}

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {banners?.map((_, index) => (

//             <button
//               key={index}

//               onClick={() => setCurrentSlide(index)}

//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />

//           ))}

//         </div>


//       </section>



//       {/* NEW ARRIVALS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}

//         </div>

//       </motion.section>



//       {/* BESTSELLERS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}

//         </div>

//       </motion.section>


//     </main>

//   );

// };

// export default Index;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";

// // Banner hook
// import { useBanners } from "@/hooks/useBanners";

// // Logos
// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };


// const ProductCard = ({ product }: any) => (

//   <Link to={`/product/${product.id}`} className="group block">

//     <div className="aspect-[3/4] overflow-hidden bg-muted">

//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />

//     </div>

//     <div className="mt-3 space-y-1">

//       <h3 className="text-sm font-medium tracking-wide">
//         {product.name}
//       </h3>

//       <p className="text-sm text-muted-foreground">
//         ${product.price}
//       </p>

//     </div>

//   </Link>

// );


// const Index = () => {

//   const { isDark } = useTheme();

//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   const { data: banners, isLoading } = useBanners();

//   const [currentSlide, setCurrentSlide] = useState(0);


//   // Auto slide
//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         (prev + 1) % banners.length
//       );

//     }, 5000);

//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading) {

//     return (
//       <div className="h-screen flex items-center justify-center text-white bg-black">
//         Loading banners...
//       </div>
//     );

//   }


//   return (

//     <main>

//       {/* HERO SECTION */}

//       <section className="relative h-screen w-full overflow-hidden">


//         {/* Banner Image */}

//         <AnimatePresence>

//           <motion.img
//             key={currentSlide}
//             src={banners?.[currentSlide]?.image}
//             alt="Banner"

//             className="absolute inset-0 w-full h-full object-cover"

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}

//             transition={{ duration: 1.2 }}
//           />

//         </AnimatePresence>


//         {/* Overlay */}

//         <div className="absolute inset-0 bg-black/60" />


//         {/* Center Content */}

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">


//           {/* Logo */}

//           <motion.img
//             key={isDark ? "dark-logo" : "light-logo"}

//             src={isDark ? logoDark : logoLight}

//             alt="Rutnug Logo"

//             initial={{ opacity: 0, y: -30 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ duration: 0.6 }}

//             className="w-40 md:w-64 mb-6 drop-shadow-2xl"
//           />


//           {/* Static Text */}

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ delay: 0.2 }}

//             className="text-sm md:text-lg tracking-[0.3em] mb-2 text-gray-300 uppercase"
//           >
//             Luxury Without Limits
//           </motion.h2>


//           {/* Banner Title */}

//           <motion.h1
//             key={banners?.[currentSlide]?.title}

//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ delay: 0.4 }}

//             className="text-3xl md:text-5xl font-bold mb-4"
//           >
//             {banners?.[currentSlide]?.title}
//           </motion.h1>


//           {/* Banner Subtitle */}

//           <motion.p
//             key={banners?.[currentSlide]?.subtitle}

//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ delay: 0.6 }}

//             className="text-lg md:text-xl font-light mb-10"
//           >
//             {banners?.[currentSlide]?.subtitle}
//           </motion.p>


//           {/* Button */}

//           <Link to={banners?.[currentSlide]?.link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>


//         </div>


//         {/* Slider dots */}

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {banners?.map((_, index) => (

//             <button
//               key={index}

//               onClick={() => setCurrentSlide(index)}

//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />

//           ))}

//         </div>


//       </section>



//       {/* NEW ARRIVALS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}

//         </div>

//       </motion.section>



//       {/* BESTSELLERS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}

//         </div>

//       </motion.section>


//     </main>

//   );

// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { getNewArrivals, getBestsellers } from "@/data/products";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";
// import { useBanners } from "@/hooks/useBanners";

// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const fadeIn = {
//   initial: { opacity: 0, y: 30 },
//   whileInView: { opacity: 1, y: 0 },
//   viewport: { once: true },
//   transition: { duration: 0.7 },
// };


// const ProductCard = ({ product }: any) => (

//   <Link to={`/product/${product.id}`} className="group block">

//     <div className="aspect-[3/4] overflow-hidden bg-muted">

//       <img
//         src={product.images[0]}
//         alt={product.name}
//         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//         loading="lazy"
//       />

//     </div>

//     <div className="mt-3 space-y-1">

//       <h3 className="text-sm font-medium tracking-wide">
//         {product.name}
//       </h3>

//       <p className="text-sm text-muted-foreground">
//         ${product.price}
//       </p>

//     </div>

//   </Link>

// );


// const Index = () => {

//   const { isDark } = useTheme();

//   const newArrivals = getNewArrivals();
//   const bestsellers = getBestsellers();

//   const { data: banners, isLoading } = useBanners();

//   const [currentSlide, setCurrentSlide] = useState(0);


//   // Auto slider
//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         prev === banners.length - 1 ? 0 : prev + 1
//       );

//     }, 5000);

//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading) {

//     return (
//       <div className="h-screen flex items-center justify-center bg-black text-white">
//         Loading banners...
//       </div>
//     );

//   }


//   if (!banners || banners.length === 0) {

//     return (
//       <div className="h-screen flex items-center justify-center">
//         No banners found
//       </div>
//     );

//   }


//   return (

//     <main>


//       {/* HERO SECTION */}

//       <section className="relative h-screen w-full overflow-hidden">


//         {/* Banner Image */}

//         <AnimatePresence mode="wait">

//           <motion.img
//             key={banners[currentSlide].image}

//             src={banners[currentSlide].image}

//             alt="Banner"

//             className="absolute inset-0 w-full h-full object-cover"

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}

//             transition={{ duration: 1 }}
//           />

//         </AnimatePresence>


//         {/* Overlay */}

//         <div className="absolute inset-0 bg-black/60" />


//         {/* Content */}

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">


//           {/* Logo */}

//           <motion.img
//             src={isDark ? logoDark : logoLight}

//             alt="Rutnug Logo"

//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}

//             transition={{ duration: 0.6 }}

//             className="w-40 md:w-64 mb-6 drop-shadow-2xl"
//           />


//           {/* Static Text */}

//           <motion.h2

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}

//             transition={{ duration: 0.8 }}

//             className="text-sm md:text-lg tracking-[0.3em] mb-2 uppercase text-gray-300"
//           >
//             Luxury Without Limits
//           </motion.h2>


//           {/* Banner Title */}

//           <motion.h1

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}

//             transition={{ duration: 0.8 }}

//             className="text-3xl md:text-5xl font-bold mb-4"
//           >
//             {banners[currentSlide].title}
//           </motion.h1>


//           {/* Banner Subtitle */}

//           <motion.p

//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}

//             transition={{ duration: 1 }}

//             className="text-lg md:text-xl font-light mb-10"
//           >
//             {banners[currentSlide].subtitle}
//           </motion.p>


//           {/* Button */}

//           <Link to={banners[currentSlide].link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-white/90 text-sm tracking-widest uppercase px-12 py-6 rounded-none">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>


//         </div>


//         {/* Slider Dots */}

//         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {banners.map((_, index) => (

//             <button
//               key={index}

//               onClick={() => setCurrentSlide(index)}

//               className={`w-3 h-3 rounded-full transition-all ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50"
//               }`}
//             />

//           ))}

//         </div>


//       </section>



//       {/* NEW ARRIVALS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {newArrivals.slice(0, 4).map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}

//         </div>

//       </motion.section>



//       {/* BESTSELLERS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl md:text-4xl font-bold mb-12">
//           Bestsellers
//         </h2>

//         <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

//           {bestsellers.map((p: any) => (
//             <ProductCard key={p.id} product={p} />
//           ))}

//         </div>

//       </motion.section>


//     </main>

//   );

// };

// export default Index;


// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { motion, AnimatePresence } from "framer-motion";

// import { ArrowRight } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { useTheme } from "@/context/ThemeContext";

// import { useBanners } from "@/hooks/useBanners";

// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const API = "http://127.0.0.1:8000/api/auth/products/";


// const fadeIn = {

//   initial: { opacity: 0, y: 30 },

//   whileInView: { opacity: 1, y: 0 },

//   viewport: { once: true },

//   transition: { duration: 0.7 },

// };


// interface Product {

//   id: number;

//   name: string;

//   price: string;

//   discount_price?: string;

//   images: string[];

//   is_new_arrival: boolean;

//   is_best_seller: boolean;

//   is_out_of_stock: boolean;

// }


// const ProductCard = ({ product }: { product: Product }) => {

//   const hasDiscount = product.discount_price;

//   const finalPrice = hasDiscount

//     ? product.discount_price

//     : product.price;


//   return (

//     <Link

//       to={`/product/${product.id}`}

//       className="group block"

//     >

//       <div className="aspect-[3/4] overflow-hidden bg-muted relative">


//         {/* IMAGE */}

//         <img

//           src={product.images?.[0]}

//           alt={product.name}

//           className={`

//             w-full

//             h-full

//             object-cover

//             transition-transform

//             duration-700

//             group-hover:scale-105

//             ${product.is_out_of_stock ? "opacity-50" : ""}

//           `}

//         />


//         {/* BADGES */}

//         <div className="absolute top-2 left-2 flex flex-col gap-2">


//           {product.is_new_arrival && (

//             <span className="bg-white text-black text-xs px-2 py-1">

//               NEW

//             </span>

//           )}


//           {product.is_best_seller && (

//             <span className="bg-black text-white text-xs px-2 py-1">

//               BEST SELLER

//             </span>

//           )}


//           {product.is_out_of_stock && (

//             <span className="bg-red-600 text-white text-xs px-2 py-1">

//               OUT OF STOCK

//             </span>

//           )}


//         </div>


//       </div>


//       {/* PRODUCT INFO */}

//       <div className="mt-3 space-y-1">


//         <h3 className="text-sm font-medium tracking-wide">

//           {product.name}

//         </h3>


//         <div className="flex gap-2 items-center">


//           {hasDiscount && (

//             <span className="text-sm text-muted-foreground line-through">

//               ${product.price}

//             </span>

//           )}


//           <span className="text-sm font-semibold">

//             ${finalPrice}

//           </span>


//         </div>


//       </div>


//     </Link>

//   );

// };



// const Index = () => {

//   const { isDark } = useTheme();

//   const { data: banners, isLoading } = useBanners();


//   const [newArrivals, setNewArrivals] = useState<Product[]>([]);

//   const [bestSellers, setBestSellers] = useState<Product[]>([]);

//   const [currentSlide, setCurrentSlide] = useState(0);



//   // FETCH NEW ARRIVALS
//   useEffect(() => {

//     fetch(API + "?category=new")

//       .then(res => res.json())

//       .then(data => setNewArrivals(data));

//   }, []);



//   // FETCH BEST SELLERS
//   useEffect(() => {

//     fetch(API + "?category=best")

//       .then(res => res.json())

//       .then(data => setBestSellers(data));

//   }, []);



//   // AUTO SLIDER
//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>

//         prev === banners.length - 1

//           ? 0

//           : prev + 1

//       );

//     }, 5000);


//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading) {

//     return (

//       <div className="h-screen flex items-center justify-center">

//         Loading...

//       </div>

//     );

//   }


//   if (!banners || banners.length === 0) {

//     return (

//       <div className="h-screen flex items-center justify-center">

//         No banners found

//       </div>

//     );

//   }



//   return (

//     <main>


//       {/* HERO */}

//       <section className="relative h-screen">


//         <AnimatePresence mode="wait">


//           <motion.img

//             key={banners[currentSlide].image}

//             src={banners[currentSlide].image}

//             className="absolute inset-0 w-full h-full object-cover"

//             initial={{ opacity: 0 }}

//             animate={{ opacity: 1 }}

//             exit={{ opacity: 0 }}

//           />


//         </AnimatePresence>


//         <div className="absolute inset-0 bg-black/60" />


//         <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center">


//           <motion.img

//             src={isDark ? logoDark : logoLight}

//             className="w-40 mb-6"

//           />


//           <h2 className="tracking-[0.3em] uppercase mb-2">

//             Luxury Without Limits

//           </h2>


//           <h1 className="text-4xl font-bold mb-4">

//             {banners[currentSlide].title}

//           </h1>


//           <p className="mb-6">

//             {banners[currentSlide].subtitle}

//           </p>


//           <Link to="/shop">


//             <Button className="bg-white text-black">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>


//           </Link>


//         </div>


//       </section>



//       {/* NEW ARRIVALS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">


//         <h2 className="text-3xl font-bold mb-12">

//           New Arrivals

//         </h2>


//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">


//           {newArrivals.slice(0, 4).map(product => (

//             <ProductCard

//               key={product.id}

//               product={product}

//             />

//           ))}


//         </div>


//       </motion.section>



//       {/* BEST SELLERS */}

//       <motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-20">


//         <h2 className="text-3xl font-bold mb-12">

//           Best Sellers

//         </h2>


//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">


//           {bestSellers.slice(0, 4).map(product => (

//             <ProductCard

//               key={product.id}

//               product={product}

//             />

//           ))}


//         </div>


//       </motion.section>


//     </main>

//   );

// };


// export default Index;


// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { motion, AnimatePresence } from "framer-motion";

// import { ArrowRight } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { useTheme } from "@/context/ThemeContext";

// import { useBanners } from "@/hooks/useBanners";


// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const API = "http://127.0.0.1:8000/api/auth/products/";


// interface Product {

//   id: number;

//   name: string;

//   price: string;

//   discount_price?: string;

//   images: string[];

//   is_new_arrival: boolean;

//   is_best_seller: boolean;

//   is_out_of_stock: boolean;

// }



// const ProductCard = ({ product }: { product: Product }) => {

//   const price = Number(product.price);

//   const discountPrice = product.discount_price
//     ? Number(product.discount_price)
//     : null;

//   const finalPrice = discountPrice || price;

//   return (

//     <Link
//       to={`/product/${product.id}`}
//       className="group block"
//     >

//       <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">

//         {/* IMAGE */}
//         <img
//           src={product.images?.[0]}
//           alt={product.name}
//           className={`

//             w-full

//             h-full

//             object-cover

//             transition-transform

//             duration-500

//             group-hover:scale-105

//             ${product.is_out_of_stock ? "opacity-50" : ""}

//           `}
//         />


//         {/* BADGES */}
//         <div className="absolute top-2 left-2 flex flex-col gap-2">

//           {product.is_new_arrival && (

//             <span className="bg-white text-black text-xs px-2 py-1">
//               NEW
//             </span>

//           )}


//           {product.is_best_seller && (

//             <span className="bg-black text-white text-xs px-2 py-1">
//               BEST SELLER
//             </span>

//           )}


//           {product.is_out_of_stock && (

//             <span className="bg-red-600 text-white text-xs px-2 py-1">
//               OUT OF STOCK
//             </span>

//           )}

//         </div>

//       </div>


//       {/* INFO */}
//       <div className="mt-3">

//         <h3 className="text-sm font-medium uppercase tracking-wide">

//           {product.name}

//         </h3>


//         <div className="flex gap-2 items-center mt-1">

//           {discountPrice && (

//             <span className="line-through text-gray-400 text-sm">

//               ₹{price}

//             </span>

//           )}


//           <span className="text-sm font-semibold">

//             ₹{finalPrice}

//           </span>

//         </div>

//       </div>

//     </Link>

//   );

// };



// const Index = () => {

//   const { isDark } = useTheme();

//   const { data: banners, isLoading } = useBanners();


//   const [newArrivals, setNewArrivals] = useState<Product[]>([]);

//   const [bestSellers, setBestSellers] = useState<Product[]>([]);

//   const [currentSlide, setCurrentSlide] = useState(0);



//   // FETCH NEW ARRIVALS
//   useEffect(() => {

//     fetch(API + "?category=new")

//       .then(res => res.json())

//       .then(data => setNewArrivals(data));

//   }, []);



//   // FETCH BEST SELLERS
//   useEffect(() => {

//     fetch(API + "?category=best")

//       .then(res => res.json())

//       .then(data => setBestSellers(data));

//   }, []);



//   // SLIDER
//   useEffect(() => {

//     if (!banners) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         prev === banners.length - 1 ? 0 : prev + 1
//       );

//     }, 4000);

//     return () => clearInterval(interval);

//   }, [banners]);



//   if (isLoading)
//     return <div className="pt-32 text-center">Loading...</div>;


//   return (

//     <main>


//       {/* HERO */}
//       <section className="relative h-screen">


//         <AnimatePresence>

//           <motion.img

//             key={banners?.[currentSlide]?.image}

//             src={banners?.[currentSlide]?.image}

//             className="absolute w-full h-full object-cover"

//             initial={{ opacity: 0 }}

//             animate={{ opacity: 1 }}

//             exit={{ opacity: 0 }}

//           />

//         </AnimatePresence>


//         <div className="absolute inset-0 bg-black/60" />


//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">


//           <img
//             src={isDark ? logoDark : logoLight}
//             className="w-40 mb-6"
//           />


//           <h2 className="tracking-[0.3em] uppercase mb-2">
//             Luxury Without Limits
//           </h2>


//           <h1 className="text-4xl font-bold mb-4">
//             {banners?.[currentSlide]?.title}
//           </h1>


//           <p className="mb-6">
//             {banners?.[currentSlide]?.subtitle}
//           </p>


//           <Link to="/shop">

//             <Button className="bg-white text-black">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>

//         </div>

//       </section>



//       {/* NEW ARRIVALS */}
//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {newArrivals.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>



//       {/* BEST SELLERS */}
//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           Best Sellers
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {bestSellers.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>


//     </main>

//   );

// };


// export default Index;


// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { motion, AnimatePresence } from "framer-motion";

// import { ArrowRight } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { useTheme } from "@/context/ThemeContext";

// import { useBanners } from "@/hooks/useBanners";

// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const API = "http://127.0.0.1:8000/api/auth/products/";


// /* =====================================
//    PRODUCT TYPE
// ===================================== */

// interface Product {

//   id: number;

//   name: string;

//   price: string;

//   discount_price?: string;

//   images: string[];

//   is_new_arrival: boolean;

//   is_best_seller: boolean;

//   is_out_of_stock: boolean;

// }


// /* =====================================
//    PRODUCT CARD
// ===================================== */

// const ProductCard = ({ product }: { product: Product }) => {

//   const price = Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;

//   const finalPrice = discountPrice || price;

//   return (

//     <Link
//       to={`/product/${product.id}`}
//       className="group block"
//     >

//       <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">


//         {/* IMAGE */}
//         <img

//           src={product.images?.[0]}

//           alt={product.name}

//           className={`
//             w-full
//             h-full
//             object-cover
//             transition-transform
//             duration-500
//             group-hover:scale-105
//             ${product.is_out_of_stock ? "opacity-50" : ""}
//           `}
//         />


//         {/* BADGES */}
//         <div className="absolute top-2 left-2 flex flex-col gap-2">

//           {product.is_new_arrival && (

//             <span className="bg-white text-black text-xs px-2 py-1 uppercase">
//               New
//             </span>

//           )}

//           {product.is_best_seller && (

//             <span className="bg-black text-white text-xs px-2 py-1 uppercase">
//               Best Seller
//             </span>

//           )}

//           {product.is_out_of_stock && (

//             <span className="bg-red-600 text-white text-xs px-2 py-1 uppercase">
//               Out of Stock
//             </span>

//           )}

//         </div>

//       </div>


//       {/* INFO */}
//       <div className="mt-3">

//         <h3 className="text-sm font-medium uppercase tracking-wide">
//           {product.name}
//         </h3>


//         <div className="flex gap-2 items-center mt-1">

//           {discountPrice && (

//             <span className="line-through text-gray-400 text-sm">
//               ₹{price}
//             </span>

//           )}

//           <span className="text-sm font-semibold">
//             ₹{finalPrice}
//           </span>

//         </div>

//       </div>

//     </Link>

//   );

// };


// /* =====================================
//    INDEX PAGE
// ===================================== */

// const Index = () => {

//   const { isDark } = useTheme();

//   const { data: banners, isLoading } = useBanners();


//   const [newArrivals, setNewArrivals] = useState<Product[]>([]);

//   const [bestSellers, setBestSellers] = useState<Product[]>([]);

//   const [currentSlide, setCurrentSlide] = useState(0);


//   /* =====================================
//      FETCH NEW ARRIVALS
//   ===================================== */

//   useEffect(() => {

//     fetch(API + "?type=new")

//       .then(res => res.json())

//       .then(data => setNewArrivals(data))

//       .catch(err => console.log(err));

//   }, []);


//   /* =====================================
//      FETCH BEST SELLERS
//   ===================================== */

//   useEffect(() => {

//     fetch(API + "?type=best")

//       .then(res => res.json())

//       .then(data => setBestSellers(data))

//       .catch(err => console.log(err));

//   }, []);


//   /* =====================================
//      AUTO SLIDER
//   ===================================== */

//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>

//         prev === banners.length - 1 ? 0 : prev + 1

//       );

//     }, 4000);

//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading)

//     return (

//       <div className="pt-32 text-center">
//         Loading...
//       </div>

//     );


//   return (

//     <main>


//       {/* =====================================
//          HERO BANNER
//       ===================================== */}

//       <section className="relative h-screen">


//         <AnimatePresence mode="wait">

//           <motion.img

//             key={banners?.[currentSlide]?.image}

//             src={banners?.[currentSlide]?.image}

//             className="absolute w-full h-full object-cover"

//             initial={{ opacity: 0 }}

//             animate={{ opacity: 1 }}

//             exit={{ opacity: 0 }}

//             transition={{ duration: 0.8 }}

//           />

//         </AnimatePresence>


//         <div className="absolute inset-0 bg-black/60" />


//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">


//           {/* LOGO */}
//           <img

//             src={isDark ? logoDark : logoLight}

//             className="w-40 mb-6"

//           />


//           {/* STATIC TEXT */}
//           <h2 className="tracking-[0.3em] uppercase mb-2">

//             Luxury Without Limits

//           </h2>


//           {/* TITLE */}
//           <h1 className="text-4xl font-bold mb-4">

//             {banners?.[currentSlide]?.title}

//           </h1>


//           {/* SUBTITLE */}
//           <p className="mb-6">

//             {banners?.[currentSlide]?.subtitle}

//           </p>


//           {/* BUTTON — USE ADMIN LINK */}
//           <Link to={banners?.[currentSlide]?.link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-gray-200 transition">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>

//         </div>

//       </section>


//       {/* =====================================
//          NEW ARRIVALS
//       ===================================== */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           New Arrivals
//         </h2>


//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {newArrivals.map(product => (

//             <ProductCard

//               key={product.id}

//               product={product}

//             />

//           ))}

//         </div>

//       </section>


//       {/* =====================================
//          BEST SELLERS
//       ===================================== */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           Best Sellers
//         </h2>


//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {bestSellers.map(product => (

//             <ProductCard

//               key={product.id}

//               product={product}

//             />

//           ))}

//         </div>

//       </section>


//     </main>

//   );

// };


// export default Index;


// import { useEffect, useState } from "react";

// import { Link } from "react-router-dom";

// import { motion, AnimatePresence } from "framer-motion";

// import { ArrowRight } from "lucide-react";

// import { Button } from "@/components/ui/button";

// import { useTheme } from "@/context/ThemeContext";

// import { useBanners } from "@/hooks/useBanners";

// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";


// const API = "http://127.0.0.1:8000/api/auth/products/";


// /* =============================
//    Product type
// ============================= */

// interface Product {

//   id: number;
//   name: string;
//   price: string;
//   discount_price?: string;
//   images: string[];
//   is_new_arrival: boolean;
//   is_best_seller: boolean;
//   is_out_of_stock: boolean;

// }


// /* =============================
//    Product Card
// ============================= */

// const ProductCard = ({ product }: { product: Product }) => {

//   const price = Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;

//   const finalPrice = discountPrice || price;

//   return (

//     <Link
//       to={`/product/${product.id}`}
//       className="group block"
//     >

//       <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">

//         <img
//           src={product.images?.[0]}
//           alt={product.name}
//           className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
//             product.is_out_of_stock ? "opacity-50" : ""
//           }`}
//         />

//         {/* BADGES */}
//         <div className="absolute top-2 left-2 flex flex-col gap-2">

//           {product.is_new_arrival && (
//             <span className="bg-white text-black text-xs px-2 py-1 uppercase">
//               New
//             </span>
//           )}

//           {product.is_best_seller && (
//             <span className="bg-black text-white text-xs px-2 py-1 uppercase">
//               Best Seller
//             </span>
//           )}

//           {product.is_out_of_stock && (
//             <span className="bg-red-600 text-white text-xs px-2 py-1 uppercase">
//               Out of Stock
//             </span>
//           )}

//         </div>

//       </div>

//       {/* INFO */}
//       <div className="mt-3">

//         <h3 className="text-sm font-medium uppercase tracking-wide">
//           {product.name}
//         </h3>

//         <div className="flex gap-2 items-center mt-1">

//           {discountPrice && (
//             <span className="line-through text-gray-400 text-sm">
//               ₹{price}
//             </span>
//           )}

//           <span className="text-sm font-semibold">
//             ₹{finalPrice}
//           </span>

//         </div>

//       </div>

//     </Link>

//   );

// };


// /* =============================
//    Index Page
// ============================= */

// const Index = () => {

//   const { isDark } = useTheme();

//   const { data: banners, isLoading } = useBanners();

//   const [newArrivals, setNewArrivals] = useState<Product[]>([]);
//   const [bestSellers, setBestSellers] = useState<Product[]>([]);

//   const [currentSlide, setCurrentSlide] = useState(0);


//   /* =============================
//      Fetch New Arrivals
//   ============================= */

//   useEffect(() => {

//     fetch(API + "?type=new")

//       .then(res => res.json())
//       .then(data => setNewArrivals(data));

//   }, []);


//   /* =============================
//      Fetch Best Sellers
//   ============================= */

//   useEffect(() => {

//     fetch(API + "?type=best")

//       .then(res => res.json())
//       .then(data => setBestSellers(data));

//   }, []);


//   /* =============================
//      Auto Banner Slider
//   ============================= */

//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         prev === banners.length - 1 ? 0 : prev + 1
//       );

//     }, 4000);

//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading)
//     return (
//       <div className="pt-32 text-center">
//         Loading banners...
//       </div>
//     );


//   return (

//     <main>


//       {/* =============================
//          HERO SECTION
//       ============================= */}

//       <section className="relative h-screen overflow-hidden">


//         {/* Banner Image */}
//         <AnimatePresence mode="wait">

//           <motion.img

//             key={banners?.[currentSlide]?.image}

//             src={banners?.[currentSlide]?.image}

//             className="absolute w-full h-full object-cover"

//             initial={{ opacity: 0 }}

//             animate={{ opacity: 1 }}

//             exit={{ opacity: 0 }}

//             transition={{ duration: 0.8 }}

//           />

//         </AnimatePresence>


//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/60" />


//         {/* Content */}
//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">


//           <img
//             src={isDark ? logoDark : logoLight}
//             className="w-40 mb-6"
//           />


//           <h2 className="tracking-[0.3em] uppercase mb-2">
//             Luxury Without Limits
//           </h2>


//           <h1 className="text-4xl font-bold mb-4">
//             {banners?.[currentSlide]?.title}
//           </h1>


//           <p className="mb-6">
//             {banners?.[currentSlide]?.subtitle}
//           </p>


//           <Link to={banners?.[currentSlide]?.link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-gray-200">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>


//         </div>


//         {/* =============================
//            DOT INDICATORS
//         ============================= */}

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {banners?.map((_, index) => (

//             <button

//               key={index}

//               onClick={() => setCurrentSlide(index)}

//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50 hover:bg-white"
//               }`}

//             />

//           ))}

//         </div>


//       </section>


//       {/* =============================
//          NEW ARRIVALS
//       ============================= */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {newArrivals.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>


//       {/* =============================
//          BEST SELLERS
//       ============================= */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           Best Sellers
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {bestSellers.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>


//     </main>

//   );

// };

// export default Index;


// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";
// import { useBanners } from "@/hooks/useBanners";

// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";

// const API = "http://127.0.0.1:8000/api/auth/products/";

// /* =============================
//    Product type
// ============================= */

// interface Product {
//   id: number;
//   name: string;
//   price: string;
//   discount_price?: string;
//   images: string[];
//   is_new_arrival: boolean;
//   is_best_seller: boolean;
//   is_out_of_stock: boolean;
// }

// /* =============================
//    Product Card
// ============================= */

// const ProductCard = ({ product }: { product: Product }) => {

//   const price = Number(product.price);

//   const discountPrice =
//     product.discount_price
//       ? Number(product.discount_price)
//       : null;

//   const finalPrice = discountPrice || price;

//   const isOutOfStock = product.is_out_of_stock === true;

//   return (

//     <Link
//       to={`/product/${product.id}`}
//       className={`group block ${isOutOfStock ? "pointer-events-none" : ""}`}
//     >

//       <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">

//         <img
//           src={product.images?.[0]}
//           alt={product.name}
//           className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 ${
//             isOutOfStock ? "opacity-50" : ""
//           }`}
//         />

//         {/* BADGES */}
//         <div className="absolute top-2 left-2 flex flex-col gap-2">

//           {product.is_new_arrival && (
//             <span className="bg-white text-black text-xs px-2 py-1 uppercase">
//               New
//             </span>
//           )}

//           {product.is_best_seller && (
//             <span className="bg-black text-white text-xs px-2 py-1 uppercase">
//               Best Seller
//             </span>
//           )}

//           {isOutOfStock && (
//             <span className="bg-red-600 text-white text-xs px-2 py-1 uppercase">
//               Out of Stock
//             </span>
//           )}

//         </div>

//       </div>

//       {/* INFO */}
//       <div className="mt-3">

//         {/* ✅ NO uppercase here */}
//         <h3 className="text-sm font-medium tracking-wide">
//           {product.name}
//         </h3>

//         <div className="flex gap-2 items-center mt-1">

//           {discountPrice && (
//             <span className="line-through text-gray-400 text-sm">
//               ₹{price}
//             </span>
//           )}

//           <span className="text-sm font-semibold">
//             ₹{finalPrice}
//           </span>

//         </div>

//       </div>

//     </Link>

//   );

// };

// /* =============================
//    Index Page
// ============================= */

// const Index = () => {

//   const { isDark } = useTheme();
//   const { data: banners, isLoading } = useBanners();

//   const [newArrivals, setNewArrivals] = useState<Product[]>([]);
//   const [bestSellers, setBestSellers] = useState<Product[]>([]);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   /* =============================
//      Fetch New Arrivals
//   ============================= */

//   useEffect(() => {

//     fetch(API + "?type=new")
//       .then(res => res.json())
//       .then(data => setNewArrivals(data));

//   }, []);

//   /* =============================
//      Fetch Best Sellers
//   ============================= */

//   useEffect(() => {

//     fetch(API + "?type=best")
//       .then(res => res.json())
//       .then(data => setBestSellers(data));

//   }, []);

//   /* =============================
//      Auto Banner Slider
//   ============================= */

//   useEffect(() => {

//     if (!banners || banners.length === 0) return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>
//         prev === banners.length - 1 ? 0 : prev + 1
//       );

//     }, 4000);

//     return () => clearInterval(interval);

//   }, [banners]);

//   if (isLoading)
//     return (
//       <div className="pt-32 text-center">
//         Loading banners...
//       </div>
//     );

//   return (

//     <main>

//       {/* =============================
//          HERO SECTION
//       ============================= */}

//       <section className="relative h-screen overflow-hidden">

//         <AnimatePresence mode="wait">

//           <motion.img
//             key={banners?.[currentSlide]?.image}
//             src={banners?.[currentSlide]?.image}
//             className="absolute w-full h-full object-cover"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//           />

//         </AnimatePresence>

//         <div className="absolute inset-0 bg-black/60" />

//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

//           <img
//             src={isDark ? logoDark : logoLight}
//             className="w-40 mb-6"
//           />

//           <h2 className="tracking-[0.3em] uppercase mb-2">
//             Luxury Without Limits
//           </h2>

//           <h1 className="text-4xl font-bold mb-4">
//             {banners?.[currentSlide]?.title}
//           </h1>

//           <p className="mb-6">
//             {banners?.[currentSlide]?.subtitle}
//           </p>

//           <Link to={banners?.[currentSlide]?.link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-gray-200">

//               Shop Now
//               <ArrowRight size={16} />

//             </Button>

//           </Link>

//         </div>

//         {/* DOTS */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {banners?.map((_, index) => (

//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50 hover:bg-white"
//               }`}
//             />

//           ))}

//         </div>

//       </section>

//       {/* =============================
//          NEW ARRIVALS
//       ============================= */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {newArrivals.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>

//       {/* =============================
//          BEST SELLERS
//       ============================= */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           Best Sellers
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {bestSellers.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>

//     </main>

//   );

// };

// export default Index;

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

const API = "http://127.0.0.1:8000/api/auth/products/";

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
        <h3 className="text-sm font-medium tracking-wide">
          {product.name}
        </h3>

        <div className="flex gap-2 items-center mt-1">
          {discountPrice && (
            <span className="line-through text-gray-400 text-sm">
              ₹{price}
            </span>
          )}

          <span className="text-sm font-semibold">
            ₹{finalPrice}
          </span>
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
      .then(res => res.json())
      .then(data => setNewArrivals(data));
  }, []);

  /* =============================
     Fetch Best Sellers
  ============================= */

  useEffect(() => {
    fetch(API + "?type=best")
      .then(res => res.json())
      .then(data => setBestSellers(data));
  }, []);

  /* =============================
     Auto Banner Slider
  ============================= */

  useEffect(() => {
    if (!banners || banners.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide(prev =>
        prev === banners.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [banners]);

  if (isLoading)
    return (
      <div className="pt-32 text-center">
        Loading banners...
      </div>
    );

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

          <img
            src={isDark ? logoDark : logoLight}
            className="w-40 mb-6"
          />

          <h2 className="tracking-[0.3em] uppercase mb-2">
            Luxury Without Limits
          </h2>

          <h1 className="text-4xl font-bold mb-4">
            {banners?.[currentSlide]?.title}
          </h1>

          <p className="mb-6">
            {banners?.[currentSlide]?.subtitle}
          </p>

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
        <h2 className="text-3xl font-bold mb-10">
          New Arrivals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {newArrivals.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      {/* =============================
         BEST SELLERS
      ============================= */}

      <section className="max-w-7xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-10">
          Best Sellers
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {bestSellers.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

    </main>
  );
};

export default Index;



// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useTheme } from "@/context/ThemeContext";
// import { useBanners } from "@/hooks/useBanners";

// import logoLight from "@/assets/IMG_1760 copy.png";
// import logoDark from "@/assets/IMG_1760 copywhite.png";

// /* =============================
//    API ENDPOINTS
// ============================= */

// const NEW_API =
//   "http://127.0.0.1:8000/api/auth/products/new-arrivals/";

// const BEST_API =
//   "http://127.0.0.1:8000/api/auth/products/best-sellers/";

// /* =============================
//    Product Type
// ============================= */

// interface Product {

//   id: number;

//   name: string;

//   price: string;

//   discount_price?: string;

//   images: string[];

//   is_new_arrival: boolean;

//   is_best_seller: boolean;

//   is_out_of_stock: boolean;

// }

// /* =============================
//    Product Card
// ============================= */

// const ProductCard = ({ product }: { product: Product }) => {

//   const price = Number(product.price);

//   const discountPrice = product.discount_price
//     ? Number(product.discount_price)
//     : null;

//   const finalPrice = discountPrice || price;

//   const image =
//     product.images && product.images.length > 0
//       ? product.images[0]
//       : "/placeholder.png";

//   return (

//     <Link to={`/product/${product.id}`} className="group block">

//       <div className="aspect-[3/4] bg-gray-100 overflow-hidden relative">

//         <img
//           src={image}
//           alt={product.name}
//           className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//         />

//         <div className="absolute top-2 left-2 flex flex-col gap-2">

//           {product.is_new_arrival && (

//             <span className="bg-white text-black text-xs px-2 py-1 uppercase">
//               New
//             </span>

//           )}

//           {product.is_best_seller && (

//             <span className="bg-black text-white text-xs px-2 py-1 uppercase">
//               Best Seller
//             </span>

//           )}

//         </div>

//       </div>

//       <div className="mt-3">

//         <h3 className="text-sm font-medium tracking-wide">
//           {product.name}
//         </h3>

//         <div className="flex gap-2 items-center mt-1">

//           {discountPrice && (

//             <span className="line-through text-gray-400 text-sm">
//               ₹{price}
//             </span>

//           )}

//           <span className="text-sm font-semibold">
//             ₹{finalPrice}
//           </span>

//         </div>

//       </div>

//     </Link>

//   );

// };


// /* =============================
//    Index Page
// ============================= */

// const Index = () => {

//   const { isDark } = useTheme();

//   const { data: banners, isLoading } = useBanners();

//   const [newArrivals, setNewArrivals] = useState<Product[]>([]);

//   const [bestSellers, setBestSellers] = useState<Product[]>([]);

//   const [currentSlide, setCurrentSlide] = useState(0);


//   /* =============================
//      Fetch New Arrivals
//   ============================= */

//   useEffect(() => {

//     fetch(NEW_API)

//       .then(res => res.json())

//       .then(data => {

//         setNewArrivals(data);

//       })

//       .catch(err => {

//         console.log("New arrivals error:", err);

//       });

//   }, []);


//   /* =============================
//      Fetch Best Sellers
//   ============================= */

//   useEffect(() => {

//     fetch(BEST_API)

//       .then(res => res.json())

//       .then(data => {

//         setBestSellers(data);

//       })

//       .catch(err => {

//         console.log("Best sellers error:", err);

//       });

//   }, []);


//   /* =============================
//      Banner Auto Slider
//   ============================= */

//   useEffect(() => {

//     if (!banners || banners.length === 0)
//       return;

//     const interval = setInterval(() => {

//       setCurrentSlide(prev =>

//         prev === banners.length - 1
//           ? 0
//           : prev + 1

//       );

//     }, 4000);

//     return () => clearInterval(interval);

//   }, [banners]);


//   if (isLoading)

//     return (

//       <div className="pt-32 text-center">
//         Loading banners...
//       </div>

//     );


//   return (

//     <main>


//       {/* HERO */}

//       <section className="relative h-screen overflow-hidden">

//         <AnimatePresence mode="wait">

//           <motion.img

//             key={banners?.[currentSlide]?.image}

//             src={banners?.[currentSlide]?.image}

//             className="absolute w-full h-full object-cover"

//             initial={{ opacity: 0 }}

//             animate={{ opacity: 1 }}

//             exit={{ opacity: 0 }}

//             transition={{ duration: 0.8 }}

//           />

//         </AnimatePresence>


//         <div className="absolute inset-0 bg-black/60" />


//         <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">

//           <img
//             src={isDark ? logoDark : logoLight}
//             className="w-40 mb-6"
//           />

//           <h2 className="tracking-[0.3em] uppercase mb-2">
//             Luxury Without Limits
//           </h2>

//           <h1 className="text-4xl font-bold mb-4">
//             {banners?.[currentSlide]?.title}
//           </h1>

//           <p className="mb-6">
//             {banners?.[currentSlide]?.subtitle}
//           </p>

//           <Link to={banners?.[currentSlide]?.link || "/shop"}>

//             <Button className="bg-white text-black hover:bg-gray-200">

//               Shop Now

//               <ArrowRight size={16} />

//             </Button>

//           </Link>

//         </div>


//         {/* DOTS */}

//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">

//           {banners?.map((_, index) => (

//             <button

//               key={index}

//               onClick={() => setCurrentSlide(index)}

//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 currentSlide === index
//                   ? "bg-white scale-125"
//                   : "bg-white/50 hover:bg-white"
//               }`}

//             />

//           ))}

//         </div>

//       </section>


//       {/* NEW ARRIVALS */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           New Arrivals
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {newArrivals.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>


//       {/* BEST SELLERS */}

//       <section className="max-w-7xl mx-auto px-4 py-20">

//         <h2 className="text-3xl font-bold mb-10">
//           Best Sellers
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

//           {bestSellers.map(product => (

//             <ProductCard
//               key={product.id}
//               product={product}
//             />

//           ))}

//         </div>

//       </section>


//     </main>

//   );

// };

// export default Index;