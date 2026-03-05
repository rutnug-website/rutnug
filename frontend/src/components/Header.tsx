// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingBag, Sun, Moon, Menu, X } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import { useTheme } from '@/context/ThemeContext';
// import { motion, AnimatePresence } from 'framer-motion';
// import rutnugLogo from '@/assets/rutnug-logo.png';
// import rutnugLogoAlt from '@/assets/rutnug-logo-alt.png';

// const navLinks = [
//   { to: '/', label: 'Home' },
//   { to: '/shop', label: 'Shop' },
//   { to: '/about', label: 'About' },
//   { to: '/contact', label: 'Contact' },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//         {/* Logo */}
//         <Link to="/" className="flex-shrink-0">
//           <img
//             src={isDark ? rutnugLogoAlt : rutnugLogo}
//             alt="RUTNUG"
//             className="h-10 w-auto"
//           />
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map(link => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className="relative text-sm font-sans font-medium tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
//           <button
//             onClick={toggle}
//             className="p-2 text-foreground hover:opacity-70 transition-opacity"
//             aria-label="Toggle theme"
//           >
//             <motion.div
//               key={isDark ? 'dark' : 'light'}
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             </motion.div>
//           </button>

//           <Link to="/cart" className="relative p-2 text-foreground hover:opacity-70 transition-opacity">
//             <ShoppingBag size={20} />
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full font-sans">
//                 {totalItems}
//               </span>
//             )}
//           </Link>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden p-2 text-foreground"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Menu"
//           >
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.nav
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden overflow-hidden bg-background border-b border-border"
//           >
//             <div className="flex flex-col items-center gap-6 py-8">
//               {navLinks.map(link => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   onClick={() => setMobileOpen(false)}
//                   className="text-sm font-sans font-medium tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;


// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingBag, Sun, Moon, Menu, X } from 'lucide-react';
// import { useCart } from '@/context/CartContext';
// import { useTheme } from '@/context/ThemeContext';
// import { motion, AnimatePresence } from 'framer-motion';
// import rutnugLogo from '@/assets/rutnug-logo.png';
// import rutnugLogoAlt from '@/assets/rutnug-logo-alt.png';

// const navLinks = [
//   { to: '/', label: 'Home' },
//   { to: '/shop', label: 'Shop' },
//   { to: '/about', label: 'About' },
//   { to: '/contact', label: 'Contact' },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
//       <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
//         {/* Logo + Brand Name */}
//         <Link to="/" className="flex items-center gap-3 flex-shrink-0">
//           <img
//             src={isDark ? rutnugLogoAlt : rutnugLogo}
//             alt="RUTNUG"
//             className="h-10 w-auto"
//           />
//           <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase text-foreground">
//             RUTNUG
//           </span>
//         </Link>

//         {/* Desktop Nav */}
//         <nav className="hidden md:flex items-center gap-8">
//           {navLinks.map(link => (
//             <Link
//               key={link.to}
//               to={link.to}
//               className="relative text-sm font-medium tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         {/* Right Icons */}
//         <div className="flex items-center gap-4">
          
//           {/* Theme Toggle */}
//           <button
//             onClick={toggle}
//             className="p-2 text-foreground hover:opacity-70 transition-opacity"
//             aria-label="Toggle theme"
//           >
//             <motion.div
//               key={isDark ? 'dark' : 'light'}
//               initial={{ rotate: -90, opacity: 0 }}
//               animate={{ rotate: 0, opacity: 1 }}
//               exit={{ rotate: 90, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               {isDark ? <Sun size={20} /> : <Moon size={20} />}
//             </motion.div>
//           </button>

//           {/* Cart */}
//           <Link
//             to="/cart"
//             className="relative p-2 text-foreground hover:opacity-70 transition-opacity"
//           >
//             <ShoppingBag size={20} />
//             {totalItems > 0 && (
//               <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full font-medium">
//                 {totalItems}
//               </span>
//             )}
//           </Link>

//           {/* Mobile Menu Toggle */}
//           <button
//             className="md:hidden p-2 text-foreground"
//             onClick={() => setMobileOpen(!mobileOpen)}
//             aria-label="Menu"
//           >
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Nav */}
//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.nav
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: 'auto', opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden overflow-hidden bg-background border-b border-border"
//           >
//             <div className="flex flex-col items-center gap-6 py-8">
//               {navLinks.map(link => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   onClick={() => setMobileOpen(false)}
//                   className="text-sm font-medium tracking-widest uppercase text-foreground hover:opacity-70 transition-opacity"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </motion.nav>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import rutnugLogo from "@/assets/rutnug-logo.png";
// import rutnugLogoAlt from "@/assets/rutnug-logo-alt.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* =========================
//           ANNOUNCEMENT BAR
//       ========================== */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-black text-white h-8 flex items-center overflow-hidden">
//         <div className="whitespace-nowrap animate-marquee text-xs tracking-widest uppercase px-4">
//           FREE SHIPPING ON ALL ORDERS • 24/7 ONLINE STORE • LUXURY WITHOUT LIMITS • NEW COLLECTION LIVE NOW •
//         </div>
//       </div>

//       {/* =========================
//           HEADER
//       ========================== */}
//       <header className="fixed top-8 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          
//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? rutnugLogoAlt : rutnugLogo}
//               alt="RUTNUG"
//               className="h-9 w-auto"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map(link => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-4">
            
//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden bg-background border-b border-border"
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map(link => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>
//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import rutnugLogo from "@/assets/rutnug-logo.png";
// import rutnugLogoAlt from "@/assets/rutnug-logo-alt.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* ===============================
//           ANNOUNCEMENT BAR
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.2em] uppercase">

//             <span className="px-6">Free Shipping Worldwide</span>

//             <span
//               className={`h-3 w-[1px] ${
//                 isDark ? "bg-black/30" : "bg-white/30"
//               }`}
//             ></span>

//             <span
//               className={`px-6 ${
//                 isDark ? "bg-black text-white" : "bg-white text-black"
//               } h-full flex items-center`}
//             >
//               New Collection Live
//             </span>

//             <span
//               className={`h-3 w-[1px] ${
//                 isDark ? "bg-black/30" : "bg-white/30"
//               }`}
//             ></span>

//             <span className="px-6">24/7 Online Store</span>

//             <span
//               className={`h-3 w-[1px] ${
//                 isDark ? "bg-black/30" : "bg-white/30"
//               }`}
//             ></span>

//             <span
//               className={`px-6 ${
//                 isDark ? "bg-black text-white" : "bg-white text-black"
//               } h-full flex items-center`}
//             >
//               Luxury Without Limits
//             </span>

//             {/* Duplicate for seamless scroll */}
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="h-3 w-[1px]"></span>
//             <span
//               className={`px-6 ${
//                 isDark ? "bg-black text-white" : "bg-white text-black"
//               } h-full flex items-center`}
//             >
//               New Collection Live
//             </span>
//             <span className="h-3 w-[1px]"></span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="h-3 w-[1px]"></span>
//             <span
//               className={`px-6 ${
//                 isDark ? "bg-black text-white" : "bg-white text-black"
//               } h-full flex items-center`}
//             >
//               Luxury Without Limits
//             </span>

//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header className="fixed top-9 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? rutnugLogoAlt : rutnugLogo}
//               alt="RUTNUG"
//               className="h-9 w-auto"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map(link => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Side */}
//           <div className="flex items-center gap-4">

//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden bg-background border-b border-border"
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map(link => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import rutnugLogo from "@/assets/rutnug-logo.png";
// import rutnugLogoAlt from "@/assets/src/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* ===============================
//           CLEAN SINGLE-COLOR ANNOUNCEMENT
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">

//             <span className="px-6">Free Shipping Worldwide</span>

//             <span className="px-2">•</span>

//             <span className="px-6">New Collection Live Now</span>

//             <span className="px-2">•</span>

//             <span className="px-6">24/7 Online Store</span>

//             <span className="px-2">•</span>

//             <span className="px-6">Luxury Without Limits</span>

//             {/* Duplicate for seamless infinite scroll */}
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>

//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header className="fixed top-9 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
//         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">

//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? rutnugLogoAlt : rutnugLogo}
//               alt="RUTNUG"
//               className="h-9 w-auto"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map(link => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-foreground after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-foreground text-background text-xs flex items-center justify-center rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden bg-background border-b border-border"
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map(link => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import rutnugLogoAlt from "@/assets/rutnug-logo-alt1.png";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* ===============================
//           ANNOUNCEMENT BAR
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>

//             {/* Duplicate for seamless infinite scroll */}
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>
//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header className="fixed top-9 left-0 right-0 z-40 bg-black backdrop-blur-md border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">

//           {/* LOGO (FULLY VISIBLE) */}
//           <Link to="/" className="flex items-center">
//             <img
//               src={rutnugLogoAlt}
//               alt="RUTNUG G.C.B TM"
//               className="h-14 md:h-18 w-auto object-contain"
//             />
//           </Link>

//           {/* DESKTOP NAV */}
//           <nav className="hidden md:flex items-center gap-10">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase text-white hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* RIGHT SIDE */}
//           <div className="flex items-center gap-4 text-white">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black text-xs flex items-center justify-center rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* MOBILE NAVIGATION */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden bg-black border-t border-white/10"
//             >
//               <div className="flex flex-col items-center gap-6 py-8 text-white">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import rutnugLogo from "@/assets/rutnug-logo.png";
// import rutnugLogoAlt from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* ===============================
//           ANNOUNCEMENT BAR
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>

//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>
//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header className="fixed top-9 left-0 right-0 z-40 bg-black backdrop-blur-md border-b border-white/10">
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={rutnugLogoAlt}
//               alt="RUTNUG G.C.B TM"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase text-white">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8 text-white">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-white after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4 text-white">
//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 bg-white text-black text-xs flex items-center justify-center rounded-full">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden overflow-hidden bg-black border-t border-white/10"
//             >
//               <div className="flex flex-col items-center gap-6 py-8 text-white">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import rutnugLogoAlt from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* ===============================
//           ANNOUNCEMENT BAR
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>

//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>
//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header
//         className={`fixed top-9 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={rutnugLogoAlt}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2 transition-opacity hover:opacity-70">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span
//                   className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
//                     isDark
//                       ? "bg-white text-black"
//                       : "bg-black text-white"
//                   }`}
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>

//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`md:hidden overflow-hidden border-t ${
//                 isDark
//                   ? "bg-black border-white/10"
//                   : "bg-white border-black/10"
//               }`}
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;



// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import logoLight from "@/assets/Rutnuglogo.png";  // Light mode logo
// import logoDark from "@/assets/Rutnug1.jpeg";     // Dark mode logo

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <>
//       {/* ===============================
//           ANNOUNCEMENT BAR
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">
//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>

//             <span className="px-6">Free Shipping Worldwide</span>
//             <span className="px-2">•</span>
//             <span className="px-6">New Collection Live Now</span>
//             <span className="px-2">•</span>
//             <span className="px-6">24/7 Online Store</span>
//             <span className="px-2">•</span>
//             <span className="px-6">Luxury Without Limits</span>
//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header
//         className={`fixed top-9 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? logoDark : logoLight}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2 transition-opacity hover:opacity-70">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span
//                   className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
//                     isDark
//                       ? "bg-white text-black"
//                       : "bg-black text-white"
//                   }`}
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>

//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`md:hidden overflow-hidden border-t ${
//                 isDark
//                   ? "bg-black border-white/10"
//                   : "bg-white border-black/10"
//               }`}
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import logoLight from "@/assets/Rutnuglogo.png";
// import logoDark from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const defaultAnnouncements = [
//   "Free Shipping Worldwide",
//   "New Collection Live Now",
//   "24/7 Online Store",
//   "Luxury Without Limits",
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState<string[]>(defaultAnnouncements);

//   // 🔥 Fetch from backend but keep default if fails
//   useEffect(() => {
//     fetch("http://localhost:8000/api/auth/announcements/")
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.length > 0) {
//           const messages = data.map((item: any) => item.message);
//           setAnnouncements(messages);
//         }
//       })
//       .catch(() => {
//         console.log("Using default announcements");
//       });
//   }, []);

//   return (
//     <>
//       {/* ===============================
//           ANNOUNCEMENT BAR
//       =============================== */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">

//             {/* Dynamic or Default */}
//             {announcements.map((msg, index) => (
//               <span key={index} className="px-6">
//                 {msg}
//               </span>
//             ))}

//             {/* Duplicate for smooth infinite scroll */}
//             {announcements.map((msg, index) => (
//               <span key={`duplicate-${index}`} className="px-6">
//                 {msg}
//               </span>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* ===============================
//           HEADER
//       =============================== */}
//       <header
//         className={`fixed top-9 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           {/* Logo + Brand */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? logoDark : logoLight}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2 transition-opacity hover:opacity-70">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span
//                   className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
//                     isDark
//                       ? "bg-white text-black"
//                       : "bg-black text-white"
//                   }`}
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>

//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`md:hidden overflow-hidden border-t ${
//                 isDark
//                   ? "bg-black border-white/10"
//                   : "bg-white border-black/10"
//               }`}
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import logoLight from "@/assets/Rutnuglogo.png";
// import logoDark from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState<any[]>([]);

//   useEffect(() => {
//     console.log("Fetching announcements...");

//     fetch("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("API RESPONSE:", data);
//         setAnnouncements(data);
//       })
//       .catch((error) => {
//         console.error("Fetch error:", error);
//       });
//   }, []);

//   return (
//     <>
//       {/* FORCE SHOW BAR FOR DEBUG */}
//       <div className="fixed top-0 left-0 right-0 z-50 h-9 bg-red-500 text-white flex items-center justify-center text-xs uppercase tracking-widest">
//         {announcements.length > 0
//           ? announcements.map((item, index) => (
//               <span key={index} className="px-4">
//                 {item.message}
//               </span>
//             ))
//           : "NO ANNOUNCEMENTS FOUND"}
//       </div>

//       <header
//         className={`fixed top-9 left-0 right-0 z-40 backdrop-blur-md border-b ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? logoDark : logoLight}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="text-sm font-medium tracking-widest uppercase"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-4">
//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span className="absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full bg-black text-white">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import logoLight from "@/assets/Rutnuglogo.png";
// import logoDark from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState<any[]>([]);

//   // Fetch announcements from Django backend
//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setAnnouncements(data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching announcements:", error);
//       });
//   }, []);

//   return (
//     <>
//       {/* ================= ANNOUNCEMENT BAR ================= */}
//       {announcements.length > 0 && (
//         <div
//           className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//             isDark
//               ? "bg-black text-white border-b border-white/10"
//               : "bg-white text-black border-b border-black/10"
//           }`}
//         >
//           <div className="h-full flex items-center overflow-hidden">
//             <div className="animate-marquee text-xs uppercase tracking-[0.25em] font-medium gap-12">

//               {announcements.map((item, index) => (
//                 <span key={index} className="px-6">
//                   {item.message}
//                 </span>
//               ))}

//               {/* Duplicate for smooth infinite scroll */}
//               {announcements.map((item, index) => (
//                 <span key={`duplicate-${index}`} className="px-6">
//                   {item.message}
//                 </span>
//               ))}

//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= HEADER ================= */}
//       <header
//         className={`fixed ${
//           announcements.length > 0 ? "top-9" : "top-0"
//         } left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? logoDark : logoLight}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2 transition-opacity hover:opacity-70">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span
//                   className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
//                     isDark
//                       ? "bg-white text-black"
//                       : "bg-black text-white"
//                   }`}
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>

//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`md:hidden overflow-hidden border-t ${
//                 isDark
//                   ? "bg-black border-white/10"
//                   : "bg-white border-black/10"
//               }`}
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import logoLight from "@/assets/Rutnuglogo.png";
// import logoDark from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setAnnouncements(data);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching announcements:", error);
//       });
//   }, []);

//   return (
//     <>
//       {/* ================= ANNOUNCEMENT BAR ================= */}
//       {announcements.length > 0 && (
//         <div
//           className={`fixed top-0 left-0 right-0 z-50 h-9 border-b ${
//             isDark
//               ? "bg-black text-white border-white/10"
//               : "bg-white text-black border-black/10"
//           }`}
//         >
//           <div className="marquee-container h-full flex items-center">
//             <div className="marquee-content text-xs uppercase tracking-[0.25em] font-medium gap-12">

//               {/* First Set */}
//               {announcements.map((item, index) => (
//                 <span key={index} className="px-6 whitespace-nowrap">
//                   {item.message}
//                 </span>
//               ))}

//               {/* Duplicate for seamless continuous scroll */}
//               {announcements.map((item, index) => (
//                 <span key={`dup-${index}`} className="px-6 whitespace-nowrap">
//                   {item.message}
//                 </span>
//               ))}

//             </div>
//           </div>
//         </div>
//       )}

//       {/* ================= HEADER ================= */}
//       <header
//         className={`fixed ${
//           announcements.length > 0 ? "top-9" : "top-0"
//         } left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           {/* Logo */}
//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? logoDark : logoLight}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           {/* Desktop Nav */}
//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           {/* Right Section */}
//           <div className="flex items-center gap-4">

//             {/* Theme Toggle */}
//             <button onClick={toggle} className="p-2 transition-opacity hover:opacity-70">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Cart */}
//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span
//                   className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
//                     isDark
//                       ? "bg-white text-black"
//                       : "bg-black text-white"
//                   }`}
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>

//           </div>
//         </div>

//         {/* Mobile Nav */}
//         <AnimatePresence>
//           {mobileOpen && (
//             <motion.nav
//               initial={{ height: 0, opacity: 0 }}
//               animate={{ height: "auto", opacity: 1 }}
//               exit={{ height: 0, opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               className={`md:hidden overflow-hidden border-t ${
//                 isDark
//                   ? "bg-black border-white/10"
//                   : "bg-white border-black/10"
//               }`}
//             >
//               <div className="flex flex-col items-center gap-6 py-8">
//                 {navLinks.map((link) => (
//                   <Link
//                     key={link.to}
//                     to={link.to}
//                     onClick={() => setMobileOpen(false)}
//                     className="text-sm tracking-widest uppercase"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//               </div>
//             </motion.nav>
//           )}
//         </AnimatePresence>

//       </header>
//     </>
//   );
// };

// export default Header;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import logoLight from "@/assets/Rutnuglogo.png";
import logoDark from "@/assets/Rutnug1.jpeg";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Header = () => {
  const { totalItems } = useCart();
  const { isDark, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<any[]>([]);

  // ✅ Fetch from Django backend
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/auth/announcements/")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAnnouncements(data);
        }
      })
      .catch((error) => {
        console.error("Announcement fetch error:", error);
      });
  }, []);

  return (
    <>
      {/* ===============================
          ANNOUNCEMENT BAR
      =============================== */}
      {announcements.length > 0 && (
        <div
          className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
            isDark ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <div className="h-full flex items-center">
            <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">

              {/* First Loop */}
              {announcements.map((item, index) => (
                <span key={index} className="px-6">
                  {item.message}
                </span>
              ))}

              {/* Duplicate Loop for smooth continuous scroll */}
              {announcements.map((item, index) => (
                <span key={`duplicate-${index}`} className="px-6">
                  {item.message}
                </span>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* ===============================
          HEADER
      =============================== */}
      <header
        className={`fixed ${
          announcements.length > 0 ? "top-9" : "top-0"
        } left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
          isDark
            ? "bg-black border-white/10 text-white"
            : "bg-white border-black/10 text-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={isDark ? logoDark : logoLight}
              alt="RUTNUG Logo"
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
            <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
              RUTNUG
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">

            {/* Theme Toggle */}
            <button onClick={toggle} className="p-2 transition-opacity hover:opacity-70">
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2">
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span
                  className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
                    isDark
                      ? "bg-white text-black"
                      : "bg-black text-white"
                  }`}
                >
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden border-t ${
                isDark
                  ? "bg-black border-white/10"
                  : "bg-white border-black/10"
              }`}
            >
              <div className="flex flex-col items-center gap-6 py-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm tracking-widest uppercase"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>

      </header>
    </>
  );
};

export default Header;


// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { ShoppingBag, Sun, Moon, Menu, X } from "lucide-react";
// import { useCart } from "@/context/CartContext";
// import { useTheme } from "@/context/ThemeContext";
// import { motion, AnimatePresence } from "framer-motion";
// import logoLight from "@/assets/Rutnuglogo.png";
// import logoDark from "@/assets/Rutnug1.jpeg";

// const navLinks = [
//   { to: "/", label: "Home" },
//   { to: "/shop", label: "Shop" },
//   { to: "/about", label: "About" },
//   { to: "/contact", label: "Contact" },
// ];

// const DEFAULT_ANNOUNCEMENTS = [
//   { message: "Free Shipping Worldwide" },
//   { message: "New Collection Live Now" },
//   { message: "24/7 Online Store" },
//   { message: "Luxury Without Limits" },
// ];

// const Header = () => {
//   const { totalItems } = useCart();
//   const { isDark, toggle } = useTheme();
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [announcements, setAnnouncements] = useState<any[]>([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/api/auth/announcements/")
//       .then((res) => res.json())
//       .then((data) => {
//         if (Array.isArray(data) && data.length > 0) {
//           setAnnouncements(data);
//         } else {
//           setAnnouncements(DEFAULT_ANNOUNCEMENTS);
//         }
//       })
//       .catch(() => {
//         setAnnouncements(DEFAULT_ANNOUNCEMENTS);
//       });
//   }, []);

//   return (
//     <>
//       {/* ANNOUNCEMENT BAR */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 h-9 overflow-hidden ${
//           isDark ? "bg-white text-black" : "bg-black text-white"
//         }`}
//       >
//         <div className="h-full flex items-center">
//           <div className="whitespace-nowrap animate-marquee flex items-center text-xs tracking-[0.25em] uppercase font-medium">

//             {/* First Loop */}
//             {announcements.map((item, index) => (
//               <span key={index} className="px-6">
//                 {item.message}
//               </span>
//             ))}

//             {/* Duplicate for smooth scroll */}
//             {announcements.map((item, index) => (
//               <span key={`duplicate-${index}`} className="px-6">
//                 {item.message}
//               </span>
//             ))}

//           </div>
//         </div>
//       </div>

//       {/* HEADER */}
//       <header
//         className={`fixed top-9 left-0 right-0 z-40 backdrop-blur-md border-b transition-colors duration-300 ${
//           isDark
//             ? "bg-black border-white/10 text-white"
//             : "bg-white border-black/10 text-black"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">

//           <Link to="/" className="flex items-center gap-3">
//             <img
//               src={isDark ? logoDark : logoLight}
//               alt="RUTNUG Logo"
//               className="h-12 md:h-16 w-auto object-contain"
//             />
//             <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//               RUTNUG
//             </span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.to}
//                 to={link.to}
//                 className="relative text-sm font-medium tracking-widest uppercase hover:opacity-70 transition-opacity after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current after:transition-all hover:after:w-full"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </nav>

//           <div className="flex items-center gap-4">
//             <button onClick={toggle} className="p-2">
//               {isDark ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             <Link to="/cart" className="relative p-2">
//               <ShoppingBag size={18} />
//               {totalItems > 0 && (
//                 <span
//                   className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
//                     isDark
//                       ? "bg-white text-black"
//                       : "bg-black text-white"
//                   }`}
//                 >
//                   {totalItems}
//                 </span>
//               )}
//             </Link>

//             <button
//               className="md:hidden p-2"
//               onClick={() => setMobileOpen(!mobileOpen)}
//             >
//               {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//             </button>
//           </div>

//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;
