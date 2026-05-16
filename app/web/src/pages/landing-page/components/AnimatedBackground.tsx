import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-300/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute -right-32 top-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-300/15 to-yellow-400/10 blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute left-1/4 bottom-1/4 h-64 w-64 rounded-full bg-gradient-to-br from-orange-500/10 to-red-400/10 blur-3xl"
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(234,88,12,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(234,88,12,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
    </div>
  )
}