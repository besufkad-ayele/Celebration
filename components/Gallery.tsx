import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Camera } from 'lucide-react';

const ALL_PHOTOS = [
  { url: "/Gallary/recent.png", caption: "The current vibe", size: "large" },
  { url: "/Gallary/0-7.png", caption: "Where it all began", size: "small" },
  { url: "/Gallary/IMG_1850.png", caption: "Timeless elegance", size: "wide" },
  { url: "/Gallary/8-14.png", caption: "Growing up fast", size: "small" },
  { url: "/Gallary/12-18.png", caption: "Teenage dreams", size: "large" },
  { url: "/Gallary/18-24.png", caption: "University days", size: "small" },
  { url: "/Gallary/recent1.png", caption: "Golden hour", size: "small" },
  { url: "/Gallary/IMG_2393.png", caption: "Radiance redefined", size: "wide" },
  { url: "/Gallary/recent2.png", caption: "Pure joy", size: "small" },
  { url: "/Gallary/0-7(1).png", caption: "Pure innocence", size: "large" },
  { url: "/Gallary/recent3.png", caption: "Night out energy", size: "small" },
  { url: "/Gallary/recent4.png", caption: "Sunset smiles", size: "small" },
  { url: "/Gallary/18-24(2).png", caption: "Adventure awaits", size: "wide" },
  { url: "/Gallary/recent5.png", caption: "Serene moments", size: "small" },
  { url: "/Gallary/0-7(2).png", caption: "Little princess", size: "large" },
  { url: "/Gallary/recen6.png", caption: "Celebration time", size: "small" },
  { url: "/Gallary/recent7.png", caption: "Candid laughter", size: "small" },
  { url: "/Gallary/18-24(3).png", caption: "Bestie moments", size: "wide" },
  { url: "/Gallary/recent8.png", caption: "Classic beauty", size: "small" },
  { url: "/Gallary/0-7(3).png", caption: "Those curls!", size: "large" },
  { url: "/Gallary/recent9.png", caption: "Final count down", size: "small" },
  { url: "/Gallary/photo_2026-03-11_18-36-57.png", caption: "Dreamy eyes", size: "small" },
  { url: "/Gallary/photo_2026-03-11_18-36-59.png", caption: "Stylishly bold", size: "wide" },
  { url: "/Gallary/photo_2026-03-11_18-37-01.png", caption: "Soft whispers", size: "small" },
  { url: "/Gallary/photo_2026-03-11_18-37-05.png", caption: "Infinite charm", size: "large" },
  { url: "/Gallary/photo_2026-03-11_18-37-06.png", caption: "A heart of gold", size: "small" },
  { url: "/Gallary/photo_2026-03-11_18-37-22.png", caption: "Elegance in motion", size: "small" },
  { url: "/Gallary/photo_2026-03-11_18-37-24.png", caption: "Simply iconic", size: "wide" },
];

export default function Gallery() {
  const [visibleCount, setVisibleCount] = useState(6);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, ALL_PHOTOS.length));
  };

  const hasMore = visibleCount < ALL_PHOTOS.length;

  return (
    <section className="py-32 bg-black overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 mb-8 text-white/40"
          >
            <Camera className="w-8 h-8" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-display mb-8 tracking-tight text-white/90"
          >
            The <span className="text-white">Collection</span>
          </motion.h2>
          <p className="text-white/40 font-serif text-xl italic max-w-2xl mx-auto">
            A curated selection of moments that define the beautiful journey of your 25 years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[350px]">
          <AnimatePresence mode="popLayout">
            {ALL_PHOTOS.slice(0, visibleCount).map((photo, index) => (
              <motion.div
                key={photo.url}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 6) * 0.1,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
                className={`relative group overflow-hidden rounded-[2.5rem] bg-white/5 border border-white/10 ${photo.size === 'large' ? 'md:row-span-2' :
                  photo.size === 'wide' ? 'md:col-span-2' : ''
                  }`}
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-10">
                  <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/60 text-xs tracking-widest uppercase mb-4 border border-white/10">
                      Snap
                    </span>
                    <p className="text-2xl text-white font-display leading-tight">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {hasMore && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 text-center"
          >
            <button
              onClick={showMore}
              className="group relative inline-flex items-center gap-4 px-12 py-6 rounded-full bg-white text-black font-display text-xl overflow-hidden transition-all hover:pr-14 active:scale-95"
            >
              <span className="relative z-10 font-bold">Watch More</span>
              <ChevronDown className="w-6 h-6 transition-transform group-hover:translate-y-1 relative z-10" />
              <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
