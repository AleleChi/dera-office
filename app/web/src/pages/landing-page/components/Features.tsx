import { motion } from 'framer-motion'

const features = [
  {
    icon: '📬',
    title: 'Smart Correspondence',
    description: 'Automate document workflows, track incoming letters, and manage approvals in one dashboard.',
    accent: 'from-orange-500 to-amber-600',
    glow: 'group-hover:shadow-orange-500/30',
  },
  {
    icon: '📦',
    title: 'Inventory Control',
    description: 'Keep consumables stocked, monitor spend, and reduce waste with real-time usage tracking.',
    accent: 'from-orange-600 to-red-500',
    glow: 'group-hover:shadow-orange-500/30',
  },
  {
    icon: '📋',
    title: 'Subscription Oversight',
    description: 'Manage licenses, renewal dates, and subscription budgets with simple visibility.',
    accent: 'from-amber-500 to-yellow-500',
    glow: 'group-hover:shadow-amber-500/30',
  },
  {
    icon: '🖨️',
    title: 'Printer Intelligence',
    description: 'Monitor printer health, usage, and maintenance logs across every device.',
    accent: 'from-orange-400 to-rose-500',
    glow: 'group-hover:shadow-orange-400/30',
  },
  {
    icon: '⛽',
    title: 'Energy Insights',
    description: 'Track gas logs, analyze usage patterns, and improve office efficiency.',
    accent: 'from-orange-700 to-amber-600',
    glow: 'group-hover:shadow-orange-700/30',
  },
  {
    icon: '📊',
    title: 'Actionable Dashboard',
    description: 'Visualize your office operations with beautiful analytics and clear next steps.',
    accent: 'from-orange-500 to-orange-700',
    glow: 'group-hover:shadow-orange-500/30',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">Features</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Everything your office needs in one elegant platform
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600">
            From correspondence and subscriptions to inventory and reporting, Office Manager delivers premium control over every office workflow.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-orange-200 hover:shadow-xl ${feature.glow}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
              <div className={`relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} text-2xl text-white shadow-lg`}>
                {feature.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              <motion.div
                className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-orange-600"
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
              >
                Learn more <span>→</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}