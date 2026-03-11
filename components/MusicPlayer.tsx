import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Gift, Cake, Sparkles, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

interface MusicPlayerProps {
  onStart: () => void;
}

const FloatingItem = ({ delay, icon: Icon, color }: { delay: number, icon: any, color: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        y: [-20, -150],
        x: Math.random() * 200 - 100,
        scale: [0, 1.2, 0.5],
        rotate: [0, 45, -45, 0]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut"
      }}
      className={`absolute ${color} pointer-events-none drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`}
    >
      <Icon size={32} />
    </motion.div>
  );
};

export default function MusicPlayer({ onStart }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);
  const [isTextHovered, setIsTextHovered] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isStarting, setIsStarting] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startSurprise = () => {
    setIsStarting(true);

    // Confetti burst!
    const end = Date.now() + 3 * 1000;
    const colors = ['#f472b6', '#fb923c', '#ffffff'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());

    setTimeout(() => {
      setShowOverlay(false);
      setIsPlaying(true);
      if (audioRef.current) {
        audioRef.current.play().catch(err => console.log("Autoplay blocked", err));
      }
      onStart();
    }, 1000); // Wait for zoom animation
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/birthday-song.m4a" // Local Christian birthday song (.m4a)
        loop
      />

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isStarting ? {
              scale: 2,
              opacity: 0,
              filter: "blur(20px)"
            } : {
              opacity: 1,
              scale: 1,
              filter: "blur(0px)"
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl overflow-hidden"
          >
            <div className="text-center px-6 relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-12 relative cursor-default"
                onMouseEnter={() => setIsTextHovered(true)}
                onMouseLeave={() => setIsTextHovered(false)}
              >
                <h2 className="text-5xl md:text-7xl font-display italic text-white mb-4 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                  A Special Surprise Awaits...
                </h2>
                <p className="text-white/60 font-serif text-lg md:text-xl max-w-md mx-auto relative z-10">
                  Tap to begin your birthday journey, Saron.
                </p>

                {/* Floating Birthday Elements */}
                <AnimatePresence>
                  {isTextHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 -z-0"
                    >
                      <FloatingItem delay={0} icon={Gift} color="text-pink-400" />
                      <FloatingItem delay={0.5} icon={Cake} color="text-orange-400" />
                      <FloatingItem delay={1} icon={Sparkles} color="text-yellow-400" />
                      <FloatingItem delay={1.5} icon={Flame} color="text-red-500" />
                      <FloatingItem delay={2} icon={Gift} color="text-purple-400" />
                      <FloatingItem delay={2.5} icon={Flame} color="text-orange-500" />
                      <FloatingItem delay={0.2} icon={Sparkles} color="text-blue-400" />
                      <FloatingItem delay={0.8} icon={Gift} color="text-green-400" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <div
                className="relative perspective-1000"
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                <motion.button
                  animate={isButtonHovered ? { scale: 1.25, rotateY: 10 } : { scale: 1, rotateY: 0 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={startSurprise}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-1"
                >
                  {/* Background Layer (The "Plate") */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-orange-400 to-pink-500 animate-gradient-xy rounded-full shadow-[0_0_30px_rgba(244,114,182,0.5)]" />

                  {/* The Button Content (The "Cake") */}
                  <div className="relative px-12 py-5 bg-white dark:bg-gray-950 rounded-full transition-all duration-300 overflow-hidden">
                    {/* We render the text twice and use clip-path to split it */}
                    <div className="relative">
                      {/* Top-Left Half */}
                      <motion.div
                        animate={isButtonHovered ? { x: -6, y: -6, skewX: -5 } : { x: 0, y: 0, skewX: 0 }}
                        className="text-2xl font-display text-gray-900 dark:text-white"
                        style={{ clipPath: 'polygon(0 0, 150% 0, 0 150%)' }}
                      >
                        Begin the Journey
                      </motion.div>

                      {/* Bottom-Right Half */}
                      <motion.div
                        animate={isButtonHovered ? { x: 6, y: 6, skewX: 5 } : { x: 0, y: 0, skewX: 0 }}
                        className="text-2xl font-display text-gray-900 dark:text-white absolute inset-0"
                        style={{ clipPath: 'polygon(150% 0, 150% 150%, 0 150%)' }}
                      >
                        Begin the Journey
                      </motion.div>
                    </div>

                    {/* Cake Cutting Knife Overlay */}
                    <AnimatePresence>
                      {isButtonHovered && (
                        <>
                          {/* Knife Animation - A thin bright line slicing through */}
                          <motion.div
                            initial={{ x: -150, y: -150, rotate: 45 }}
                            animate={{ x: 150, y: 150, rotate: 45 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4, ease: "linear", repeat: Infinity, repeatDelay: 1 }}
                            className="absolute z-20 w-1 h-[200%] bg-white shadow-[0_0_20px_rgba(255,255,255,1)] pointer-events-none"
                            style={{ top: '50%', left: '50%', marginTop: '-100%', marginLeft: '-0.5px' }}
                          />

                          {/* Slicing Effect Shine */}
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.4, 0] }}
                            transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 1 }}
                            className="absolute inset-0 z-15 bg-white pointer-events-none"
                          />

                          {/* Trail of Sparkles */}
                          {[...Array(5)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1.5, 0],
                                x: [-20, 20],
                                y: [-20, 20]
                              }}
                              transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                repeat: Infinity,
                                repeatDelay: 0.5
                              }}
                              className="absolute text-yellow-300 pointer-events-none z-30"
                              style={{
                                top: `${30 + i * 10}%`,
                                left: `${30 + i * 10}%`
                              }}
                            >
                              <Sparkles size={16} />
                            </motion.div>
                          ))}
                        </>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showOverlay && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2"
        >
          <button
            onClick={togglePlay}
            className="p-3 rounded-full glass hover:bg-white/10 transition-colors text-white"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={toggleMute}
            className="p-3 rounded-full glass hover:bg-white/10 transition-colors text-white"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </motion.div>
      )}
    </>
  );
}

