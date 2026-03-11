import React, { useMemo, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Background Parallax
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0.08, 0.15]);

  // Title Animations (Starts Left, Moves Right)
  const titleOpacity = useTransform(scrollYProgress, [0, 0.35, 0.5], [1, 1, 0]);
  const titleX = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "50%"]);
  const titleY = useTransform(scrollYProgress, [0, 0.35], [0, -20]);
  const smoothTitleX = useSpring(titleX, { stiffness: 100, damping: 25 });

  // Card Animations (Starts Right, Moves Left)
  const cardX = useTransform(scrollYProgress, [0.1, 0.65], ["0%", "-115%"]);
  const cardY = useTransform(scrollYProgress, [0.2, 0.6], [0, -30]);
  const cardRotateY = useTransform(scrollYProgress, [0.1, 0.7], [0, 180]);
  const cardScale = useTransform(scrollYProgress, [0.1, 0.7], [1, 1.1]);

  // Spring physics
  const smoothCardX = useSpring(cardX, { stiffness: 90, damping: 22 });
  const smoothCardY = useSpring(cardY, { stiffness: 90, damping: 22 });
  const smoothRotateY = useSpring(cardRotateY, { stiffness: 80, damping: 20 });
  const smoothScale = useSpring(cardScale, { stiffness: 100, damping: 25 });

  // Affection Text Animations (Enters from Right as Card leaves)
  const affectionOpacity = useTransform(scrollYProgress, [0.45, 0.75], [0, 1]);
  const affectionX = useTransform(scrollYProgress, [0.45, 0.75], ["40px", "0px"]);
  const affectionY = useTransform(scrollYProgress, [0.45, 0.75], ["20px", "0px"]);
  const smoothAffectionX = useSpring(affectionX, { stiffness: 100, damping: 25 });

  const sparkles = useMemo(
    () =>
      Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 2 + Math.random() * 2,
        duration: 2.5 + Math.random() * 2,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <main className="bg-[#040404] text-white">
      <section ref={sectionRef} className="relative min-h-[250vh] overflow-clip">
        {/* Background Layers */}
        <motion.div
          style={{ scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <img
            src="/hero image card.png"
            alt=""
            aria-hidden
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(251,146,60,0.08),transparent_50%)]" />
        </motion.div>

        <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="sticky top-0 z-10 flex h-screen items-center justify-center overflow-hidden">
          <div className="w-full max-w-7xl px-6 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-24 relative">

              {/* LEFT COLUMN: Initial Title Text */}
              <div className="relative z-20">
                <motion.div
                  style={{
                    opacity: titleOpacity,
                    x: typeof window !== 'undefined' && window.innerWidth >= 768 ? smoothTitleX : 0,
                    y: titleY
                  }}
                  className="w-full max-w-xl text-center md:text-left"
                >
                  <p className="mb-4 text-[10px] md:text-xs uppercase tracking-[0.5em] text-pink-300/80">
                    Saron Teklay • 2026 • Blessed & Highly Favored
                  </p>
                  <h1 className="text-5xl md:text-8xl font-light leading-none tracking-[0.06em] mb-6">
                    A Portrait <br />
                    <span className="italic font-serif text-pink-400">of Grace</span>
                  </h1>
                  <p className="text-sm md:text-base leading-relaxed text-white/40 font-serif max-w-sm mx-auto md:mx-0">
                    Scroll to unfold the journey. Every chapter is a testament to the light you bring into our lives.
                  </p>
                </motion.div>
              </div>

              {/* RIGHT COLUMN: Hero Card + Affection Text */}
              <div className="relative z-30 flex flex-col items-center md:items-end">

                {/* The Flipping Card Container */}
                <motion.div
                  style={{
                    x: typeof window !== 'undefined' && window.innerWidth >= 768 ? smoothCardX : 0,
                    y: smoothCardY
                  }}
                  className="relative h-[60vh] w-full max-w-[320px] md:max-w-[440px] z-40"
                >
                  <div className="absolute inset-0" style={{ perspective: 1500 }}>
                    <motion.div
                      style={{ rotateY: smoothRotateY, scale: smoothScale }}
                      className="relative h-full w-full [transform-style:preserve-3d]"
                    >
                      {/* Portrait Front side */}
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] [backface-visibility:hidden]">
                        <img src="/hero image card.png" alt="Saron" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10" />
                      </div>

                      {/* Birthday Cake Back side */}
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-[#080808] shadow-2xl [backface-visibility:hidden] [transform:rotateY(180deg)]">
                        <img src="/birthday-cake.png" alt="Cake" className="h-[65%] w-full object-cover" />
                        <div className="flex h-[35%] flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]">
                          <p className="text-[9px] uppercase tracking-[0.4em] text-pink-300 mb-1">Happy Birthday</p>
                          <h2 className="text-2xl md:text-4xl font-display tracking-[0.1em] text-pink-400 uppercase">Sari</h2>
                          <p className="mt-2 text-[10px] md:text-sm italic text-white/40 font-serif font-light">
                            25 years of brilliance, grace, and abundant blessings.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Affection Aside (Appears in the right column as card moves left) */}
                <motion.aside
                  style={{
                    opacity: affectionOpacity,
                    x: smoothAffectionX,
                    y: affectionY,
                  }}
                  className="absolute top-1/2 -translate-y-1/2 right-0 w-full max-w-sm pointer-events-none mt-12 md:mt-0"
                >
                  <div className="text-center md:text-left">
                    <h3 className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-pink-300 font-bold mb-6">Affection</h3>
                    <p className="text-2xl md:text-4xl font-light leading-snug text-white/90 font-serif italic mb-6">
                      "A heart that reflects God's goodness. In every year, your light grows brighter."
                    </p>
                    <div className="h-[1px] w-12 md:w-20 bg-pink-500/30 mb-8 mx-auto md:mx-0" />
                    <p className="text-sm md:text-base leading-relaxed text-white/30 font-serif font-light">
                      You carry the strength of your heart with effortless elegance. Today we celebrate the amazing light you are.
                    </p>
                  </div>

                  {/* Sparkling particles */}
                  <div className="absolute -inset-10 pointer-events-none" aria-hidden>
                    {sparkles.map((sparkle) => (
                      <motion.span
                        key={sparkle.id}
                        className="absolute rounded-full bg-pink-400"
                        style={{
                          left: `${sparkle.x}%`,
                          top: `${sparkle.y}%`,
                          width: `${sparkle.size}px`,
                          height: `${sparkle.size}px`,
                        }}
                        animate={{
                          y: [0, -40, 0],
                          opacity: [0.1, 0.7, 0.1],
                          scale: [1, 1.5, 1]
                        }}
                        transition={{
                          duration: sparkle.duration,
                          delay: sparkle.delay,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    ))}
                  </div>
                </motion.aside>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint indicator */}
        <motion.div
          style={{ opacity: titleOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-50"
        >
          <div className="h-10 md:h-16 w-[1px] bg-gradient-to-b from-white/20 to-transparent" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] text-white/20">Scroll</span>
        </motion.div>
      </section>
    </main>
  );
}
