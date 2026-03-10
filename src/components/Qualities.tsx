import React from 'react';
import { motion } from 'motion/react';
import { Heart, Sparkles, Sun, Moon, Star, Zap } from 'lucide-react';

const qualities = [
  { icon: Heart, title: "Kind Heart", desc: "Your empathy knows no bounds, always putting others before yourself." },
  { icon: Sparkles, title: "Beautiful Soul", desc: "There's a light within you that shines through everything you do." },
  { icon: Zap, title: "Strong Spirit", desc: "Your resilience in the face of challenges is truly inspiring." },
  { icon: Sun, title: "Inspiring Smile", desc: "A single smile from you can brighten even the darkest of days." },
  { icon: Star, title: "Endless Positivity", desc: "You find the silver lining in every cloud, spreading hope everywhere." },
  { icon: Moon, title: "Loving Energy", desc: "The warmth you radiate makes everyone feel safe and cherished." },
];

export default function Qualities() {
  return (
    <section className="py-32 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-display mb-6"
          >
            Why You Are So Special
          </motion.h2>
          <p className="text-white/40 font-serif text-xl italic">
            It's the little things, and the big things, that make you who you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {qualities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 glass rounded-[2.5rem] group hover:bg-white/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <item.icon className="text-pink-400" size={32} />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-white/50 font-serif leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
