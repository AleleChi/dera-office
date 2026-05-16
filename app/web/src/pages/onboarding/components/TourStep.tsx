import { motion } from 'framer-motion';
import { animations, staggerContainer, staggerItem } from './animations';

const tourItems = [
  { icon: '📊', title: 'Dashboard', desc: 'Overview of all your operations', color: 'from-blue-500 to-cyan-500', path: '/dashboard' },
  { icon: '📋', title: 'Subscriptions', desc: 'Track software & service costs', color: 'from-orange-500 to-amber-500', path: '/subscriptions' },
  { icon: '📦', title: 'Inventory', desc: 'Monitor office supplies & consumables', color: 'from-emerald-500 to-teal-500', path: '/consumables' },
  { icon: '📮', title: 'Correspondence', desc: 'Manage mail & deliveries', color: 'from-violet-500 to-purple-500', path: '/correspondence' },
  { icon: '🖨️', title: 'Printer', desc: 'Monitor printer usage & status', color: 'from-rose-500 to-pink-500', path: '/printer' },
  { icon: '⛽', title: 'Gas Logs', desc: 'Track fuel & energy usage', color: 'from-amber-500 to-yellow-500', path: '/gas-logs' },
];

interface TourStepProps {
  onNext: () => void;
  onBack: () => void;
}

export function TourStep({ onNext, onBack }: TourStepProps) {
  return (
    <motion.div
      key="tour"
      variants={animations.fadeUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="mb-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600"
        >
          Step 4 of 4
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-semibold text-slate-900"
        >
          Quick product tour
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-2 text-slate-600"
        >
          Here are the key areas you'll be using
        </motion.div>
      </motion.div>

      <motion.div
        className="space-y-3"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {tourItems.map((item, i) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            whileHover={{ scale: 1.01, x: 8, borderColor: 'rgba(251,146,60,0.3)' }}
            className="group relative flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-orange-200 hover:shadow-xl"
          >
            <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg`}>
              <span className="text-xl">{item.icon}</span>
            </div>
            <div className="flex-1">
              <motion.div 
                className="font-semibold text-slate-900"
                whileHover={{ color: '#f97316' }}
              >
                {item.title}
              </motion.div>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="text-orange-500"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"
      >
        <svg className="h-4 w-4 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        You can access these from the sidebar at any time
      </motion.div>

      <div className="mt-8 flex items-center justify-between">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-600 transition hover:border-orange-300 hover:text-orange-600"
        >
          <span>←</span> Back
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(251,146,60,0.3)' }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
        >
          Finish Tour <span>→</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
