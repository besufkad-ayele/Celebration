import React from 'react';
import { motion } from 'framer-motion';

const stages = [
  {
    year: "Childhood",
    title: "The Beginning of a Beautiful Story",
    description: "A little star was born, bringing endless light and laughter to everyone around her. From the very first steps to the curious eyes exploring the world.",
    image: "https://picsum.photos/seed/childhood/800/600",
    age: "Early Years"
  },
  {
    year: "School Days",
    title: "Learning, Laughing, Growing",
    description: "The years of discovery, making first friends, and finding your passions. Every day was a new adventure in the world of knowledge.",
    image: "https://picsum.photos/seed/school/800/600",
    age: "The Formative Years"
  },
  {
    year: "Teenage Memories",
    title: "Finding Your Own Voice",
    description: "Navigating the beautiful chaos of youth, building lifelong bonds, and starting to dream bigger than ever before.",
    image: "https://picsum.photos/seed/teen/800/600",
    age: "The Dreamer"
  },
  {
    year: "Major Achievement",
    title: "The Reward of Dedication",
    description: "That moment when hard work met opportunity. A milestone that proved your strength, intelligence, and unwavering spirit.",
    image: "https://picsum.photos/seed/success/800/600",
    age: "The Achiever"
  },
  {
    year: "Present Moment",
    title: "Radiating Grace and Wisdom",
    description: "The incredible woman you've become today. Inspiring, kind, and more beautiful with every passing year.",
    image: "https://picsum.photos/seed/present/800/600",
    age: "Today"
  },
  {
    year: "The Future",
    title: "Endless Horizons Await",
    description: "Your journey is just beginning. May your future be as bright as your smile and as vast as your heart.",
    image: "https://picsum.photos/seed/future/800/600",
    age: "Always Dreaming"
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display mb-4"
          >
            Your Growth Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 font-serif text-lg italic"
          >
            A visual memory lane of the beautiful chapters of your life
          </motion.p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />

          <div className="space-y-24">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <img
                      src={stage.image}
                      alt={stage.title}
                      className="relative w-full aspect-[4/3] object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 glass px-4 py-1 rounded-full text-xs uppercase tracking-widest font-medium">
                      {stage.age}
                    </div>
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <div className={`max-w-md ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                    <span className="text-pink-400 font-display italic text-2xl mb-2 block">
                      {stage.year}
                    </span>
                    <h3 className="text-3xl font-display font-semibold mb-4 text-white">
                      {stage.title}
                    </h3>
                    <p className="text-white/60 font-serif leading-relaxed text-lg">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
