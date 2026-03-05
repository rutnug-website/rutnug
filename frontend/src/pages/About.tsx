// import { motion } from 'framer-motion';

// const About = () => {
//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-3xl mx-auto px-4 py-16 space-y-12"
//       >
//         <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-center leading-tight">
//           About RUTNUG
//         </h1>

//         <div className="space-y-8 text-base md:text-lg font-sans leading-relaxed text-muted-foreground">
//           <p>
//             RUTNUG is a premium clothing brand focused on modern fashion, minimal design, and high-quality craftsmanship. The brand blends contemporary streetwear with timeless elegance, offering apparel that reflects confidence, individuality, and comfort.
//           </p>
//           <p>
//             Born from the belief that fashion should be both a statement and an experience, RUTNUG delivers a seamless digital shopping experience with a refined aesthetic and bold identity.
//           </p>
//           <p>
//             Every piece in our collection is crafted with meticulous attention to detail — from fabric selection to the final stitch. We source premium materials from around the world, ensuring that each garment meets the highest standards of quality and durability.
//           </p>
//           <p>
//             Our design philosophy is rooted in the intersection of streetwear culture and high fashion. We believe that true style transcends trends — it's about creating pieces that feel as good as they look, season after season.
//           </p>
//           <p>
//             RUTNUG operates 24/7, delivering style without limits. Whether you're in the heart of the city or anywhere across the globe, our digital storefront is always open, always curated, always RUTNUG.
//           </p>
//         </div>
//       </motion.div>
//     </main>
//   );
// };

// export default About;


// import { motion } from "framer-motion";
// import { useTheme } from "@/context/ThemeContext";

// // ✅ IMPORT WITH SPACES (EXACT FILE NAMES)
// import logoLight from "@/assets/IMG_1760 copy.png";       // Black logo (Light theme)
// import logoDark from "@/assets/IMG_1760 copywhite.png";   // White logo (Dark theme)

// const About = () => {
//   const { isDark } = useTheme();

//   return (
//     <main className="pt-24 pb-16 min-h-screen">

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-4xl mx-auto px-4 py-16 space-y-12"
//       >

//         {/* Heading (Removed RUTNUG) */}
//         <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-center leading-tight">
//           About
//         </h1>

//         {/* 🔥 THEME BASED BANNER IMAGE */}
//         <div className="flex justify-center">
//           <img
//             src={isDark ? logoDark : logoLight}
//             alt="About Banner"
//             className="w-full max-w-3xl h-auto object-contain rounded-xl shadow-lg"
//           />
//         </div>

//         {/* Content */}
//         <div className="space-y-8 text-base md:text-lg font-sans leading-relaxed text-muted-foreground">
//           <p>
//             RUTNUG is a premium clothing brand focused on modern fashion, minimal design, and high-quality craftsmanship. The brand blends contemporary streetwear with timeless elegance, offering apparel that reflects confidence, individuality, and comfort.
//           </p>

//           <p>
//             Born from the belief that fashion should be both a statement and an experience, RUTNUG delivers a seamless digital shopping experience with a refined aesthetic and bold identity.
//           </p>

//           <p>
//             Every piece in our collection is crafted with meticulous attention to detail — from fabric selection to the final stitch. We source premium materials from around the world, ensuring that each garment meets the highest standards of quality and durability.
//           </p>

//           <p>
//             Our design philosophy is rooted in the intersection of streetwear culture and high fashion. We believe that true style transcends trends — it's about creating pieces that feel as good as they look, season after season.
//           </p>

//           <p>
//             RUTNUG operates 24/7, delivering style without limits. Whether you're in the heart of the city or anywhere across the globe, our digital storefront is always open, always curated, always RUTNUG.
//           </p>
//         </div>

//       </motion.div>
//     </main>
//   );
// };

// export default About;


// import { motion } from "framer-motion";
// import { useTheme } from "@/context/ThemeContext";

// // ✅ IMPORT WITH SPACES (EXACT FILE NAMES)
// import logoLight from "@/assets/IMG_1760 copy.png";       // Black logo (Light theme)
// import logoDark from "@/assets/IMG_1760 copywhite.png";   // White logo (Dark theme)

// const About = () => {
//   const { isDark } = useTheme();

//   return (
//     <main className="pt-24 pb-16 min-h-screen">
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.7 }}
//         className="max-w-3xl mx-auto px-4 py-16 space-y-12"
//       >
        
//         {/* Heading */}
//         <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-center leading-tight">
//           About
//         </h1>

//         {/* 🔥 Smaller Theme Based Logo */}
//         <div className="flex justify-center">
//           <img
//             src={isDark ? logoDark : logoLight}
//             alt="About Banner"
//             className="w-48 md:w-64 lg:w-80 h-auto object-contain"
//           />
//         </div>

//         {/* Content */}
//         <div className="space-y-8 text-base md:text-lg font-sans leading-relaxed text-muted-foreground">
//           <p>
//             RUTNUG is a premium clothing brand focused on modern fashion, minimal design, and high-quality craftsmanship. The brand blends contemporary streetwear with timeless elegance, offering apparel that reflects confidence, individuality, and comfort.
//           </p>

//           <p>
//             Born from the belief that fashion should be both a statement and an experience, RUTNUG delivers a seamless digital shopping experience with a refined aesthetic and bold identity.
//           </p>

//           <p>
//             Every piece in our collection is crafted with meticulous attention to detail — from fabric selection to the final stitch. We source premium materials from around the world, ensuring that each garment meets the highest standards of quality and durability.
//           </p>

//           <p>
//             Our design philosophy is rooted in the intersection of streetwear culture and high fashion. We believe that true style transcends trends — it's about creating pieces that feel as good as they look, season after season.
//           </p>

//           <p>
//             RUTNUG operates 24/7, delivering style without limits. Whether you're in the heart of the city or anywhere across the globe, our digital storefront is always open, always curated, always RUTNUG.
//           </p>
//         </div>

//       </motion.div>
//     </main>
//   );
// };

// export default About;


import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

// ✅ IMPORT WITH SPACES (EXACT FILE NAMES)
import logoLight from "@/assets/IMG_1760 copy.png";       // Black logo (Light theme)
import logoDark from "@/assets/IMG_1760 copywhite.png";   // White logo (Dark theme)

const About = () => {
  const { isDark } = useTheme();

  return (
    <main className="pt-24 pb-16 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-4 py-16 space-y-12"
      >
        
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide text-center leading-tight">
          About
        </h1>

        {/* 🔥 Smaller Theme Based Logo */}
        <div className="flex justify-center">
          <img
            src={isDark ? logoDark : logoLight}
            alt="About Banner"
            className="w-32 md:w-40 lg:w-48 h-auto object-contain"
          />
        </div>

        {/* Content */}
        <div className="space-y-8 text-base md:text-lg font-sans leading-relaxed text-muted-foreground">
          <p>
            RUTNUG is a premium clothing brand focused on modern fashion, minimal design, and high-quality craftsmanship. The brand blends contemporary streetwear with timeless elegance, offering apparel that reflects confidence, individuality, and comfort.
          </p>

          <p>
            Born from the belief that fashion should be both a statement and an experience, RUTNUG delivers a seamless digital shopping experience with a refined aesthetic and bold identity.
          </p>

          <p>
            Every piece in our collection is crafted with meticulous attention to detail — from fabric selection to the final stitch. We source premium materials from around the world, ensuring that each garment meets the highest standards of quality and durability.
          </p>

          <p>
            Our design philosophy is rooted in the intersection of streetwear culture and high fashion. We believe that true style transcends trends — it's about creating pieces that feel as good as they look, season after season.
          </p>

          <p>
            RUTNUG operates 24/7, delivering style without limits. Whether you're in the heart of the city or anywhere across the globe, our digital storefront is always open, always curated, always RUTNUG.
          </p>
        </div>

      </motion.div>
    </main>
  );
};

export default About;
