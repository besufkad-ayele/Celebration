"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Heart, Sparkles, Sun, Moon, Star, Zap } from "lucide-react";

const qualities = [
  {
    icon: Heart,
    title: "Kind Heart",
    desc: "Your empathy knows no bounds, always putting others before yourself. A rare gift that the world desperately needs — and you give it freely, beautifully, endlessly.",
    color: "#F43F5E",
    accentColor: "#FB7185",
    darkColor: "#4C0519",
    image: "/qualities/kind.png",
    number: "01",
    quote: "The best portion of a good life is the little acts of kindness.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Soul",
    desc: "There's a light within you that shines through everything you do. Pure, radiant, unforgettable. People are drawn to your warmth like moths to a flame.",
    color: "#A855F7",
    accentColor: "#C084FC",
    darkColor: "#3B0764",
    image: "/qualities/beautiful.png",
    number: "02",
    quote: "Beauty begins the moment you decide to be yourself.",
  },
  {
    icon: Zap,
    title: "Strong Spirit",
    desc: "Your resilience in the face of challenges is truly inspiring. Nothing can break what you've built within. Every storm you've weathered has made you unshakable.",
    color: "#FBBF24",
    accentColor: "#FCD34D",
    darkColor: "#451A03",
    image: "/qualities/strong.png",
    number: "03",
    quote: "She stood in the storm, and when the wind did not blow her away, she adjusted her sails.",
  },
  {
    icon: Sun,
    title: "Radiant Smile",
    desc: "A single smile from you can brighten even the darkest of days. It's your superpower — effortless, genuine, and absolutely magnetic.",
    color: "#F97316",
    accentColor: "#FB923C",
    darkColor: "#431407",
    image: "/qualities/radiant.png",
    number: "04",
    quote: "Let your smile change the world, don't let the world change your smile.",
  },
  {
    icon: Star,
    title: "Endless Positivity",
    desc: "You find the silver lining in every cloud, spreading hope everywhere you go. A beacon of light in a world that sometimes forgets to look up.",
    color: "#14B8A6",
    accentColor: "#2DD4BF",
    darkColor: "#042F2E",
    image: "/qualities/loving.png",
    number: "05",
    quote: "Positivity is not about ignoring the negative. It's about overcoming it.",
  },
  {
    icon: Moon,
    title: "Loving Energy",
    desc: "The warmth you radiate makes everyone feel safe and cherished. You are home to so many hearts — a shelter, a comfort, a place of peace.",
    color: "#6366F1",
    accentColor: "#818CF8",
    darkColor: "#1E1B4B",
    image: "/qualities/postive.png",
    number: "06",
    quote: "Where there is love there is life.",
  },
];

export default function Qualities() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Magnetic hover for icon
  const handleIconHover = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      scale: 1.15,
      rotation: x * 0.05,
      duration: 0.3,
      ease: "power2.out",
      overwrite: "auto",
    });
  }, []);

  const handleIconLeave = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
      overwrite: "auto",
    });
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // =====================================================
      // HEADER — Cinematic masked text reveal
      // =====================================================
      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".q-header",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      headerTL
        .from(".q-header-badge", {
          opacity: 0,
          scale: 0.7,
          y: 30,
          duration: 0.7,
          ease: "back.out(2.5)",
        })
        .from(
          ".q-header-line",
          {
            y: 120,
            opacity: 0,
            rotateX: -50,
            stagger: 0.1,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.3"
        )
        .from(
          ".q-header-sub",
          { opacity: 0, y: 25, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".q-header-divider",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.8,
            ease: "power2.inOut",
          },
          "-=0.3"
        );

      // =====================================================
      // EACH QUALITY CARD — Full immersive pinned experience
      // =====================================================
      const cards = gsap.utils.toArray<HTMLElement>(".q-card-section");

      cards.forEach((card, i) => {
        const isEven = i % 2 === 0;

        // Get elements
        const imageWrap = card.querySelector(".q-image-wrap");
        const imageInner = card.querySelector(".q-image-inner");
        const imageOverlay = card.querySelector(".q-image-overlay");
        const contentWrap = card.querySelector(".q-content-wrap");
        const number = card.querySelector(".q-number");
        const numberStroke = card.querySelector(".q-number-stroke");
        const iconWrap = card.querySelector(".q-icon-wrap");
        const subtitle = card.querySelector(".q-subtitle");
        const title = card.querySelector(".q-title");
        const titleLine = card.querySelector(".q-title-line");
        const desc = card.querySelector(".q-desc");
        const quote = card.querySelector(".q-quote");
        const quoteLine = card.querySelector(".q-quote-line");
        const morphShape = card.querySelector(".q-morph-shape");
        const ringLarge = card.querySelector(".q-ring-large");
        const ringSmall = card.querySelector(".q-ring-small");
        const dots = card.querySelectorAll(".q-particle");
        const cornerLines = card.querySelectorAll(".q-corner-line");
        const accentLine = card.querySelector(".q-accent-line");
        const bottomBar = card.querySelector(".q-bottom-bar");

        // Pinned card timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        // --- Phase 1: Background & Image reveal (0 - 0.8) ---

        // Morph shape — blob that expands
        if (morphShape) {
          tl.fromTo(
            morphShape,
            { scale: 0, opacity: 0, rotation: -30 },
            {
              scale: 1,
              opacity: 0.08,
              rotation: 0,
              duration: 0.6,
              ease: "power2.out",
            },
            0
          );
        }

        // Image clip-path reveal — diagonal wipe
        if (imageWrap) {
          const clipFrom = isEven
            ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
            : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)";
          const clipTo = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)";

          tl.fromTo(
            imageWrap,
            { clipPath: clipFrom },
            { clipPath: clipTo, duration: 1, ease: "power3.inOut" },
            0.1
          );
        }

        // Ken Burns
        if (imageInner) {
          tl.fromTo(
            imageInner,
            { scale: 1.5, x: isEven ? -30 : 30 },
            { scale: 1.05, x: 0, duration: 2, ease: "power1.out" },
            0.1
          );
        }

        // Image overlay
        if (imageOverlay) {
          tl.fromTo(
            imageOverlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 },
            0.3
          );
        }

        // --- Phase 2: Rings & decorations (0.3 - 0.8) ---

        if (ringLarge) {
          tl.fromTo(
            ringLarge,
            {
              scale: 0,
              opacity: 0,
              rotation: isEven ? -90 : 90,
              strokeDashoffset: 600,
            },
            {
              scale: 1,
              opacity: 0.12,
              rotation: 0,
              strokeDashoffset: 0,
              duration: 1,
              ease: "power2.out",
            },
            0.3
          );
        }

        if (ringSmall) {
          tl.fromTo(
            ringSmall,
            { scale: 0, opacity: 0, rotation: isEven ? 60 : -60 },
            {
              scale: 1,
              opacity: 0.08,
              rotation: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            0.5
          );
        }

        // Corner accent lines
        if (cornerLines.length) {
          tl.fromTo(
            cornerLines,
            { scaleX: 0, scaleY: 0 },
            {
              scaleX: 1,
              scaleY: 1,
              stagger: 0.08,
              duration: 0.5,
              ease: "power2.out",
            },
            0.5
          );
        }

        // Particles
        if (dots.length) {
          tl.fromTo(
            dots,
            { scale: 0, opacity: 0 },
            {
              scale: 1,
              opacity: 0.5,
              stagger: { each: 0.02, from: "random" },
              duration: 0.3,
              ease: "back.out(2)",
            },
            0.5
          );
        }

        // --- Phase 3: Number reveal (0.5 - 0.8) ---

        if (numberStroke) {
          tl.fromTo(
            numberStroke,
            {
              y: 150,
              opacity: 0,
              scale: 0.3,
              rotateZ: isEven ? -20 : 20,
            },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateZ: 0,
              duration: 0.8,
              ease: "power4.out",
            },
            0.4
          );
        }

        if (number) {
          tl.fromTo(
            number,
            { y: 100, opacity: 0, scale: 0.5 },
            {
              y: 0,
              opacity: 0.04,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            0.45
          );
        }

        // --- Phase 4: Content reveal (0.7 - 1.4) ---

        if (iconWrap) {
          tl.fromTo(
            iconWrap,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.7,
              ease: "elastic.out(1.2, 0.5)",
            },
            0.7
          );
        }

        if (subtitle) {
          tl.fromTo(
            subtitle,
            { x: isEven ? -40 : 40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            0.8
          );
        }

        if (accentLine) {
          tl.fromTo(
            accentLine,
            { scaleX: 0, transformOrigin: isEven ? "left" : "right" },
            { scaleX: 1, duration: 0.5, ease: "power2.out" },
            0.85
          );
        }

        if (title) {
          tl.fromTo(
            title,
            { y: 70, opacity: 0, skewY: isEven ? 4 : -4 },
            {
              y: 0,
              opacity: 1,
              skewY: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            0.9
          );
        }

        if (titleLine) {
          tl.fromTo(
            titleLine,
            { scaleX: 0, transformOrigin: isEven ? "left" : "right" },
            { scaleX: 1, duration: 0.6, ease: "power2.out" },
            1.1
          );
        }

        if (desc) {
          tl.fromTo(
            desc,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            1.15
          );
        }

        if (quoteLine) {
          tl.fromTo(
            quoteLine,
            { scaleY: 0, transformOrigin: "top" },
            { scaleY: 1, duration: 0.5, ease: "power2.out" },
            1.3
          );
        }

        if (quote) {
          tl.fromTo(
            quote,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            1.4
          );
        }

        if (bottomBar) {
          tl.fromTo(
            bottomBar,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            1.5
          );
        }

        // --- Phase 5: Hold & subtle motion (1.5 - 2.0) ---

        // Slight parallax shift on all content during hold
        if (contentWrap) {
          tl.to(
            contentWrap,
            { y: -20, duration: 0.5, ease: "power1.inOut" },
            1.6
          );
        }

        if (imageInner) {
          tl.to(
            imageInner,
            { scale: 1, y: -10, duration: 0.5, ease: "power1.inOut" },
            1.6
          );
        }

        // =====================================================
        // CONTINUOUS ANIMATIONS (outside scroll timeline)
        // =====================================================

        // Icon float
        if (iconWrap) {
          gsap.to(iconWrap, {
            y: -6,
            rotation: 4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
        }

        // Particles float
        dots.forEach((dot) => {
          gsap.to(dot, {
            y: `random(-20, 20)`,
            x: `random(-15, 15)`,
            opacity: `random(0.1, 0.6)`,
            scale: `random(0.5, 1.5)`,
            duration: `random(2, 6)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 3,
          });
        });

        // Morph shape slow rotation
        if (morphShape) {
          gsap.to(morphShape, {
            rotation: 360,
            duration: 40,
            repeat: -1,
            ease: "none",
          });
        }

        // Rings slow spin
        if (ringLarge) {
          gsap.to(ringLarge, {
            rotation: "+=360",
            duration: 60,
            repeat: -1,
            ease: "none",
          });
        }
        if (ringSmall) {
          gsap.to(ringSmall, {
            rotation: "-=360",
            duration: 45,
            repeat: -1,
            ease: "none",
          });
        }
      });

      // =====================================================
      // BACKGROUND ORBS — Floating
      // =====================================================
      gsap.utils.toArray<HTMLElement>(".q-bg-orb").forEach((orb) => {
        gsap.to(orb, {
          y: `random(-50, 50)`,
          x: `random(-30, 30)`,
          duration: `random(6, 12)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 4,
        });
      });

      // =====================================================
      // OUTRO
      // =====================================================
      gsap.from(".q-outro > *", {
        scrollTrigger: { trigger: ".q-outro", start: "top 85%" },
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 0.7,
        ease: "power2.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-night-950">
      {/* ===== HEADER ===== */}
      <div className="q-header relative min-h-[70vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-mesh opacity-15" />
          <div className="q-bg-orb absolute top-[20%] left-[15%] w-72 h-72 rounded-full bg-candy-500/[0.03] blur-[130px]" />
          <div className="q-bg-orb absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-royal-500/[0.03] blur-[140px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="q-header-badge inline-flex items-center gap-2.5 px-6 py-3 rounded-full glass-card mb-10">
            <Heart className="w-4 h-4 text-candy-400" />
            <span className="text-sm font-heading font-semibold text-night-200 uppercase tracking-[0.2em]">
              What Makes You Special
            </span>
            <Heart className="w-4 h-4 text-candy-400" />
          </div>

          {/* Title */}
          <div className="overflow-hidden mb-3">
            <h2 className="q-header-line font-display text-display-lg md:text-display-xl font-bold text-white leading-none">
              Why You Are
            </h2>
          </div>
          <div className="overflow-hidden mb-8">
            <h2 className="q-header-line font-display text-display-md md:text-display-lg font-bold text-gradient-birthday leading-tight">
              So Incredibly Special
            </h2>
          </div>

          {/* Subtitle */}
          <p className="q-header-sub text-night-400 text-lg md:text-xl max-w-lg mx-auto font-accent italic text-xl leading-relaxed">
            It&apos;s the little things, and the big things, that make you who
            you are.
          </p>

          {/* Divider */}
          <div className="q-header-divider w-20 h-[2px] bg-gradient-birthday mx-auto mt-10" />

          {/* Scroll hint */}
          <div className="mt-12 flex flex-col items-center gap-3">
            <div className="w-[1px] h-10 bg-gradient-to-b from-transparent via-candy-400/40 to-transparent" />
            <div className="w-5 h-8 rounded-full border border-night-600 flex items-start justify-center p-1">
              <div className="w-0.5 h-2 rounded-full bg-candy-400 animate-bounce" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night-950 to-transparent" />
      </div>

      {/* ===== QUALITY CARDS — Each pinned full-screen ===== */}
      {qualities.map((item, i) => {
        const isEven = i % 2 === 0;
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="q-card-section relative w-full h-screen overflow-hidden"
          >
            {/* ===== IMAGE LAYER ===== */}
            <div
              className="q-image-wrap absolute inset-0"
              style={{
                clipPath: isEven
                  ? "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)"
                  : "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)",
              }}
            >
              <div
                className="q-image-inner absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                  transform: "scale(1.5)",
                }}
              />
            </div>

            {/* ===== IMAGE OVERLAY ===== */}
            <div
              className="q-image-overlay absolute inset-0 opacity-0"
              style={{
                background: isEven
                  ? `linear-gradient(90deg, ${item.darkColor}f5 0%, ${item.darkColor}dd 35%, ${item.darkColor}99 55%, ${item.darkColor}40 75%, transparent 100%)`
                  : `linear-gradient(270deg, ${item.darkColor}f5 0%, ${item.darkColor}dd 35%, ${item.darkColor}99 55%, ${item.darkColor}40 75%, transparent 100%)`,
              }}
            />

            {/* Second overlay for readability */}
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(ellipse at ${isEven ? "30% 50%" : "70% 50%"}, ${item.darkColor}cc 0%, transparent 70%)`,
              }}
            />

            {/* ===== DECORATIVE LAYER ===== */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Morph shape — organic blob */}
              <svg
                className="q-morph-shape absolute opacity-0"
                style={{
                  width: "min(60vw, 700px)",
                  height: "min(60vw, 700px)",
                  top: "50%",
                  left: isEven ? "-10%" : "auto",
                  right: isEven ? "auto" : "-10%",
                  transform: "translateY(-50%)",
                }}
                viewBox="0 0 200 200"
              >
                <path
                  d="M 100,10 C 140,10 180,30 190,70 C 200,110 185,150 155,175 C 125,200 75,200 45,175 C 15,150 0,110 10,70 C 20,30 60,10 100,10 Z"
                  fill={item.color}
                  opacity="0.15"
                />
              </svg>

              {/* Large ring */}
              <svg
                className="q-ring-large absolute opacity-0"
                style={{
                  width: "min(45vw, 500px)",
                  height: "min(45vw, 500px)",
                  top: "50%",
                  right: isEven ? "5%" : "auto",
                  left: isEven ? "auto" : "5%",
                  transform: "translateY(-50%)",
                }}
                viewBox="0 0 200 200"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="0.3"
                  strokeDasharray="600"
                  strokeDashoffset="600"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="0.15"
                  strokeDasharray="4 8"
                />
              </svg>

              {/* Small ring */}
              <svg
                className="q-ring-small absolute opacity-0"
                style={{
                  width: "min(20vw, 200px)",
                  height: "min(20vw, 200px)",
                  bottom: "15%",
                  left: isEven ? "20%" : "auto",
                  right: isEven ? "auto" : "20%",
                }}
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={item.accentColor}
                  strokeWidth="0.4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  fill="none"
                  stroke={item.accentColor}
                  strokeWidth="0.2"
                  strokeDasharray="3 5"
                />
              </svg>

              {/* Corner accent lines */}
              <div
                className="q-corner-line absolute top-8 w-16 h-[1px]"
                style={{
                  left: isEven ? "2rem" : "auto",
                  right: isEven ? "auto" : "2rem",
                  backgroundColor: `${item.color}30`,
                  transformOrigin: isEven ? "left" : "right",
                }}
              />
              <div
                className="q-corner-line absolute top-8 w-[1px] h-16"
                style={{
                  left: isEven ? "2rem" : "auto",
                  right: isEven ? "auto" : "2rem",
                  backgroundColor: `${item.color}30`,
                  transformOrigin: "top",
                }}
              />
              <div
                className="q-corner-line absolute bottom-8 w-16 h-[1px]"
                style={{
                  right: isEven ? "2rem" : "auto",
                  left: isEven ? "auto" : "2rem",
                  backgroundColor: `${item.color}20`,
                  transformOrigin: isEven ? "right" : "left",
                }}
              />
              <div
                className="q-corner-line absolute bottom-8 w-[1px] h-16"
                style={{
                  right: isEven ? "2rem" : "auto",
                  left: isEven ? "auto" : "2rem",
                  backgroundColor: `${item.color}20`,
                  transformOrigin: "bottom",
                }}
              />

              {/* Floating particles */}
              {Array.from({ length: 18 }).map((_, j) => (
                <div
                  key={j}
                  className="q-particle absolute rounded-full"
                  style={{
                    width: `${2 + Math.random() * 4}px`,
                    height: `${2 + Math.random() * 4}px`,
                    backgroundColor:
                      j % 3 === 0 ? item.color : item.accentColor,
                    top: `${5 + Math.random() * 90}%`,
                    left: `${5 + Math.random() * 90}%`,
                    opacity: 0,
                  }}
                />
              ))}
            </div>

            {/* ===== CONTENT LAYER ===== */}
            <div className="q-content-wrap relative z-10 h-full flex items-center">
              <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
                <div
                  className={`flex flex-col ${isEven ? "items-start" : "items-end"
                    } max-w-xl ${isEven ? "" : "ml-auto"}`}
                >
                  {/* ===== HUGE NUMBER (background) ===== */}
                  <div className="relative mb-0">
                    {/* Filled bg number */}
                    <span
                      className="q-number absolute font-heading font-black leading-none select-none"
                      style={{
                        fontSize: "clamp(10rem, 25vw, 22rem)",
                        color: item.color,
                        opacity: 0,
                        top: "-50%",
                        left: isEven ? "-15%" : "auto",
                        right: isEven ? "auto" : "-15%",
                        zIndex: 0,
                      }}
                    >
                      {item.number}
                    </span>

                    {/* Stroke number on top */}
                    <span
                      className="q-number-stroke relative font-heading font-black leading-none select-none block"
                      style={{
                        fontSize: "clamp(5rem, 12vw, 10rem)",
                        color: "transparent",
                        WebkitTextStroke: `2px ${item.color}60`,
                        zIndex: 1,
                      }}
                    >
                      {item.number}
                    </span>
                  </div>

                  {/* ===== ICON ===== */}
                  <div
                    className="q-icon-wrap mb-6 cursor-hover"
                    onMouseMove={handleIconHover}
                    onMouseLeave={handleIconLeave}
                  >
                    <div
                      className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl flex items-center justify-center backdrop-blur-md"
                      style={{
                        backgroundColor: `${item.color}12`,
                        border: `1px solid ${item.color}25`,
                        boxShadow: `0 0 40px ${item.color}10, 0 0 80px ${item.color}05`,
                      }}
                    >
                      <Icon
                        className="w-7 h-7 md:w-9 md:h-9"
                        style={{ color: item.color }}
                      />
                    </div>
                  </div>

                  {/* ===== SUBTITLE ===== */}
                  <p
                    className="q-subtitle text-xs md:text-sm font-heading font-bold uppercase tracking-[0.3em] mb-3"
                    style={{ color: item.accentColor }}
                  >
                    Quality #{item.number}
                  </p>

                  {/* ===== ACCENT LINE ===== */}
                  <div
                    className="q-accent-line h-[2px] w-12 mb-5"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}, ${item.accentColor}, transparent)`,
                    }}
                  />

                  {/* ===== TITLE ===== */}
                  <div className="overflow-hidden mb-5">
                    <h3
                      className="q-title font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-none"
                      style={{ color: item.color }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* ===== TITLE UNDERLINE ===== */}
                  <div
                    className="q-title-line h-[1px] w-24 mb-7"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}60, transparent)`,
                    }}
                  />

                  {/* ===== DESCRIPTION ===== */}
                  <p
                    className={`q-desc text-base md:text-lg lg:text-xl font-body leading-relaxed mb-8 max-w-md ${isEven ? "text-left" : "text-right"
                      }`}
                    style={{ color: "rgba(255,255,255,0.65)" }}
                  >
                    {item.desc}
                  </p>

                  {/* ===== QUOTE ===== */}
                  <div
                    className={`relative ${isEven ? "pl-6" : "pr-6"} max-w-sm`}
                  >
                    <div
                      className="q-quote-line absolute w-[2px]"
                      style={{
                        top: 0,
                        bottom: 0,
                        left: isEven ? 0 : "auto",
                        right: isEven ? "auto" : 0,
                        backgroundColor: `${item.color}40`,
                      }}
                    />
                    <p
                      className={`q-quote font-accent text-base md:text-lg italic leading-relaxed ${isEven ? "text-left" : "text-right"
                        }`}
                      style={{ color: `${item.accentColor}90` }}
                    >
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>

                  {/* ===== BOTTOM BAR ===== */}
                  <div
                    className={`q-bottom-bar flex items-center gap-4 mt-10 ${isEven ? "" : "flex-row-reverse"
                      }`}
                  >
                    {/* Progress */}
                    <div className="flex items-center gap-1.5">
                      {qualities.map((_, k) => (
                        <div
                          key={k}
                          className="transition-all duration-500"
                          style={{
                            width: k === i ? "24px" : "6px",
                            height: "6px",
                            borderRadius: "3px",
                            backgroundColor:
                              k === i ? item.color : `${item.color}20`,
                            boxShadow:
                              k === i ? `0 0 10px ${item.color}50` : "none",
                          }}
                        />
                      ))}
                    </div>

                    <div
                      className="h-[1px] w-6"
                      style={{ backgroundColor: `${item.color}15` }}
                    />

                    <span
                      className="text-xs font-mono uppercase tracking-[0.15em]"
                      style={{ color: `${item.color}50` }}
                    >
                      {String(i + 1).padStart(2, "0")} /{" "}
                      {String(qualities.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* ===== EDGE GRADIENTS ===== */}
            <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-night-950 to-transparent pointer-events-none z-20" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-night-950 to-transparent pointer-events-none z-20" />
          </div>
        );
      })}

      {/* ===== OUTRO ===== */}
      <div className="q-outro relative min-h-[50vh] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="q-bg-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-candy-500/[0.03] blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="w-12 h-[1px] bg-gradient-birthday mx-auto mb-8" />

          <span className="text-5xl md:text-7xl block mb-6">💖</span>

          <h3 className="font-display text-display-sm md:text-display-md font-bold mb-4">
            <span className="text-white">These Qualities Make You </span>
            <span className="text-gradient-birthday">Irreplaceable</span>
          </h3>

          <p className="text-night-400 text-lg font-accent italic leading-relaxed">
            Never forget how extraordinary you truly are. The world is better
            because you&apos;re in it.
          </p>

          <div className="w-12 h-[1px] bg-gradient-birthday mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
}
