import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';

const notes = [
  {
    name: "The Bestie",
    role: "Soul Sister",
    message: "To the girl who can talk for 4 hours and still forget the initial point of the story. You're the best kind of chaos, Saron! Happy 25th!",
    image: "/gallery/0-7(1).png"
  },
  {
    name: "Abebe T.",
    role: "Brother / Stylist",
    message: "The only person I know who can make an oversized hoodie look like a Vogue cover. Stop stealing my chargers, but keep being iconic.",
    image: "/gallery/recent1.png"
  },
  {
    name: "Martha G.",
    role: "The Voice of Reason",
    message: "Saron is the only person who can keep 20 browser tabs open and 20 friendships thriving. A true multitasking legend in a pair of cool sneakers.",
    image: "/gallery/0-7(2).png"
  },
  {
    name: "The Squad",
    role: "Day Ones",
    message: "Still waiting for you to pick the restaurant after saying 'it doesn't matter'. We wouldn't trade your indecisive sweetness for anything!",
    image: "/gallery/recent2.png"
  },
  {
    name: "Abenezer Takele",
    role: "A friends Friend",
    message: "From building forts to navigating 25 years of life. You've always had the biggest heart and the loudest laugh. Happy Birthday, Sari!",
    image: "/gallery/0-7(3).png"
  },
  {
    name: "Besufkad  Ayele.",
    role: "(Cousin) / Secret Keeper 😇👍🏽",
    message: "Thank you for being the person I can call at 2 AM to discuss nothing and everything. Your grace is matched only by your legendary skincare routine.",
    image: "/gallery/recent3.png"
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
