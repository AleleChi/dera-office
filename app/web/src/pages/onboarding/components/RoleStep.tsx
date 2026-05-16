import { motion } from 'framer-motion';
import { animations } from './animations';

const roles = [
  { id: 'admin', label: 'Administrator', icon: '⚙️', desc: 'Manage all settings' },
  { id: 'manager', label: 'Manager', icon: '📊', desc: 'Oversee teams' },
  { id: 'staff', label: 'Staff', icon: '👤', desc: 'Day-to-day tasks' },
  { id: 'finance', label: 'Finance', icon: '💰', desc: 'Track expenses' },
  { id: 'it', label: 'IT Support', icon: '💻', desc: 'Tech management' },
];

const useCases = [
  { id: 'subscriptions', label: 'Manage Subscriptions', desc: 'Track software & services', icon: '📋' },
  { id: 'inventory', label: 'Inventory Tracking', desc: 'Monitor office supplies', icon: '📦' },
  { id: 'correspondence', label: 'Correspondence', desc: 'Handle mail & deliveries', icon: '📮' },
  { id: 'gas', label: 'Gas Logs', desc: 'Track fuel usage', icon: '⛽' },
  { id: 'printing', label: 'Print Management', desc: 'Monitor printer usage', icon: '🖨️' },
  { id: 'all', label: 'All Features', desc: 'Full office management', icon: '📊' },
];

interface RoleStepProps {
  data: { roles: string[]; useCases: string[] };
  onToggleRole: (roleId: string) => void;
  onToggleUseCase: (useCaseId: string) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
  canProceed: boolean;
}

export function RoleStep({ data, onToggleRole, onToggleUseCase, onNext, onBack, onSkip, canProceed }: RoleStepProps) {
  return (
    <motion.div
      key="role"
      variants={animations.fadeUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-2xl"
    >
      <div className="mb-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-600"
        >
          Step 2 of 4
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-semibold text-slate-900"
        >
          Tell us about yourself
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-2 text-slate-600"
        >
          Select your role and what you'll use this for
        </motion.div>
      </div>

      <motion.div
        className="mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Your Role</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {roles.map((role, i) => (
            <motion.button
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.2 }}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggleRole(role.id)}
              className={`group relative overflow-hidden rounded-2xl border-2 p-4 transition-all ${
                data.roles.includes(role.id)
                  ? 'border-orange-500 bg-orange-50 shadow-lg shadow-orange-500/10'
                  : 'border-slate-200 bg-white hover:border-orange-200'
              }`}
            >
              <span className="text-2xl">{role.icon}</span>
              <p className={`mt-2 text-sm font-semibold ${
                data.roles.includes(role.id) ? 'text-orange-700' : 'text-slate-700'
              }`}>{role.label}</p>
              <p className="text-xs text-slate-400">{role.desc}</p>
              
              {data.roles.includes(role.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Use Cases</p>
        <div className="grid grid-cols-2 gap-3">
          {useCases.map((useCase, i) => (
            <motion.button
              key={useCase.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 + 0.3 }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onToggleUseCase(useCase.id)}
              className={`relative overflow-hidden rounded-2xl border-2 p-4 text-left transition-all ${
                data.useCases.includes(useCase.id)
                  ? 'border-orange-500 bg-orange-50'
                  : 'border-slate-200 bg-white hover:border-orange-200'
              }`}
            >
              <motion.span
                animate={{ 
                  scale: data.useCases.includes(useCase.id) ? [1, 1.2, 1] : 1 
                }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                {useCase.icon}
              </motion.span>
              <p className={`mt-2 text-sm font-semibold ${
                data.useCases.includes(useCase.id) ? 'text-orange-700' : 'text-slate-900'
              }`}>{useCase.label}</p>
              <p className="mt-1 text-xs text-slate-500">{useCase.desc}</p>
              
              {data.useCases.includes(useCase.id) && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-white"
                >
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              )}
            </motion.button>
          ))}
        </div>
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
        
        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onSkip}
            className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-500 transition hover:border-slate-300"
          >
            Skip
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(251,146,60,0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={onNext}
            disabled={!canProceed}
            className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
              canProceed
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed'
            }`}
          >
            Continue <span>→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
