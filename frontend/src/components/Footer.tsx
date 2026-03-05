// import { Link } from 'react-router-dom';
// import { Instagram } from 'lucide-react';
// import rutnugLogoAlt from '@/assets/rutnug-logo-alt.png';

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {/* Brand */}
//           <div className="space-y-4">
//             <img src={rutnugLogoAlt} alt="RUTNUG" className="h-10 w-auto" />
//             <p className="text-sm opacity-70 font-sans leading-relaxed">
//               Premium fashion brand focused on modern design, minimal aesthetics, and uncompromising quality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-sans font-medium tracking-widest uppercase">Quick Links</h4>
//             <div className="flex flex-col gap-3">
//               {[
//                 { to: '/shop', label: 'Shop' },
//                 { to: '/about', label: 'About' },
//                 { to: '/contact', label: 'Contact' },
//                 { to: '/order-status', label: 'Order Status' },
//                 { to: '/order-tracking', label: 'Track Order' },
//               ].map(link => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="text-sm font-sans opacity-70 hover:opacity-100 transition-opacity"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-sans font-medium tracking-widest uppercase">Contact</h4>
//             <div className="space-y-2 text-sm font-sans opacity-70">
//               <p>Phone: 9010444438</p>
//               <p>Email: Rutnug208@gmail.com</p>
//               <p>Banjara Hills, Road No: 2,<br />Hyderabad – 500034</p>
//             </div>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-sans opacity-70 hover:opacity-100 transition-opacity"
//             >
//               <Instagram size={18} /> Instagram
//             </a>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
//           <p className="text-xs font-sans opacity-50">© 2026 RUTNUG. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Link } from 'react-router-dom';
// import { Instagram } from 'lucide-react';
// import rutnugLogoAlt from '@/assets/Rutnuglogo.png';

// const Footer = () => {
//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
//           {/* Brand */}
//           <div className="space-y-4">
            
//             {/* Logo + Name (Like Header) */}
//             <div className="flex items-center gap-3">
//               <img 
//                 src={rutnugLogoAlt} 
//                 alt="RUTNUG" 
//                 className="h-10 w-auto object-contain" 
//               />
//               <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//                 RUTNUG
//               </span>
//             </div>

//             <p className="text-sm opacity-70 font-sans leading-relaxed">
//               Premium fashion brand focused on modern design, minimal aesthetics, and uncompromising quality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-sans font-medium tracking-widest uppercase">
//               Quick Links
//             </h4>
//             <div className="flex flex-col gap-3">
//               {[
//                 { to: '/shop', label: 'Shop' },
//                 { to: '/about', label: 'About' },
//                 { to: '/contact', label: 'Contact' },
//                 { to: '/order-status', label: 'Order Status' },
//                 { to: '/order-tracking', label: 'Track Order' },
//               ].map(link => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="text-sm font-sans opacity-70 hover:opacity-100 transition-opacity"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-sans font-medium tracking-widest uppercase">
//               Contact
//             </h4>
//             <div className="space-y-2 text-sm font-sans opacity-70">
//               <p>Phone: 9010444438</p>
//               <p>Email: Rutnug208@gmail.com</p>
//               <p>
//                 Banjara Hills, Road No: 2,<br />
//                 Hyderabad – 500034
//               </p>
//             </div>
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm font-sans opacity-70 hover:opacity-100 transition-opacity"
//             >
//               <Instagram size={18} /> Instagram
//             </a>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
//           <p className="text-xs font-sans opacity-50">
//             © 2026 RUTNUG. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import { Link } from "react-router-dom";
// import { Instagram } from "lucide-react";
// import { useTheme } from "@/context/ThemeContext";
// import logoLight from "@/assets/Rutnuglogo.png";   // Light mode logo
// import logoDark from "@/assets/Rutnug1.jpeg";      // Dark mode logo

// const Footer = () => {
//   const { isDark } = useTheme();

//   return (
//     <footer
//       className={`transition-colors duration-300 ${
//         isDark
//           ? "bg-black text-white"
//           : "bg-white text-black"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
//           {/* Brand */}
//           <div className="space-y-4">
            
//             {/* Logo + Name */}
//             <div className="flex items-center gap-3">
//               <img
//                 src={isDark ? logoDark : logoLight}
//                 alt="RUTNUG"
//                 className="h-10 w-auto object-contain transition-all duration-300"
//               />
//               <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//                 RUTNUG
//               </span>
//             </div>

//             <p className="text-sm opacity-70 leading-relaxed">
//               Premium fashion brand focused on modern design, minimal aesthetics, and uncompromising quality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-medium tracking-widest uppercase">
//               Quick Links
//             </h4>
//             <div className="flex flex-col gap-3">
//               {[
//                 { to: "/shop", label: "Shop" },
//                 { to: "/about", label: "About" },
//                 { to: "/contact", label: "Contact" },
//                 { to: "/order-status", label: "Order Status" },
//                 { to: "/order-tracking", label: "Track Order" },
//               ].map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="text-sm opacity-70 hover:opacity-100 transition-opacity"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-medium tracking-widest uppercase">
//               Contact
//             </h4>
//             <div className="space-y-2 text-sm opacity-70">
//               <p>Phone: 9010444438</p>
//               <p>Email: Rutnug208@gmail.com</p>
//               <p>
//                 Banjara Hills, Road No: 2,<br />
//                 Hyderabad – 500034
//               </p>
//             </div>

//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
//             >
//               <Instagram size={18} /> Instagram
//             </a>
//           </div>
//         </div>

//         <div
//           className={`mt-12 pt-8 text-center border-t ${
//             isDark
//               ? "border-white/20"
//               : "border-black/20"
//           }`}
//         >
//           <p className="text-xs opacity-50">
//             © 2026 RUTNUG. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


// import { Link } from "react-router-dom";
// import { Instagram } from "lucide-react";
// import { useTheme } from "@/context/ThemeContext";
// import logoLight from "@/assets/Rutnuglogo.png";
// import logoDark from "@/assets/Rutnug1.jpeg";

// const Footer = () => {
//   const { isDark } = useTheme();

//   return (
//     <footer
//       className={`transition-colors duration-300 ${
//         isDark
//           ? "bg-black text-white"
//           : "bg-white text-black"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
//           {/* Brand */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-3">
//               <img
//                 src={isDark ? logoDark : logoLight}
//                 alt="RUTNUG"
//                 className="h-10 w-auto object-contain transition-all duration-300"
//               />
//               <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
//                 RUTNUG
//               </span>
//             </div>

//             <p className="text-sm opacity-70 leading-relaxed">
//               Premium fashion brand focused on modern design, minimal aesthetics, and uncompromising quality.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-medium tracking-widest uppercase">
//               Quick Links
//             </h4>
//             <div className="flex flex-col gap-3">
//               {[
//                 { to: "/shop", label: "Shop" },
//                 { to: "/about", label: "About" },
//                 { to: "/contact", label: "Contact" },
//                 { to: "/order-status", label: "Order Status" },
//                 { to: "/order-tracking", label: "Track Order" },

//                 // ✅ Added Legal Pages
//                 { to: "/privacy-policy", label: "Privacy Policy" },
//                 { to: "/refund-policy", label: "Refund Policy" },
//                 { to: "/shipping-policy", label: "Shipping Policy" },
//                 { to: "/terms-conditions", label: "Terms & Conditions" },
//               ].map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   className="text-sm opacity-70 hover:opacity-100 transition-opacity"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div className="space-y-4">
//             <h4 className="text-sm font-medium tracking-widest uppercase">
//               Contact
//             </h4>
//             <div className="space-y-2 text-sm opacity-70">
//               <p>Phone: 9010444438</p>
//               <p>Email: Rutnug208@gmail.com</p>
//               <p>
//                 Banjara Hills, Road No: 2,<br />
//                 Hyderabad – 500034
//               </p>
//             </div>

//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
//             >
//               <Instagram size={18} /> Instagram
//             </a>
//           </div>
//         </div>

//         <div
//           className={`mt-12 pt-8 text-center border-t ${
//             isDark
//               ? "border-white/20"
//               : "border-black/20"
//           }`}
//         >
//           <p className="text-xs opacity-50">
//             © 2026 RUTNUG. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import logoLight from "@/assets/Rutnuglogo.png";
import logoDark from "@/assets/Rutnug1.jpeg";

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={isDark ? logoDark : logoLight}
                alt="RUTNUG"
                className="h-10 w-auto object-contain transition-all duration-300"
              />
              <span className="text-lg md:text-xl font-bold tracking-[0.3em] uppercase">
                RUTNUG
              </span>
            </div>

            <p className="text-sm opacity-70 leading-relaxed">
              Premium fashion brand focused on modern design, minimal aesthetics, and uncompromising quality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest uppercase">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/shop", label: "Shop" },
                { to: "/about", label: "About" },
                { to: "/contact", label: "Contact" },

                // ✅ Legal Pages
                { to: "/privacy-policy", label: "Privacy Policy" },
                { to: "/refund-policy", label: "Refund Policy" },
                { to: "/shipping-policy", label: "Shipping Policy" },
                { to: "/terms-conditions", label: "Terms & Conditions" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest uppercase">
              Contact
            </h4>
            <div className="space-y-2 text-sm opacity-70">
              <p>Phone: 9010444438</p>
              <p>Email: Rutnug208@gmail.com</p>
              <p>
                Banjara Hills, Road No: 2,<br />
                Hyderabad – 500034
              </p>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 text-center border-t ${
            isDark ? "border-white/20" : "border-black/20"
          }`}
        >
          <p className="text-xs opacity-50">
            © 2026 RUTNUG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;