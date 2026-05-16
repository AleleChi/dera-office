import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  {
    id: 'super-admin',
    label: 'Super Admin',
    description: 'Full system control',
    stats: [
      { label: 'Users', value: '24' },
      { label: 'Workspaces', value: '3' },
      { label: 'API Access', value: 'Enabled' },
    ],
  },
  {
    id: 'manager',
    label: 'Manager',
    description: 'Team oversight & approvals',
    stats: [
      { label: 'Team Size', value: '8' },
      { label: 'Approvals', value: '12' },
      { label: 'Reports', value: '5' },
    ],
  },
  {
    id: 'staff',
    label: 'Staff',
    description: 'Task execution & requests',
    stats: [
      { label: 'Tasks', value: '5' },
      { label: 'Requests', value: '2' },
      { label: 'History', value: '48' },
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Roles() {
  const [activeRole, setActiveRole] = useState('super-admin')

  return (
    <section id="roles" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">Roles</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Tailored experience for every role
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Each team member gets a personalized dashboard designed for their responsibilities.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl border border-slate-200 bg-white p-2 shadow-sm"
        >
          <div className="flex gap-2 rounded-2xl bg-slate-50 p-2">
            {roles.map((role) => (
              <motion.button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                  activeRole === role.id
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-slate-600 hover:text-orange-600'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {role.label}
              </motion.button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {roles.map(
              (role) =>
                activeRole === role.id && (
                  <motion.div
                    key={role.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="p-6"
                  >
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                          {role.label} View
                        </p>
                        <p className="mt-3 text-2xl font-semibold text-slate-900">{role.label}</p>
                        <p className="mt-2 text-slate-600">{role.description}</p>
                        <div className="mt-6 space-y-3">
                          {role.stats.map((stat) => (
                            <div
                              key={stat.label}
                              className="flex items-center justify-between rounded-xl bg-white p-3"
                            >
                              <span className="text-sm text-slate-500">{stat.label}</span>
                              <span className="text-sm font-semibold text-slate-900">{stat.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-orange-600">
                          Quick Actions
                        </p>
                        <div className="space-y-3">
                          {['View Reports', 'Manage Team', 'Settings'].map((action) => (
                            <motion.div
                              key={action}
                              whileHover={{ x: 4 }}
                              className="flex cursor-pointer items-center justify-between rounded-xl bg-white p-3 transition-colors hover:bg-orange-50"
                            >
                              <span className="text-sm text-slate-700">{action}</span>
                              <span className="text-slate-400">→</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}