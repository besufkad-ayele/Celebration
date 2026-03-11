import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { url: "https://picsum.photos/seed/saron1/800/1000", caption: "Your happiest smile", size: "large" },
  { url: "https://picsum.photos/seed/saron2/800/800", caption: "A memory full of laughter", size: "small" },
  { url: "https://picsum.photos/seed/saron3/1000/800", caption: "A day we'll always remember", size: "wide" },
  { url: "https://picsum.photos/seed/saron4/800/800", caption: "Pure joy captured", size: "small" },
  { url: "https://picsum.photos/seed/saron5/800/1000", caption: "Radiating beauty", size: "large" },
  { url: "https://picsum.photos/seed/saron6/800/800", caption: "The light in the room", size: "small" },
];

export default function Gallery() {
  return (
    <section className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display mb-6"
          >
            A Gallery of Beautiful Moments
          </motion.h2>
          <p className="text-white/40 font-serif text-xl italic">
            Capturing the essence of your beautiful spirit through the years.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl ${
                photo.size === 'large' ? 'md:row-span-2' : 
                photo.size === 'wide' ? 'md:col-span-2' : ''
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <p className="text-white font-serif italic text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
