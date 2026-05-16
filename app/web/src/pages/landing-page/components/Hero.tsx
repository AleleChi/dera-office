import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Hero() {
  const navigate = useNavigate()

  return (
    <section className="relative min-h-[90vh] flex items-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-2xl"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-semibold uppercase tracking-[0.28em] text-orange-600 shadow-lg"
          >
            Office Management Reimagined
          </motion.span>
          <motion.h1
            className="mt-8 text-5xl font-semibold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Manage Your Office Operations{' '}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Smarter, Faster, Better
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Office Manager helps teams stay aligned, automate routine workflows, and keep every part of the office running smoothly.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
              onClick={() => navigate('/register')}
            >
              <span>Get Started</span>
              <motion.span
                className="ml-2 inline-block transition-transform group-hover:translate-x-0.5"
              >
                →
              </motion.span>
            </motion.button>
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-base font-semibold text-slate-700 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
              onClick={() => navigate('/login')}
            >
              Log in
            </motion.button>
          </motion.div>

          <motion.div
            className="mt-12 grid gap-4 sm:grid-cols-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { stat: '24/7', label: 'Secure access, anytime' },
              { stat: '6x', label: 'Faster operations' },
              { stat: '100%', label: 'Team-focused design' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="text-2xl font-semibold text-slate-900">{item.stat}</p>
                <p className="mt-1 text-xs text-slate-500">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="relative z-10 mx-auto w-full max-w-xl lg:mx-0"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-200/50">
            <motion.div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br from-orange-400/20 to-amber-300/10 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -left-16 bottom-16 h-48 w-48 rounded-full bg-gradient-to-br from-orange-300/20 to-yellow-400/10 blur-3xl"
              animate={{ scale: [1.1, 1, 1.1] }}
              transition={{ duration: 6, repeat: Infinity, delay: 1 }}
            />
            <div className="rounded-[2rem] bg-slate-50 p-6">
              <div className="flex items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-600">Workspace</p>
                  <p className="mt-3 text-3xl font-semibold text-slate-900">Office HQ</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg shadow-orange-500/30">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <div className="mt-5 grid gap-3">
                <motion.div
                  className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Messages</span>
                    <span className="rounded-full bg-orange-100 px-2 py-0.5 text-orange-600">4 new</span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900">24 pending approvals</p>
                </motion.div>
                <motion.div
                  className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>Inventory</span>
                    <span className="text-emerald-600">Stable</span>
                  </div>
                  <p className="mt-2 text-lg font-semibold text-slate-900">Printer supplies healthy</p>
                </motion.div>
                <div className="grid grid-cols-2 gap-3">
                  <motion.div
                    className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-xs text-slate-500">Active Tasks</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">35</p>
                  </motion.div>
                  <motion.div
                    className="rounded-2xl bg-white p-4 ring-1 ring-slate-100"
                    whileHover={{ scale: 1.02 }}
                  >
                    <p className="text-xs text-slate-500">Team</p>
                    <p className="mt-1 text-xl font-semibold text-slate-900">12</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}