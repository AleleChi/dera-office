import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { motion, AnimatePresence } from 'framer-motion';
import { AppDispatch, RootState } from '../../app/store/store';
import { nextStep, prevStep, setStep, updateData, completeOnboarding, resumeOnboarding } from '../../app/store/onboardingSlice';
import { ProgressBar } from './components/ProgressBar';
import { WelcomeStep } from './components/WelcomeStep';
import { CompanyStep } from './components/CompanyStep';
import { RoleStep } from './components/RoleStep';
import { InitialDataStep } from './components/InitialDataStep';
import { TourStep } from './components/TourStep';
import { CompletionStep } from './components/CompletionStep';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Onboarding() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { currentStep, data, completed } = useSelector((state: RootState) => state.onboarding);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (completed) {
      navigate('/dashboard');
    }
  }, [completed, navigate]);

  useEffect(() => {
    const savedState = localStorage.getItem('onboarding_state');
    if (savedState) {
      try {
        const parsed = JSON.parse(savedState);
        dispatch(resumeOnboarding(parsed));
      } catch (e) {
        console.error('Failed to resume onboarding:', e);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('onboarding_state', JSON.stringify({ currentStep, data, completed }));
  }, [currentStep, data, completed]);

  const handleNext = async () => {
    if (currentStep === 4) {
      setIsSaving(true);
      try {
        await saveOnboardingToBackend();
        await completeOnboardingBackend();
      } catch (error) {
        console.error('Failed to save onboarding:', error);
      } finally {
        setIsSaving(false);
      }
    }
    
    if (currentStep + 1 === 5) {
      localStorage.setItem('onboarding_completed', 'true');
    }
    dispatch(nextStep());
  };

  const handleBack = () => {
    dispatch(prevStep());
  };

  const handleComplete = () => {
    localStorage.removeItem('onboarding_state');
    localStorage.setItem('onboarding_completed', 'true');
    dispatch(completeOnboarding());
  };

  const handleTakeTour = () => {
    navigate('/dashboard');
  };

  const updateField = (field: string, value: any) => {
    dispatch(updateData({ [field]: value }));
  };

  const toggleRole = (roleId: string) => {
    const newRoles = data.roles.includes(roleId)
      ? data.roles.filter((r: string) => r !== roleId)
      : [...data.roles, roleId];
    dispatch(updateData({ roles: newRoles }));
  };

  const toggleUseCase = (useCaseId: string) => {
    const newCases = data.useCases.includes(useCaseId)
      ? data.useCases.filter((u: string) => u !== useCaseId)
      : [...data.useCases, useCaseId];
    dispatch(updateData({ useCases: newCases }));
  };

  const saveOnboardingToBackend = async () => {
    // Backend save disabled - data saved locally only
    console.log('[Onboarding] Data saved locally (backend disabled)');
  };

  const completeOnboardingBackend = async () => {
    // Backend completion disabled - state saved locally only
    console.log('[Onboarding] Completion saved locally (backend disabled)');
  };

  const getUserIdFromToken = (token: string): string => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.sub || payload.userId || '';
    } catch {
      return '';
    }
  };

  const canProceedCompany = data.companyName.trim() !== '' && data.industry && data.teamSize;
  const canProceedRole = data.roles.length > 0;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-white text-slate-900">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-orange-400/30 to-amber-300/20 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-32 bottom-32 h-80 w-80 rounded-full bg-gradient-to-br from-orange-300/30 to-yellow-400/20 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-orange-200/10 to-amber-200/5 blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex-1 flex flex-col"
          >
            {currentStep < 5 && (
              <ProgressBar currentStep={currentStep} />
            )}

            <div className="flex-1 flex items-center justify-center">
              <AnimatePresence mode="wait">
                {currentStep === 0 && (
                  <WelcomeStep onNext={handleNext} />
                )}

                {currentStep === 1 && (
                  <CompanyStep
                    data={data}
                    onUpdate={updateField}
                    onNext={handleNext}
                    onBack={handleBack}
                    canProceed={canProceedCompany}
                  />
                )}

                {currentStep === 2 && (
                  <RoleStep
                    data={data}
                    onToggleRole={toggleRole}
                    onToggleUseCase={toggleUseCase}
                    onNext={handleNext}
                    onBack={handleBack}
                    onSkip={handleNext}
                    canProceed={canProceedRole}
                  />
                )}

                {currentStep === 3 && (
                  <InitialDataStep
                    data={data}
                    onUpdate={updateField}
                    onNext={handleNext}
                    onBack={handleBack}
                    onSkip={handleNext}
                  />
                )}

                {currentStep === 4 && (
                  <TourStep
                    onNext={handleNext}
                    onBack={handleBack}
                  />
                )}

                {currentStep === 5 && (
                  <CompletionStep
                    onComplete={handleComplete}
                    onTakeTour={handleTakeTour}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        {isSaving && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                className="h-10 w-10 rounded-full border-4 border-orange-200 border-t-orange-500"
              />
              <p className="text-sm font-medium text-slate-600">Saving your workspace...</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}