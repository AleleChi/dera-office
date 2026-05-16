import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stepsData = [
  {
    id: '01',
    badge: 'Step 01',
    title: 'Create Your Account',
    headline: 'Your office management journey starts here',
    description: 'Sign up in seconds with just your email. No credit card required. Set up your workspace, invite your first team members, and start exploring the platform with our guided setup wizard.',
    shortDesc: 'Quick 30-second setup',
    features: ['Free forever plan', 'Guided setup', 'Team invite'],
  },
  {
    id: '02',
    badge: 'Step 02',
    title: 'Assign Roles & Permissions',
    headline: 'Give everyone the right access level',
    description: 'Create custom roles for Super Admins, Managers, and Staff. Define what each team member can see and do. Set approval chains and workflow permissions with our intuitive role builder.',
    shortDesc: 'Granular permissions',
    features: ['Custom roles', 'Approval chains', 'Access control'],
  },
  {
    id: '03',
    badge: 'Step 03',
    title: 'Manage Workflows',
    headline: 'Automate repetitive tasks effortlessly',
    description: 'Set up automated approval flows for documents, consumables, and subscriptions. Create custom templates for common requests. Let the system handle routine operations.',
    shortDesc: 'Smart automation',
    features: ['Auto-approvals', 'Templates', 'Notifications'],
  },
  {
    id: '04',
    badge: 'Step 04',
    title: 'Track Performance',
    headline: 'Get insights that drive better decisions',
    description: 'Monitor team activity, track inventory usage, and analyze workflow efficiency. Generate reports with a click. Use real-time analytics to optimize your office operations.',
    shortDesc: 'Real-time analytics',
    features: ['Dashboard', 'Reports', 'Export data'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)
  const totalSteps = stepsData.length

  const goNext = () => {
    setCurrentStep(prev => (prev + 1) % totalSteps)
  }

  const goPrev = () => {
    setCurrentStep(prev => (prev - 1 + totalSteps) % totalSteps)
  }

  return (
    <section id="how-it-works" className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">How it works</p>
          <h2 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl">
            Get started in minutes
          </h2>
        </motion.div>

        <div className="relative mx-auto flex h-[600px] w-full max-w-sm items-center justify-center">
          {stepsData.map((step, index) => {
            const offset = index - currentStep
            const totalOffset = offset < 0 ? offset + totalSteps : offset
            const isVisible = index === currentStep
            const isBehind = totalOffset > 0 && totalOffset <= 2

            if (totalOffset > 2) return null

            return (
              <motion.div
                key={step.id}
                initial={false}
                animate={{
                  y: totalOffset * 80,
                  x: totalOffset * 30,
                  scale: 1 - totalOffset * 0.08,
                  opacity: isVisible ? 1 : isBehind ? 0.7 : 0,
                  zIndex: totalSteps - totalOffset,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                className={`absolute w-full cursor-pointer`}
                style={{ maxWidth: 280 }}
              >
                <div
                  className={`relative w-full rounded-3xl border-2 bg-white p-6 transition-all ${
                    isVisible
                      ? 'border-orange-200 shadow-2xl shadow-orange-500/20'
                      : 'border-slate-100 shadow-xl shadow-slate-300/30'
                  }`}
                >
                  {isVisible && (
                    <>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-100 to-amber-100">
                        {index === 0 && (
                          <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                          </svg>
                        )}
                        {index === 1 && (
                          <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        )}
                        {index === 2 && (
                          <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                          </svg>
                        )}
                        {index === 3 && (
                          <svg className="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                          </svg>
                        )}
                      </div>

                      <div className="text-sm font-bold uppercase tracking-widest text-orange-500">
                        {step.badge}
                      </div>
                      <h3 className="mt-1 text-xl font-bold text-slate-900">{step.title}</h3>

                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentStep}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <p className="mt-3 text-sm leading-relaxed text-slate-600">
                            {step.description}
                          </p>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {step.features.map((feature, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1 rounded-full bg-slate-50 px-3 py-1 text-xs text-slate-600"
                              >
                                <svg className="h-3 w-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    </>
                  )}

                  {!isVisible && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                        <span className="text-sm font-bold text-slate-400">{step.badge.split(' ')[1]}</span>
                      </div>
                      <div className="text-sm font-medium text-slate-500">{step.shortDesc}</div>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}

          <motion.button
            onClick={goPrev}
            className="group absolute left-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-300/50 transition-all hover:scale-110 hover:border-orange-300 hover:shadow-orange-500/20"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-400/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <svg className="h-5 w-5 text-slate-600 transition-colors group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={goNext}
            className="group absolute right-0 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-300/50 transition-all hover:scale-110 hover:border-orange-300 hover:shadow-orange-500/20"
          >
            <motion.div
              className="absolute inset-0 rounded-full bg-orange-400/30"
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <svg className="h-5 w-5 text-slate-600 transition-colors group-hover:text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {stepsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={`h-2 rounded-full transition-all ${
                currentStep === i
                  ? 'w-8 bg-gradient-to-r from-orange-500 to-amber-500'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}