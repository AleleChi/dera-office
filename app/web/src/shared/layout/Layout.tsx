import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { logout } from '../../app/store/slices/authSlice'

export default function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/')
  }

  const navItems = [
    { path: '/dashboard', label: 'Dashboard', icon: '📊' },
    { path: '/correspondence', label: 'Correspondence', icon: '📧' },
    { path: '/subscriptions', label: 'Subscriptions', icon: '💰' },
    { path: '/printer', label: 'Printer', icon: '🖨️' },
    { path: '/consumables', label: 'Consumables', icon: '📦' },
    { path: '/gas-logs', label: 'Gas Logs', icon: '⛽' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-slate-900/95 border-r border-white/10 backdrop-blur-xl">
        <div className="p-8 border-b border-white/10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-3 text-lg font-semibold tracking-tight text-white"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-200/10 to-white/10 text-2xl text-slate-100 shadow-lg shadow-slate-950/30">
              O
            </span>
            Office Manager
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              whileHover={{ x: 4 }}
              className={`w-full px-4 py-3 text-left rounded-2xl transition-all duration-200 ${
                location.pathname === item.path
                  ? 'bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-white shadow-lg shadow-violet-500/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="mr-4 text-xl">{item.icon}</span>
              {item.label}
            </motion.button>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/10 bg-slate-900/50 backdrop-blur-xl">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLogout}
            className="w-full px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-2xl font-medium shadow-lg shadow-rose-500/25 transition hover:shadow-rose-500/40"
          >
            Sign out
          </motion.button>
        </div>
      </aside>

      {/* Main content */}
      <main className="ml-72 p-8">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}
