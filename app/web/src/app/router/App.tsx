import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import Landing from '../../pages/landing-page'
import Login from '../../pages/Login'
import Register from '../../pages/Register'
import Dashboard from '../../pages/Dashboard'
import Onboarding from '../../pages/onboarding'
import Correspondence from '../../domains/admin/modules/correspondence/pages/Correspondence'
import Subscriptions from '../../domains/admin/modules/subscriptions/pages/Subscriptions'
import Printer from '../../domains/admin/modules/printer/pages/Printer'
import Consumables from '../../domains/admin/modules/consumables/pages/Consumables'
import GasLogs from '../../domains/admin/modules/gas-logs/pages/GasLogs'

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated)
  const onboardingCompleted = useSelector((state: RootState) => state.onboarding.completed)
  const location = useLocation()
  const isOnboardingRoute = location.pathname === '/onboarding'

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  if (!onboardingCompleted) {
    if (!isOnboardingRoute) {
      return <Navigate to="/onboarding" replace />
    }
    return <>{children}</>
  }

  if (isOnboardingRoute) {
    return <Navigate to="/dashboard" replace />
  }

  return <>{children}</>
}

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Onboarding Route */}
        <Route
          path="/onboarding"
          element={
            <PrivateRoute>
              <Onboarding />
            </PrivateRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/correspondence"
          element={
            <PrivateRoute>
              <Correspondence />
            </PrivateRoute>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <PrivateRoute>
              <Subscriptions />
            </PrivateRoute>
          }
        />
        <Route
          path="/printer"
          element={
            <PrivateRoute>
              <Printer />
            </PrivateRoute>
          }
        />
        <Route
          path="/consumables"
          element={
            <PrivateRoute>
              <Consumables />
            </PrivateRoute>
          }
        />
        <Route
          path="/gas-logs"
          element={
            <PrivateRoute>
              <GasLogs />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
