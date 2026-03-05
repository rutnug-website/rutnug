// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { CartProvider } from "@/context/CartContext";
// import { ThemeProvider } from "@/context/ThemeContext";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";

// import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import OrderStatus from "./pages/OrderStatus";
// import OrderTracking from "./pages/OrderTracking";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <ThemeProvider>
//         <CartProvider>
//           <TooltipProvider>
//             <Toaster />
//             <Sonner />

//             <BrowserRouter>
//               {/* Scroll To Top Component */}
//               <ScrollToTop />

//               <Header />

//               <Routes>
//                 <Route path="/" element={<Index />} />
//                 <Route path="/shop" element={<Shop />} />
//                 <Route path="/product/:id" element={<ProductDetails />} />
//                 <Route path="/cart" element={<Cart />} />
//                 <Route path="/checkout" element={<Checkout />} />
//                 <Route path="/order-status" element={<OrderStatus />} />
//                 <Route path="/order-tracking" element={<OrderTracking />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//                 <Route path="*" element={<NotFound />} />
//               </Routes>

//               <Footer />
//             </BrowserRouter>

//           </TooltipProvider>
//         </CartProvider>
//       </ThemeProvider>
//     </QueryClientProvider>
//   );
// };

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import { CartProvider } from "@/context/CartContext";
// import { ThemeProvider } from "@/context/ThemeContext";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";

// import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import OrderStatus from "./pages/OrderStatus";
// import OrderTracking from "./pages/OrderTracking";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => {

//   return (

//     <QueryClientProvider client={queryClient}>

//       <ThemeProvider>

//         <CartProvider>

//           <TooltipProvider>

//             <Toaster />
//             <Sonner />

//             <BrowserRouter>

//               <ScrollToTop />

//               <Header />

//               <Routes>

//                 <Route path="/" element={<Index />} />

//                 <Route path="/shop" element={<Shop />} />

//                 <Route path="/product/:id" element={<ProductDetails />} />

//                 <Route path="/cart" element={<Cart />} />

//                 <Route path="/checkout" element={<Checkout />} />

//                 <Route path="/order-status" element={<OrderStatus />} />

//                 <Route path="/order-tracking" element={<OrderTracking />} />

//                 <Route path="/about" element={<About />} />

//                 <Route path="/contact" element={<Contact />} />

//                 <Route path="*" element={<NotFound />} />

//               </Routes>

//               <Footer />

//             </BrowserRouter>

//           </TooltipProvider>

//         </CartProvider>

//       </ThemeProvider>

//     </QueryClientProvider>

//   );

// };

// export default App;


// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";

// import {
//   QueryClient,
//   QueryClientProvider
// } from "@tanstack/react-query";

// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

// import { CartProvider } from "@/context/CartContext";
// import { ThemeProvider } from "@/context/ThemeContext";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import ScrollToTop from "@/components/ScrollToTop";

// import Index from "./pages/Index";
// import Shop from "./pages/Shop";
// import ProductDetails from "./pages/ProductDetails";
// import Cart from "./pages/Cart";
// import Checkout from "./pages/Checkout";
// import OrderStatus from "./pages/OrderStatus";
// import OrderTracking from "./pages/OrderTracking";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import NotFound from "./pages/NotFound";


// // ✅ ONLY ONE QueryClient
// const queryClient = new QueryClient();


// export default function App() {

//   return (

//     <QueryClientProvider client={queryClient}>

//       <ThemeProvider>

//         <CartProvider>

//           <TooltipProvider>

//             <BrowserRouter>

//               <ScrollToTop />

//               <Header />

//               <main className="pt-24 min-h-screen">

//                 <Routes>

//                   <Route path="/" element={<Index />} />

//                   <Route path="/shop" element={<Shop />} />

//                   <Route path="/product/:id" element={<ProductDetails />} />

//                   <Route path="/cart" element={<Cart />} />

//                   <Route path="/checkout" element={<Checkout />} />

//                   <Route path="/order-status" element={<OrderStatus />} />

//                   <Route path="/order-tracking" element={<OrderTracking />} />

//                   <Route path="/about" element={<About />} />

//                   <Route path="/contact" element={<Contact />} />

//                   <Route path="*" element={<NotFound />} />

//                 </Routes>

//               </main>

//               <Footer />

//             </BrowserRouter>

//             <Toaster />

//             <Sonner />

//           </TooltipProvider>

//         </CartProvider>

//       </ThemeProvider>

//     </QueryClientProvider>

//   );

// }

import PaymentSuccess from "./pages/PaymentSuccess";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderStatus from "./pages/OrderStatus";
import OrderTracking from "./pages/OrderTracking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// ✅ Legal Pages
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermsConditions from "./pages/TermsConditions";

// ✅ ONLY ONE QueryClient
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <CartProvider>
          <TooltipProvider>
            <BrowserRouter>

              <ScrollToTop />

              <Header />

              <main className="pt-24 min-h-screen">
                <Routes>

                  {/* Main Pages */}
                  <Route path="/payment-success" element={<PaymentSuccess />} />
                  <Route path="/" element={<Index />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetails />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-status" element={<OrderStatus />} />
                  <Route path="/order-tracking" element={<OrderTracking />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />

                  {/* ✅ Legal Pages Routes */}
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/refund-policy" element={<RefundPolicy />} />
                  <Route path="/shipping-policy" element={<ShippingPolicy />} />
                  <Route path="/terms-conditions" element={<TermsConditions />} />

                  {/* 404 */}
                  <Route path="*" element={<NotFound />} />

                </Routes>
              </main>

              <Footer />

            </BrowserRouter>

            <Toaster />
            <Sonner />

          </TooltipProvider>
        </CartProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}