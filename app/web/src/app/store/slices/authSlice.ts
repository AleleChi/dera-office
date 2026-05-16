import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  user: {
    id?: string
    email?: string
  } | null
  company: {
    id?: string
    name?: string
  } | null
  token: string | null
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  company: null,
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload
      state.isAuthenticated = !!action.payload
    },
    setCompany: (state, action: PayloadAction<AuthState['company']>) => {
      state.company = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
      localStorage.setItem('token', action.payload)
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.company = null
      state.token = null
      state.isAuthenticated = false
      localStorage.removeItem('token')
      localStorage.removeItem('onboarding_state')
      localStorage.removeItem('onboarding_completed')
    },
  },
})

export const { setUser, setCompany, setToken, logout } = authSlice.actions
export default authSlice.reducer
