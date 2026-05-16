import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { animations } from './animations';

const industries = [
  'Technology', 'Healthcare', 'Finance', 'Education', 'Manufacturing',
  'Retail', 'Real Estate', 'Legal', 'Media', 'Other'
];

const teamSizes = [
  { label: '1-10', value: '1-10' },
  { label: '11-50', value: '11-50' },
  { label: '51-200', value: '51-200' },
  { label: '201-500', value: '201-500' },
  { label: '500+', value: '500+' },
];

interface CompanyStepProps {
  data: { companyName: string; industry: string; teamSize: string };
  onUpdate: (field: string, value: string) => void;
  onNext: () => void;
  onBack: () => void;
  canProceed: boolean;
}

export function CompanyStep({ data, onUpdate, onNext, onBack, canProceed }: CompanyStepProps) {
  const [error, setError] = useState('');
  const [inputFocus, setInputFocus] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(data.industry);
  const [selectedTeamSize, setSelectedTeamSize] = useState(data.teamSize);

  useEffect(() => {
    if (data.industry) setSelectedIndustry(data.industry);
    if (data.teamSize) setSelectedTeamSize(data.teamSize);
  }, [data.industry, data.teamSize]);

  const validate = () => {
    if (data.companyName.trim() === '') {
      setError('Company name is required');
      return false;
    }
    if (!selectedIndustry) {
      setError('Please select an industry');
      return false;
    }
    if (!selectedTeamSize) {
      setError('Please select a team size');
      return false;
    }
    return true;
  };

  const handleNext = () => {
    setError('');
    if (validate()) {
      onNext();
    }
  };

  return (
    <motion.div
      key="company"
      variants={animations.slideIn}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full max-w-lg"
    >
      <div className="mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-600">
            Step 1 of 4
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">
            Tell us about your company
          </h2>
        </motion.div>
      </div>

      <div className="space-y-6">
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="block text-sm font-medium text-slate-700"
          >
            Company Name
          </motion.div>
          <motion.div 
            className="relative mt-2"
            animate={{
              boxShadow: inputFocus
                ? '0 0 0 3px rgba(251,146,60,0.15)'
                : data.companyName.trim() !== ''
                ? '0 0 0 2px rgba(16,185,129,0.2)'
                : '0 0 0 0px rgba(251,146,60,0)',
            }}
            transition={{ duration: 0.2 }}
          >
            <input
              autoFocus
              type="text"
              value={data.companyName}
              onChange={(e) => onUpdate('companyName', e.target.value)}
              onFocus={() => setInputFocus(true)}
              onBlur={() => setInputFocus(false)}
              placeholder="Acme Corporation"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-lg text-slate-900 outline-none transition-all focus:border-orange-400 focus:bg-white"
            />
            {data.companyName.trim() !== '' && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-500"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.span>
            )}
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="block text-sm font-medium text-slate-700"
          >
            Industry
          </motion.div>
          <motion.div 
            className="mt-2 grid grid-cols-2 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {industries.map((ind, i) => (
              <motion.button
                key={ind}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onUpdate('industry', ind);
                  setSelectedIndustry(ind);
                }}
                className={`rounded-2xl border-2 p-3 text-sm font-medium transition-all ${
                  selectedIndustry === ind
                    ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-md shadow-orange-500/10'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:shadow-md'
                }`}
              >
                {selectedIndustry === ind && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="mr-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-white"
                  >
                    <svg className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.span>
                )}
                {ind}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="block text-sm font-medium text-slate-700"
          >
            Team Size
          </motion.div>
          <motion.div 
            className="mt-2 grid grid-cols-3 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            {teamSizes.map((size, i) => (
              <motion.button
                key={size.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  onUpdate('teamSize', size.value);
                  setSelectedTeamSize(size.value);
                }}
                className={`rounded-2xl border-2 p-4 text-center transition-all ${
                  selectedTeamSize === size.value
                    ? 'border-orange-500 bg-orange-50 text-orange-700 shadow-md shadow-orange-500/10'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-orange-200 hover:shadow-md'
                }`}
              >
                <p className="text-lg font-semibold">{size.label}</p>
                {selectedTeamSize === size.value && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute right-2 top-2 block h-3 w-3 rounded-full bg-orange-500"
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 flex items-center gap-2 text-sm text-rose-500"
        >
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </motion.div>
      )}

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
          onClick={handleNext}
          disabled={!canProceed && !error}
          className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
            canProceed
              ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40'
              : 'bg-slate-200 text-slate-400 cursor-not-allowed'
          }`}
        >
          Continue <span>→</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
