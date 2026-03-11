import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Star, Sparkles, RefreshCw, Send } from 'lucide-react';

export default function Ending() {
  const [isWished, setIsWished] = useState(false);
  const [shootingStars, setShootingStars] = useState<{ id: number; x: number; y: number; angle: number; delay: number }[]>([]);

  const handleWish = () => {
    setIsWished(true);

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb923c', '#ffffff']
    });

    // Generate random shooting stars
    const newStars = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      angle: 45 + Math.random() * 90, // angle of shooting
      delay: Math.random() * 2,
    }));
    setShootingStars(newStars);
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Background stars (static/twinkling) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: Math.random() }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + Math.random() * 3, repeat: Infinity }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Shooting Stars Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {shootingStars.map((star) => (
          <motion.div
            key={star.id}
            initial={{
              x: `${star.x}%`,
              y: `${star.y}%`,
              opacity: 0,
              width: 0,
            }}
            animate={{
              x: [`${star.x}%`, `${star.x + 20}%`],
              y: [`${star.y}%`, `${star.y + 20}%`],
              opacity: [0, 1, 0],
              width: [0, 150, 0],
            }}
            transition={{
              duration: 0.8,
              delay: star.delay,
              ease: "easeOut"
            }}
            className="absolute h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              transform: `rotate(${star.angle}deg)`,
            }}
          />
        ))}

        {/* Persistent Shooting Stars for extra magic */}
        {isWished && [...Array(3)].map((_, i) => (
          <motion.div
            key={`persist-${i}`}
            initial={{ x: "-10%", y: `${20 + i * 20}%`, opacity: 0, width: 0 }}
            animate={{
              x: "110%",
              y: `${10 + i * 20}%`,
              opacity: [0, 0.8, 0],
              width: [0, 200, 0]
            }}
            transition={{
              duration: 1.5,
              delay: 1 + i * 2,
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-pink-400 to-transparent rotate-[15deg]"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="inline-flex items-center justify-center p-4 rounded-full glass mb-8 animate-float">
            <Heart className="text-pink-500 fill-pink-500" size={48} />
          </div>

          <h2 className="text-5xl md:text-8xl font-display mb-12 leading-tight">
            A Final Wish for You, <br />
            <span className="text-gradient">Saron</span>
          </h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-3xl font-serif text-white/80 italic leading-relaxed"
            >
              "May your coffee always be hot, your skincare routine always be effective, and your browser tabs never crash."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-serif text-white/60 italic leading-relaxed"
            >
              "You've officially conquered 25 years of life with zero broken bones and 100% iconic energy. Here's to another decade of being the main event."
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl font-serif text-white/40 italic mt-12 bg-white/5 py-8 px-6 rounded-3xl border border-white/10"
            >
              "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace." <br />
              <span className="text-xs uppercase tracking-widest mt-4 block opacity-50">— Numbers 6:24-26</span>
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center gap-12"
        >
          <div className="text-center">
            <p className="text-pink-400 font-display italic text-2xl mb-2">With all our love,</p>
            <p className="text-white font-display text-4xl font-semibold">Your Friends & Family</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <button
              onClick={handleWish}
              disabled={isWished}
              className={`group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-display text-xl transition-all duration-500 ${isWished ? 'bg-pink-500/20 text-pink-300' : 'bg-white text-black hover:bg-pink-500 hover:text-white ripple'
                }`}
            >
              <Sparkles size={24} />
              <span>{isWished ? "Wish Made!" : "Make a Birthday Wish"}</span>
              {!isWished && (
                <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20 pointer-events-none" />
              )}
            </button>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full glass font-display text-xl transition-all duration-500 hover:bg-white/10"
            >
              <RefreshCw size={24} className="group-hover:rotate-180 transition-transform duration-700" />
              <span>Replay the Surprise</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Final Floating Message Cards (Visual Only) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: '100vh', x: `${Math.random() * 100}vw`, opacity: 0 }}
            animate={{
              y: '-20vh',
              x: `${Math.random() * 100}vw`,
              opacity: [0, 0.5, 0],
              rotate: [0, 15, -15, 0]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 3
            }}
            className="absolute p-6 glass rounded-2xl text-xs font-serif italic text-white/40"
          >
            {["Stay beautiful", "Keep dreaming", "You are enough", "Love always", "Shine bright", "Be happy", "Forever young", "Pure magic"][i]}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
