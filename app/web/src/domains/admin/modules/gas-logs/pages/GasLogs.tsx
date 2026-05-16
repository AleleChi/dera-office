import { motion } from 'framer-motion'
import Layout from '../../../../../shared/layout/Layout'

export default function GasLogs() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <motion.h1
          variants={fadeUpVariants}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white"
        >
          Gas Logs
        </motion.h1>

        <motion.div
          variants={fadeUpVariants}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 border border-white/10 rounded-3xl backdrop-blur-xl p-12 text-center shadow-xl shadow-slate-950/20"
        >
          <div className="text-6xl mb-6">⛽</div>
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            The gas logs management feature is currently under development.
            Check back soon for updates!
          </p>
        </motion.div>
      </motion.div>
    </Layout>
  )
}
