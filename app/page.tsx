'use client'

import { useState } from 'react'
import MusicPlayer from '@/components/MusicPlayer'
import Hero from '@/components/Hero'
import Timeline from '@/components/Timeline'
import Highlights from '@/components/Highlights'
import Testimonials from '@/components/Testimonials'
import Gallery from '@/components/Gallery'
import Qualities from '@/components/Qualities'
import Ending from '@/components/Ending'
import { motion, AnimatePresence } from 'framer-motion'
import { LifeStagesSection } from '@/components/LifeStagesSection'

export default function Home() {
  const [started, setStarted] = useState(false)

  return (
    <main className="relative min-h-screen">
      <MusicPlayer onStart={() => setStarted(true)} />
      
      <AnimatePresence>
        {started && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Hero />
            <LifeStagesSection />
            <Timeline />
            <Highlights />
            <Testimonials />
            <Gallery />
            <Qualities />
            <Ending />
            
            {/* Footer */}
            <footer className="py-12 border-t border-white/5 text-center text-white/20 font-serif italic">
              <p>© 2026 • Made with love for Saron T.</p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
