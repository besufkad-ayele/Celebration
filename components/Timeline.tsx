import React, { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';

const stages = [
  {
    age: "0 - 3",
    label: "The Sovereign Spirit",
    title: "The I Rule This House",
    description: "Saron enters the building. Communication was mostly high-pitched screams and adorable smiles. First word was 'More'.",
    image: "/timeline/0-7.png"
  },
  {
    age: "4 - 10",
    label: "Fort Architecture Specialist",
    title: "Playground Critic",
    description: "Mastered the art of 'Puppy Dog Eyes'. Spent 90% of her time negotiating bedtime and building literal forts.",
    image: "/timeline/8-14.png"
  },
  {
    age: "11 - 15",
    label: "Director of Drama Operations",
    title: "The Main Character",
    description: "Middle school drama was a full-time job. Perfected the 'I'm not mad, just disappointed' look. Iconic fashion.",
    image: "/timeline/15-18.png"
  },
  {
    age: "16 - 19",
    label: "Expert in Selective Listening",
    title: "The 'Adult-ish' Era",
    description: "Got a license (parents' stress: 100%). Thought she knew everything. Hint: She did not. Eyeliner: On point.",
    image: "/timeline/18-24.png"
  },
  {
    age: "20 - 23",
    label: "Caffeine Dependency Specialist",
    title: "Caffeine & Chaos",
    description: "The University years. Survived on 3 hours of sleep, iced coffee, and pure ambition. Adulting is a scam.",
    image: "/timeline/recent.png"
  },
  {
    age: "24 - 25",
    label: "Chief Slay Executive",
    title: "Quarter-Life Queen",
    description: "25 years of brilliance. CEO of her own destiny. Master of the perfect selfie and skincare secrets.",
    image: "/hero-image-card.png"
  },
  {
    age: "Future",
    label: "The Next Chapter",
    title: "Infinite Horizon",
    description: "The best is yet to come. Unwritten stories, new mountaintops, and even more caffeine-fueled victories.",
    image: "/birthday-cake.png"
  }
];

const LOCAL_GALLERY = [
  "/gallery/recent.png",
  "/gallery/0-7.png",
  "/gallery/IMG_1850.png",
  "/gallery/8-14.png",
  "/gallery/12-18.png",
  "/gallery/18-24.png",
  "/gallery/recent1.png",
  "/gallery/IMG_2393.png",
  "/gallery/recent2.png",
  "/gallery/0-7(1).png",
  "/gallery/recent3.png",
  "/gallery/recent4.png",
  "/gallery/18-24(2).png",
  "/gallery/recent5.png",
  "/gallery/0-7(2).png",
  "/gallery/recen6.png",
  "/gallery/recent7.png",
  "/gallery/18-24(3).png",
  "/gallery/recent8.png",
  "/gallery/0-7(3).png",
  "/gallery/recent9.png",
  "/gallery/photo_2026-03-11_18-36-57.png",
  "/gallery/photo_2026-03-11_18-36-59.png",
  "/gallery/photo_2026-03-11_18-37-01.png",
  "/gallery/photo_2026-03-11_18-37-05.png",
  "/gallery/photo_2026-03-11_18-37-06.png",
  "/gallery/photo_2026-03-11_18-37-22.png",
  "/gallery/photo_2026-03-11_18-37-24.png",
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Total rotation: 360 degrees
  const totalRotation = useTransform(smoothProgress, [0, 1], [0, -360]);
  const centerScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1]);

  return (
    <section
      ref={containerRef}
      className="relative h-[600vh] bg-[#020202] text-white overflow-visible"
    >
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-pink-500/5 rounded-full blur-[200px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        {/* The Central Hub */}
        <div className="relative z-50 flex flex-col items-center justify-center">
          <motion.div
            style={{ scale: centerScale }}
            className="relative flex flex-col items-center"
          >
            {/* Pulsing Aura */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-48 h-48 bg-pink-500/10 rounded-full blur-[80px]"
            />

            <h2 className="font-display text-6xl md:text-8xl font-black tracking-tighter text-white/80 drop-shadow-2xl z-10">
              SARON
            </h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-pink-400/40 to-transparent mt-3" />
            <p className="mt-4 font-mono text-[9px] uppercase tracking-[0.6em] text-pink-400/50">
              The Journey
            </p>
          </motion.div>
        </div>

        {/* The Orbit Container */}
        <motion.div
          style={{ rotate: totalRotation }}
          className="absolute w-[95vw] h-[95vw] md:w-[75vw] md:h-[75vw] rounded-full border border-white/[0.03] flex items-center justify-center"
        >
          {stages.map((stage, index) => {
            const angle = (index / stages.length) * 360;
            const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 44 : 38; // Increased radius for space

            return (
              <OrbitCard
                key={index}
                stage={stage}
                angle={angle}
                radius={radius}
                totalRotation={totalRotation}
                index={index}
                scrollYProgress={smoothProgress}
              />
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
          <span className="font-mono text-[10px] uppercase tracking-[0.4em]">Scroll to orbit</span>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </section>
  );
}

function OrbitCard({ stage, angle, radius, totalRotation, index, scrollYProgress }: any) {
  // Compensatory rotation so the card stays upright
  const compensatoryRotation = useTransform(totalRotation, (r: number) => -r);

  // Calculate if the card is "active" (at the top/center)
  // We want to scale it up and show details when it's at a certain angle
  // Map index to scroll position
  const start = index / stages.length;
  const end = (index + 0.8) / stages.length;

  const opacity = useTransform(scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    [0.1, 1, 1, 0.1]
  );

  const scale = useTransform(scrollYProgress,
    [start - 0.1, start, end, end + 0.1],
    [0.7, 1.2, 1.2, 0.7]
  );

  const detailX = useTransform(scrollYProgress,
    [start - 0.05, start, end, end + 0.05],
    [50, 0, 0, -50]
  );

  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        translateX: `calc(${Math.cos((angle - 90) * (Math.PI / 180)) * radius}vw)`,
        translateY: `calc(${Math.sin((angle - 90) * (Math.PI / 180)) * radius}vw)`,
        rotate: compensatoryRotation,
        opacity,
        scale
      }}
      className="z-20 flex flex-col items-center group cursor-pointer"
    >
      {/* The Image Ring */}
      <div className="relative">
        {/* Glow effect when active */}
        <motion.div
          style={{ opacity: useTransform(opacity, [0.8, 1], [0, 0.4]) }}
          className="absolute -inset-6 bg-pink-500 rounded-full blur-[30px] pointer-events-none"
        />

        <div className="relative w-32 h-44 md:w-48 md:h-64 rounded-[1.5rem] overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:border-pink-500/30 transition-colors duration-500">
          <img
            src={stage.image}
            alt={stage.title}
            className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          {/* Label inside card */}
          <div className="absolute bottom-4 left-4 right-4">
            <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-pink-400 mb-0.5 block">
              Phase {index + 1}
            </span>
            <h4 className="text-base font-display font-bold text-white mb-0.5">
              {stage.label}
            </h4>
            <div className="h-[1px] w-6 bg-pink-500 rounded-full" />
          </div>
        </div>
      </div>

      {/* Detail Panel - Appearing next to focused card */}
      <motion.div
        style={{
          x: detailX,
          opacity: useTransform(opacity, [0.5, 0.8], [0, 1])
        }}
        className="absolute top-1/2 left-[125%] -translate-y-1/2 w-48 md:w-64 pointer-events-none"
      >
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-pink-400/40 uppercase tracking-[0.3em]">{stage.age}</span>
            <h3 className="text-xl md:text-2xl font-display font-black text-white leading-tight">
              {stage.title}
            </h3>
            <p className="text-xs md:text-sm text-white/40 font-serif leading-relaxed italic">
              "{stage.description}"
            </p>
          </div>

          {/* Progress Gallery - 7 Photos */}
          <div className="grid grid-cols-4 gap-1 pt-2">
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-lg overflow-hidden border border-white/10 bg-white/5"
              >
                <img
                  src={LOCAL_GALLERY[(index + i) % LOCAL_GALLERY.length]}
                  alt="progress"
                  className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
            <div className="aspect-square rounded-lg border border-pink-500/20 bg-pink-500/5 flex items-center justify-center">
              <span className="text-[10px] text-pink-400 font-mono tracking-tighter">+{index * 3}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Connector Line to Center */}
      <div
        className="absolute top-1/2 left-1/2 w-px h-[20vw] bg-gradient-to-t from-pink-500/40 to-transparent origin-bottom opacity-10"
        style={{ transform: `rotate(180deg) translate(-50%, -100%)` }}
      />
    </motion.div>
  );
}
