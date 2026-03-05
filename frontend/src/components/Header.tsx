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
    fetch("https://api.rutnug.com/api/auth/announcements/")
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
            <button
              onClick={toggle}
              className="p-2 transition-opacity hover:opacity-70"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative p-2">
              <ShoppingBag size={18} />
              {totalItems > 0 && (
                <span
                  className={`absolute -top-1 -right-1 w-5 h-5 text-xs flex items-center justify-center rounded-full ${
                    isDark ? "bg-white text-black" : "bg-black text-white"
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
                isDark ? "bg-black border-white/10" : "bg-white border-black/10"
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
