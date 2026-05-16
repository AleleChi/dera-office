import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { animations } from './animations';

const subscriptionSuggestions = [
  { name: 'Microsoft 365', cost: 22 },
  { name: 'Slack', cost: 15 },
  { name: 'Zoom', cost: 16 },
  { name: 'Google Workspace', cost: 18 },
  { name: 'Notion', cost: 10 },
  { name: 'Figma', cost: 15 },
];

const inventorySuggestions = [
  { name: 'Printer Paper', quantity: 10, reorder: 5 },
  { name: 'Ink Cartridge', quantity: 2, reorder: 3 },
  { name: 'Pens', quantity: 50, reorder: 20 },
  { name: 'Sticky Notes', quantity: 20, reorder: 10 },
];

interface InitialDataStepProps {
  data: { subscription?: { name: string; cost: string; cycle: string }; itemType: 'subscription' | 'inventory' };
  onUpdate: (field: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
  onSkip: () => void;
}

export function InitialDataStep({ data, onUpdate, onNext, onBack, onSkip }: InitialDataStepProps) {
  const [itemType, setItemType] = useState<'subscription' | 'inventory'>(data.itemType || 'subscription');
  const [name, setName] = useState(data.subscription?.name || '');
  const [cost, setCost] = useState(data.subscription?.cost?.replace('$', '') || '');
  const [cycle, setCycle] = useState(data.subscription?.cycle || 'Monthly');
  const [inventoryName, setInventoryName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [reorderLevel, setReorderLevel] = useState(5);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (itemType === 'subscription') {
      setIsValid(name.trim() !== '' && cost !== '');
    } else {
      setIsValid(inventoryName.trim() !== '');
    }
  }, [itemType, name, cost, inventoryName]);

  const handleSuggestionClick = (suggestion: { name: string; cost: number }) => {
    setName(suggestion.name);
    setCost(suggestion.cost.toString());
  };

  const handleInventorySuggestionClick = (suggestion: { name: string; quantity: number; reorder: number }) => {
    setInventoryName(suggestion.name);
    setQuantity(suggestion.quantity);
    setReorderLevel(suggestion.reorder);
  };

  const handleNext = () => {
    if (itemType === 'subscription') {
      onUpdate('subscription', { name, cost, cycle });
    } else {
      onUpdate('subscription', { name: inventoryName, cost: quantity.toString(), cycle: reorderLevel.toString() });
    }
    onUpdate('itemType', itemType);
    onNext();
  };

  return (
    <motion.div
      key="data"
      variants={animations.fadeUp}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-lg"
    >
      <div className="mb-8 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-xl shadow-emerald-500/25"
        >
          <span className="text-3xl">📋</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600"
        >
          Step 3 of 4
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-3xl font-semibold text-slate-900"
        >
          Add your first item
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-2 text-slate-600"
        >
          Let's add a subscription or inventory item to get started
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50"
      >
        <div className="mb-5 flex gap-2">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setItemType('subscription')}
            className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
              itemType === 'subscription'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Subscription
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setItemType('inventory')}
            className={`flex-1 rounded-2xl px-4 py-3 text-sm font-semibold transition-all ${
              itemType === 'inventory'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Inventory
          </motion.button>
        </div>

        {itemType === 'subscription' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Service Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Microsoft 365, Slack"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
              />
              
              <div className="mt-3 flex flex-wrap gap-2">
                {subscriptionSuggestions.map((s) => (
                  <motion.button
                    key={s.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSuggestionClick(s)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      name === s.name
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    {s.name}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Cost (monthly)</label>
                <div className="relative mt-2">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">$</span>
                  <input
                    type="text"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                    placeholder="0.00"
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-8 pr-4 text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Billing Cycle</label>
                <select
                  value={cycle}
                  onChange={(e) => setCycle(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                >
                  <option>Monthly</option>
                  <option>Yearly</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {itemType === 'inventory' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700">Item Name</label>
              <input
                type="text"
                value={inventoryName}
                onChange={(e) => setInventoryName(e.target.value)}
                placeholder="e.g., Printer Paper, Ink Cartridge"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:bg-white focus:ring-2 focus:ring-orange-100"
              />
              
              <div className="mt-3 flex flex-wrap gap-2">
                {inventorySuggestions.map((item) => (
                  <motion.button
                    key={item.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleInventorySuggestionClick(item)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      inventoryName === item.name
                        ? 'bg-orange-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-orange-100 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Quantity</label>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Reorder Level</label>
                <input
                  type="number"
                  value={reorderLevel}
                  onChange={(e) => setReorderLevel(parseInt(e.target.value) || 0)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 flex items-center gap-2 rounded-xl bg-orange-50 p-3 text-xs text-orange-700"
        >
          <svg className="h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          This is just an example. You can edit or remove it later.
        </motion.div>
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
            Skip for now
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(251,146,60,0.3)' }}
            whileTap={{ scale: 0.98 }}
            onClick={handleNext}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-orange-500/40"
          >
            Add & Continue <span>→</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
