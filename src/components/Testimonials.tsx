import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Quote } from 'lucide-react';

const notes = [
  {
    name: "Abebe K.",
    role: "Best Friend",
    message: "To the girl who knows all my secrets and still loves me. Your heart is pure gold, Saron. Happy Birthday!",
    image: "https://i.pravatar.cc/150?u=abebe"
  },
  {
    name: "Martha T.",
    role: "Sister",
    message: "Growing up with you has been the greatest gift. You're not just my sister, but my inspiration. Love you!",
    image: "https://i.pravatar.cc/150?u=martha"
  },
  {
    name: "Samuel G.",
    role: "Brother",
    message: "You've always been the strong one. Your resilience and kindness are unmatched. Keep shining, sis!",
    image: "https://i.pravatar.cc/150?u=samuel"
  },
  {
    name: "Helen D.",
    role: "Cousin",
    message: "Every memory with you is a treasure. Your laughter is infectious and your spirit is beautiful. Have the best day!",
    image: "https://i.pravatar.cc/150?u=helen"
  },
  {
    name: "Dawit M.",
    role: "Friend",
    message: "Happy Birthday, Saron! You're a true gem. May this year bring you as much joy as you bring to others.",
    image: "https://i.pravatar.cc/150?u=dawit"
  },
  {
    name: "Sara L.",
    role: "Bestie",
    message: "To many more years of laughter, adventures, and late-night talks. You're the best, Saron!",
    image: "https://i.pravatar.cc/150?u=sara"
  }
];

export default function Testimonials() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-display mb-6">Messages From the Hearts That Know You</h2>
            <p className="text-white/40 font-serif text-xl max-w-2xl mx-auto italic">
              A few words from the people who treasure you most.
            </p>
          </motion.div>
        </div>

        <motion.div style={{ x }} className="flex gap-8 px-6">
          {notes.map((note, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[450px] p-8 md:p-12 glass rounded-3xl relative group"
            >
              <Quote className="absolute top-8 right-8 text-pink-500/20" size={64} />
              
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={note.image}
                  alt={note.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-pink-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xl font-display font-semibold text-white">{note.name}</h4>
                  <p className="text-pink-400 text-sm uppercase tracking-widest">{note.role}</p>
                </div>
              </div>

              <p className="text-white/70 font-serif text-lg md:text-xl leading-relaxed italic">
                "{note.message}"
              </p>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Progress Indicator */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10">
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-full bg-pink-500 origin-left"
          />
        </div>
      </div>
    </section>
  );
}
