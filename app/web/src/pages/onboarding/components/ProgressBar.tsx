import { motion } from 'framer-motion';

const steps = [
  { id: 'welcome', label: 'Welcome' },
  { id: 'company', label: 'Company' },
  { id: 'role', label: 'Role' },
  { id: 'data', label: 'Setup' },
  { id: 'tour', label: 'Tour' },
  { id: 'complete', label: 'Done' },
];

interface ProgressBarProps {
  currentStep: number;
  onStepClick?: (step: number) => void;
}

export function ProgressBar({ currentStep, onStepClick }: ProgressBarProps) {
  const progress = (currentStep / (steps.length - 1)) * 100;

  return (
    <div className="mb-10 select-none">
      <div className="mb-4 flex items-center justify-between">
        {steps.map((step, i) => (
          <button
            key={step.id}
            onClick={() => onStepClick?.(i)}
            disabled={i > currentStep}
            className={`flex flex-col items-center transition-all ${
              i <= currentStep ? 'text-orange-600' : 'text-slate-300'
            } ${i < currentStep ? 'cursor-pointer hover:text-orange-500' : 'cursor-default'}`}
          >
            <motion.div
              initial={false}
              animate={{
                scale: i === currentStep ? 1.15 : 1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-semibold shadow-sm transition-all ${
                i < currentStep
                  ? 'bg-orange-500 text-white shadow-orange-500/25'
                  : i === currentStep
                  ? 'border-2 border-orange-500 bg-white text-orange-600 shadow-orange-500/20'
                  : 'border-2 border-slate-200 bg-white text-slate-300'
              }`}
            >
              {i < currentStep ? (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </motion.div>
              ) : (
                <span className={i === currentStep ? 'text-orange-600' : 'text-slate-300'}>{i + 1}</span>
              )}
            </motion.div>
            <motion.span 
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="mt-2 text-[10px] font-semibold uppercase tracking-wider"
            >
              {step.label}
            </motion.span>
          </button>
        ))}
      </div>
      <div className="relative h-2 overflow-hidden rounded-full bg-slate-100">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-sm shadow-orange-500/30"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 rounded-full bg-gradient-to-l from-slate-200 to-transparent"
          initial={{ width: '100%' }}
          animate={{ width: `${100 - progress}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
