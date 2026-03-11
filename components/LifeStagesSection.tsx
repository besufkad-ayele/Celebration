// src/components/landing/LifeStagesSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { LIFE_STAGES } from "@/lib/constants";

export function LifeStagesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // ============================================
      // HEADER — Cinematic text entrance
      // ============================================
      const headerTL = gsap.timeline({
        scrollTrigger: {
          trigger: ".stages-intro",
          start: "top 80%",
          end: "top 30%",
          toggleActions: "play none none none",
        },
      });

      headerTL
        .from(".stages-intro-line", {
          y: 100,
          opacity: 0,
          rotateX: -40,
          stagger: 0.12,
          duration: 1,
          ease: "power4.out",
        })
        .from(
          ".stages-intro-desc",
          { opacity: 0, y: 30, duration: 0.7, ease: "power2.out" },
          "-=0.4"
        )
        .from(
          ".stages-scroll-hint",
          { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" },
          "-=0.2"
        );

      // ============================================
      // EACH FULL-SCREEN CARD — Pinned scroll experience
      // ============================================
      const cards = gsap.utils.toArray<HTMLElement>(".stage-fullscreen");

      cards.forEach((card, i) => {
        const image = card.querySelector(".stage-image");
        const imageInner = card.querySelector(".stage-image-inner");
        const overlay = card.querySelector(".stage-overlay");
        const ageNum = card.querySelector(".stage-age-num");
        const ageLine = card.querySelector(".stage-age-line");
        const emoji = card.querySelector(".stage-emoji-float");
        const title = card.querySelector(".stage-title-text");
        const subtitle = card.querySelector(".stage-subtitle-text");
        const desc = card.querySelector(".stage-desc-text");
        const quote = card.querySelector(".stage-quote-text");
        const quoteLine = card.querySelector(".stage-quote-line");
        const counter = card.querySelector(".stage-counter");
        const particles = card.querySelectorAll(".stage-dot");
        const ring = card.querySelector(".stage-ring-svg");
        const vertLine = card.querySelector(".stage-vert-line");
        const horizLine = card.querySelector(".stage-horiz-line");

        // Pin each card for the scroll duration
        const cardTL = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
          },
        });

        // Phase 1 — Image reveal (Ken Burns + clip reveal)
        cardTL.fromTo(
          image,
          {
            clipPath: "inset(100% 0% 0% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 1,
            ease: "power3.inOut",
          },
          0
        );

        if (imageInner) {
          // Ken Burns zoom
          cardTL.fromTo(
            imageInner,
            { scale: 1.4 },
            { scale: 1, duration: 2, ease: "power1.out" },
            0
          );
        }

        // Overlay fade in
        if (overlay) {
          cardTL.fromTo(
            overlay,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power1.in" },
            0.3
          );
        }

        // Phase 2 — Age number (massive, cinematic)
        if (ageNum) {
          cardTL.fromTo(
            ageNum,
            { y: 200, opacity: 0, scale: 0.3, rotateZ: -15 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              rotateZ: 0,
              duration: 0.8,
              ease: "back.out(1.5)",
            },
            0.4
          );
        }

        // Age underline
        if (ageLine) {
          cardTL.fromTo(
            ageLine,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.5, ease: "power2.out" },
            0.8
          );
        }

        // Emoji
        if (emoji) {
          cardTL.fromTo(
            emoji,
            { scale: 0, rotation: -180 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.7,
              ease: "elastic.out(1, 0.5)",
            },
            0.6
          );
        }

        // Ring SVG
        if (ring) {
          cardTL.fromTo(
            ring,
            { scale: 0, opacity: 0, rotation: -90 },
            { scale: 1, opacity: 0.15, rotation: 0, duration: 1, ease: "power2.out" },
            0.5
          );
        }

        // Phase 3 — Text content
        if (subtitle) {
          cardTL.fromTo(
            subtitle,
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
            0.9
          );
        }

        if (title) {
          cardTL.fromTo(
            title,
            { y: 60, opacity: 0, skewY: 3 },
            { y: 0, opacity: 1, skewY: 0, duration: 0.7, ease: "power3.out" },
            1.0
          );
        }

        if (desc) {
          cardTL.fromTo(
            desc,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
            1.2
          );
        }

        // Vertical line
        if (vertLine) {
          cardTL.fromTo(
            vertLine,
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 0.6, ease: "power2.out" },
            1.0
          );
        }

        // Horizontal line
        if (horizLine) {
          cardTL.fromTo(
            horizLine,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.5, ease: "power2.out" },
            1.1
          );
        }

        // Quote
        if (quoteLine) {
          cardTL.fromTo(
            quoteLine,
            { scaleX: 0, transformOrigin: "left center" },
            { scaleX: 1, duration: 0.4, ease: "power2.out" },
            1.4
          );
        }

        if (quote) {
          cardTL.fromTo(
            quote,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
            1.5
          );
        }

        // Counter
        if (counter) {
          cardTL.fromTo(
            counter,
            { opacity: 0 },
            { opacity: 1, duration: 0.4 },
            1.0
          );
        }

        // Particles
        if (particles.length > 0) {
          cardTL.fromTo(
            particles,
            {
              scale: 0,
              opacity: 0,
            },
            {
              scale: 1,
              opacity: 0.6,
              stagger: { each: 0.05, from: "random" },
              duration: 0.4,
              ease: "back.out(2)",
            },
            0.8
          );
        }

        // Continuous animations (not tied to scroll)
        if (emoji) {
          gsap.to(emoji, {
            y: -12,
            rotation: 8,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.3,
          });
        }

        particles.forEach((dot) => {
          gsap.to(dot, {
            y: `random(-20, 20)`,
            x: `random(-15, 15)`,
            opacity: `random(0.2, 0.7)`,
            duration: `random(2, 5)`,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: Math.random() * 3,
          });
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-night-950">
      {/* ===== INTRO HEADER ===== */}
      <div className="stages-intro relative min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        {/* Background - Atmospheric & High-End */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Base Mesh */}
          <div className="absolute inset-0 bg-mesh opacity-30" />

          {/* Large Timeline-style blur */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-pink-500/[0.04] rounded-full blur-[250px]" />

          {/* Radial depth */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_100%)] opacity-80" />

          {/* Background Image Layer (Dreamy) */}
          <div
            className="absolute inset-x-0 top-0 h-[120%] bg-cover bg-center opacity-10 bg-no-repeat grayscale grayscale-100"
            style={{
              backgroundImage: `url('/timeline/recent.png')`,
              filter: 'blur(4px) saturate(0)'
            }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="overflow-hidden mb-3">
            <p className="stages-intro-line text-xs md:text-sm font-heading font-bold text-candy-400 uppercase tracking-[0.5em]">
              The Evolution of a Legend
            </p>
          </div>

          <div className="overflow-hidden mb-4">
            <h2 className="stages-intro-line font-display text-display-lg md:text-display-xl font-black tracking-tight leading-none">
              <span className="text-white">From Diapers to </span>
              <span className="text-gradient-birthday">Destiny</span>
            </h2>
          </div>

          <div className="overflow-hidden mb-8">
            <h2 className="stages-intro-line font-display text-4xl md:text-7xl font-light">
              <span className="text-white/80">25 Years of </span>
              <span className="italic font-serif text-pink-400">Iconic Decisions</span>
            </h2>
          </div>

          <p className="stages-intro-desc text-night-300 text-lg md:text-2xl max-w-2xl mx-auto font-body leading-relaxed opacity-80">
            A deep dive into the archives of Saron T. — where every age was a vibe,
            every year was a main character moment, and caffeine was always the co-pilot.
          </p>

          <div className="stages-scroll-hint mt-16 flex flex-col items-center gap-4">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-pink-400/50 to-transparent" />
            <span className="text-pink-300/60 text-[10px] font-sans uppercase tracking-[0.6em] animate-pulse">
              Behold the Timeline
            </span>
          </div>
        </div>

        {/* Bottom gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-60 bg-gradient-to-t from-night-950 via-night-950/80 to-transparent" />
      </div>

      {/* ===== FULL-SCREEN STAGE CARDS ===== */}
      {LIFE_STAGES.map((stage, i) => (
        <div
          key={i}
          className="stage-fullscreen relative w-full h-screen overflow-hidden"
        >
          {/* ===== IMAGE LAYER ===== */}
          <div className="stage-image absolute inset-0" style={{ clipPath: "inset(100% 0% 0% 0%)" }}>
            <div
              className="stage-image-inner absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${stage.image})`,
                transform: "scale(1.4)",
              }}
            />
          </div>

          {/* ===== OVERLAY ===== */}
          <div
            className="stage-overlay absolute inset-0 opacity-0"
            style={{
              background: `linear-gradient(135deg, ${stage.bgColor}ee 0%, ${stage.bgColor}cc 40%, ${stage.bgColor}88 70%, ${stage.bgColor}aa 100%)`,
            }}
          />

          {/* ===== DECORATIVE ELEMENTS ===== */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Large ring SVG */}
            <svg
              className="stage-ring-svg absolute opacity-0"
              style={{
                top: "50%",
                right: "-5%",
                transform: "translateY(-50%)",
                width: "min(50vw, 600px)",
                height: "min(50vw, 600px)",
              }}
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke={stage.color}
                strokeWidth="0.3"
                strokeDasharray="8 4"
              />
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke={stage.color}
                strokeWidth="0.2"
              />
              <circle
                cx="100"
                cy="100"
                r="50"
                fill="none"
                stroke={stage.color}
                strokeWidth="0.15"
                strokeDasharray="3 6"
              />
            </svg>

            {/* Floating dots */}
            {Array.from({ length: 15 }).map((_, j) => (
              <div
                key={j}
                className="stage-dot absolute rounded-full"
                style={{
                  width: `${3 + Math.random() * 5}px`,
                  height: `${3 + Math.random() * 5}px`,
                  backgroundColor: stage.color,
                  top: `${10 + Math.random() * 80}%`,
                  left: `${5 + Math.random() * 90}%`,
                  opacity: 0,
                }}
              />
            ))}
          </div>

          {/* ===== CONTENT LAYER ===== */}
          <div className="relative z-10 h-full flex items-center">
            <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Left Column — Age + Visual */}
                <div className="lg:col-span-5 relative">
                  {/* Massive age number */}
                  <div className="relative">
                    <div className="stage-age-num relative">
                      <span
                        className="block font-heading font-black leading-none select-none"
                        style={{
                          fontSize: "clamp(8rem, 20vw, 16rem)",
                          color: "transparent",
                          WebkitTextStroke: `2px ${stage.color}40`,
                        }}
                      >
                        {stage.age.split("-")[0]}
                      </span>

                      {/* Filled version on top */}
                      <span
                        className="absolute inset-0 block font-heading font-black leading-none select-none"
                        style={{
                          fontSize: "clamp(8rem, 20vw, 16rem)",
                          color: `${stage.color}15`,
                          WebkitTextStroke: `1px ${stage.color}60`,
                        }}
                      >
                        {stage.age.split("-")[0]}
                      </span>
                    </div>

                    {/* Age line underneath */}
                    <div
                      className="stage-age-line h-[2px] w-32 mt-4"
                      style={{
                        background: `linear-gradient(90deg, ${stage.color}, transparent)`,
                        transform: "scaleX(0)",
                      }}
                    />

                    {/* Age range badge */}
                    <div className="mt-4 inline-flex items-center gap-2">
                      <span
                        className="text-sm font-mono font-bold px-3 py-1.5 rounded-full backdrop-blur-md"
                        style={{
                          color: stage.color,
                          backgroundColor: `${stage.color}12`,
                          border: `1px solid ${stage.color}20`,
                        }}
                      >
                        Age {stage.age}
                      </span>
                    </div>
                  </div>

                  {/* Emoji — floating */}
                  <div
                    className="stage-emoji-float absolute -top-4 right-8 md:right-20 lg:right-4"
                  >
                    <span className="text-6xl md:text-8xl block drop-shadow-2xl">
                      {stage.emoji}
                    </span>
                  </div>
                </div>

                {/* Vertical separator line */}
                <div className="hidden lg:flex lg:col-span-1 justify-center">
                  <div
                    className="stage-vert-line w-[1px] h-64"
                    style={{
                      background: `linear-gradient(180deg, transparent, ${stage.color}40, transparent)`,
                      transform: "scaleY(0)",
                    }}
                  />
                </div>

                {/* Right Column — Content */}
                <div className="lg:col-span-6">
                  {/* Horizontal line */}
                  <div
                    className="stage-horiz-line h-[1px] w-16 mb-6 lg:hidden"
                    style={{
                      background: `linear-gradient(90deg, ${stage.color}60, transparent)`,
                      transform: "scaleX(0)",
                    }}
                  />

                  {/* Subtitle */}
                  <p
                    className="stage-subtitle-text text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.25em] mb-3"
                    style={{ color: stage.color }}
                  >
                    {stage.subtitle}
                  </p>

                  {/* Title */}
                  <div className="overflow-hidden mb-5">
                    <h3 className="stage-title-text font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      {stage.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="stage-desc-text text-night-200/80 font-body text-base md:text-lg leading-relaxed max-w-lg mb-8">
                    {stage.description}
                  </p>

                  {/* Quote */}
                  <div className="relative pl-6">
                    <div
                      className="stage-quote-line absolute left-0 top-0 bottom-0 w-[2px]"
                      style={{
                        backgroundColor: `${stage.color}40`,
                        transform: "scaleX(0)",
                      }}
                    />
                    <p
                      className="stage-quote-text font-accent text-lg md:text-xl italic"
                      style={{ color: `${stage.color}90` }}
                    >
                      &ldquo;{stage.quote}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom — Counter */}
              <div className="stage-counter absolute bottom-8 left-6 md:left-12 lg:left-20 flex items-center gap-4 opacity-0">
                <span
                  className="text-4xl md:text-5xl font-heading font-black"
                  style={{ color: `${stage.color}20` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div
                  className="h-[1px] w-8"
                  style={{ backgroundColor: `${stage.color}20` }}
                />
                <span className="text-xs font-mono text-night-500 uppercase tracking-widest">
                  of {String(LIFE_STAGES.length).padStart(2, "0")}
                </span>
              </div>

              {/* Progress dots — Bottom right */}
              <div className="stage-counter absolute bottom-8 right-6 md:right-12 lg:right-20 flex items-center gap-2 opacity-0">
                {LIFE_STAGES.map((_, k) => (
                  <div
                    key={k}
                    className="w-2 h-2 rounded-full transition-all duration-500"
                    style={{
                      backgroundColor:
                        k === i ? stage.color : `${stage.color}15`,
                      boxShadow:
                        k === i
                          ? `0 0 10px ${stage.color}50`
                          : "none",
                      transform: k === i ? "scale(1.3)" : "scale(1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ===== BOTTOM GRADIENT (transition to next) ===== */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-night-950 to-transparent pointer-events-none z-20" />
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-night-950 to-transparent pointer-events-none z-20" />
        </div>
      ))}

      {/* ===== OUTRO ===== */}
      <div className="relative min-h-[50vh] flex items-center justify-center text-center px-4">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-golden-400/[0.03] blur-[180px]" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="text-6xl md:text-8xl block mb-6">🎂</span>
          <h3 className="font-display text-display-sm md:text-display-md font-bold mb-4">
            <span className="text-white">Every Age is </span>
            <span className="text-gradient-birthday">Worth Celebrating</span>
          </h3>
          <p className="text-night-400 text-lg font-body">
            wish You the best Birthday year ahead
          </p>
        </div>
      </div>
    </section>
  );
}