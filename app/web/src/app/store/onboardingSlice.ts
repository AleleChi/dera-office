import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface OnboardingData {
  companyName: string;
  industry: string;
  teamSize: string;
  roles: string[];
  useCases: string[];
  initialData?: any;
}

interface OnboardingState {
  currentStep: number;
  completed: boolean;
  data: OnboardingData;
}

const getInitialState = (): OnboardingState => {
  const savedState = localStorage.getItem('onboarding_state');
  const onboardingCompletedFlag = localStorage.getItem('onboarding_completed');
  let parsedState: Partial<OnboardingState> = {};
  
  if (savedState) {
    try {
      parsedState = JSON.parse(savedState);
    } catch (e) {
      console.error('Failed to parse onboarding state:', e);
    }
  }

  return {
    currentStep: parsedState.currentStep ?? 0,
    completed: (onboardingCompletedFlag === 'true') || (parsedState.completed ?? false),
    data: parsedState.data ?? {
      companyName: '',
      industry: '',
      teamSize: '',
      roles: [],
      useCases: [],
    },
  };
};

const initialState: OnboardingState = getInitialState();

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      state.currentStep = action.payload;
    },
    nextStep: (state) => {
      if (state.currentStep < 5) state.currentStep += 1;
    },
    prevStep: (state) => {
      if (state.currentStep > 0) state.currentStep -= 1;
    },
    updateData: (state, action: PayloadAction<Partial<OnboardingData>>) => {
      state.data = { ...state.data, ...action.payload };
    },
    completeOnboarding: (state) => {
      state.completed = true;
      state.currentStep = 5;
    },
    resumeOnboarding: (state, action: PayloadAction<Partial<OnboardingState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStep, nextStep, prevStep, updateData, completeOnboarding, resumeOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
