import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';

export default function Highlights() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-3 rounded-full glass mb-6"
          >
            <Heart className="text-pink-400 fill-pink-400" size={24} />
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-display mb-6">A Moment We’ll Never Forget</h2>
          <p className="text-white/50 font-serif text-xl max-w-2xl mx-auto italic">
            "Some moments are etched in our hearts forever, not because they were perfect, but because they were full of you."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-pink-500/30 to-transparent blur-3xl rounded-3xl opacity-50" />
            <img
              src="https://picsum.photos/seed/moment-1/1000/1200"
              alt="Special Moment"
              className="relative rounded-3xl shadow-2xl w-full aspect-[4/5] object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 glass p-8 rounded-2xl max-w-xs hidden md:block">
              <Sparkles className="text-yellow-400 mb-4" size={32} />
              <p className="text-white/80 font-serif italic text-lg">
                "That day, your laughter was the only music we needed."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-pink-400">
                <div className="h-[1px] w-12 bg-pink-400/50" />
                <span className="uppercase tracking-[0.3em] text-sm font-semibold">One of Your Proudest Chapters</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display leading-tight">
                The Day You Conquered Your Biggest Dream
              </h3>
              <p className="text-white/60 font-serif text-lg leading-relaxed">
                We watched you pour your heart and soul into this journey. There were moments of doubt, but your spirit never wavered. When you finally achieved it, the pride we felt was beyond words. You showed us all what true resilience looks like.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="space-y-2">
                <div className="text-3xl font-display text-pink-300">2024</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">The Year of Growth</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-display text-orange-300">∞</div>
                <div className="text-white/40 text-sm uppercase tracking-widest">Endless Possibilities</div>
              </div>
            </div>

            <div className="pt-8">
              <blockquote className="border-l-2 border-pink-500/50 pl-8 py-4 italic text-white/70 font-serif text-xl">
                "Your journey is a testament to the beauty of a soul that never stops reaching for the stars."
              </blockquote>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
