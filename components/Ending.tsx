import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Star, Sparkles, RefreshCw, Send } from 'lucide-react';

export default function Ending() {
  const [isWished, setIsWished] = useState(false);

  const handleWish = () => {
    setIsWished(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f472b6', '#fb923c', '#ffffff']
    });
  };

  return (
    <section className="py-32 bg-black relative overflow-hidden flex flex-col items-center justify-center min-h-screen">
      {/* Background Stars */}
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
              "May this year bring you more laughter, more love, more blessings, and more beautiful memories than ever before."
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-serif text-white/60 italic leading-relaxed"
            >
              "You are deeply loved, truly appreciated, and wonderfully celebrated today. Never forget how much you mean to us."
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
              className={`group relative inline-flex items-center gap-3 px-10 py-5 rounded-full font-display text-xl transition-all duration-500 ${
                isWished ? 'bg-pink-500/20 text-pink-300' : 'bg-white text-black hover:bg-pink-500 hover:text-white'
              }`}
            >
              <Sparkles size={24} />
              <span>{isWished ? "Wish Made!" : "Make a Birthday Wish"}</span>
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
