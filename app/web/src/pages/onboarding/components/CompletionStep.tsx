import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface CompletionStepProps {
  onComplete: () => void;
  onTakeTour: () => void;
}

function Confetti() {
  const [particles, setParticles] = useState<Array<{ id: number; left: string; delay: number; color: string }>>([]);

  useEffect(() => {
    const colors = ['#f97316', '#fbbf24', '#10b981', '#3b82f6', '#ec4899'];
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 0.5,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ 
            opacity: 1, 
            y: -20, 
            left: particle.left,
            rotate: 0 
          }}
          animate={{ 
            opacity: [1, 1, 0],
            y: [0, 100, 200],
            rotate: [0, 360, 720],
          }}
          transition={{ 
            duration: 3, 
            delay: particle.delay,
            ease: 'easeOut'
          }}
          className="absolute w-3 h-3 rounded-full"
          style={{ backgroundColor: particle.color, top: '0px' }}
        />
      ))}
    </div>
  );
}

export function CompletionStep({ onComplete, onTakeTour }: CompletionStepProps) {
  return (
    <motion.div
      key="complete"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative w-full max-w-lg text-center"
    >
      <Confetti />
      
      <motion.div
        initial={{ scale: 0, rotateY: -180 }}
        animate={{ scale: 1, rotateY: 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.1 }}
        className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/25"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
          className="text-4xl text-white"
        >
          ✓
        </motion.div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-semibold tracking-tight text-slate-900"
      >
        You're all set!
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-4 text-lg leading-8 text-slate-600"
      >
        Your workspace is ready. Let's start managing your office operations smarter, faster, and better.
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 grid gap-3 sm:grid-cols-2"
      >
        <motion.button
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onComplete}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
        >
          Go to Dashboard
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            →
          </motion.span>
        </motion.button>
        
        <motion.button
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onTakeTour}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition-all hover:border-orange-300 hover:bg-orange-50"
        >
          Take me on a tour
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-400"
      >
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Data saved
        </span>
        <span className="flex items-center gap-2">
          <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Workspace created
        </span>
      </motion.div>
    </motion.div>
  );
}
