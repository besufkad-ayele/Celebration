// src/lib/gsap.ts
"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Only register once
const isClient = typeof window !== "undefined";

if (isClient) {
  gsap.registerPlugin(ScrollTrigger);

  // Global defaults
  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  // Fix: Prevent ScrollTrigger conflicts by setting global config
  ScrollTrigger.config({
    ignoreMobileResize: true,
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
  });
}

export { gsap, ScrollTrigger };