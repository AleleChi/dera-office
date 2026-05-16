import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function CTA() {
  const navigate = useNavigate()

  return (
    <section className="relative px-4 py-28 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl rounded-[2.5rem] border border-slate-200 bg-white p-12 text-center shadow-2xl shadow-slate-200/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">Get Started</p>
          <h2 className="mt-6 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Start managing your office like a pro
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Join thousands of teams who have transformed their office operations with Office Manager.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 0 30px rgba(251,146,60,0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate('/register')}
            className="group relative mt-10 inline-flex rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all"
          >
            <span>Create free account</span>
            <motion.span
              className="ml-2 inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}