import { motion } from 'framer-motion'

const values = [
  { icon: '⚡', title: 'Efficiency', description: 'Reduce manual work with intelligent automation.' },
  { icon: '🎯', title: 'Organization', description: 'Everything in its place, always findable.' },
  { icon: '🤝', title: 'Collaboration', description: 'Keep everyone aligned and working as one.' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

export default function WhyChooseUs() {
  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
      <div className="mx-auto max-w-6xl text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">Why choose us</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Your office deserves a smarter way to work
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group rounded-3xl border border-slate-200 bg-white p-8 text-left shadow-sm transition-all hover:border-orange-200 hover:shadow-xl hover:shadow-orange-500/10"
            >
              <div className="text-4xl">{item.icon}</div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}