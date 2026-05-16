import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { motion } from 'framer-motion'
import { logout } from '../../../../../app/store/slices/authSlice'
import Layout from '../../../../../shared/layout/Layout'

export default function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <Layout>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        transition={{ duration: 0.6 }}
        className="space-y-8"
      >
        <div>
          <motion.h1
            variants={fadeUpVariants}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-white mb-2"
          >
            Dashboard
          </motion.h1>
          <motion.p
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Welcome to your Office Management System
          </motion.p>
        </div>

        <motion.div
          variants={fadeUpVariants}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {[
            { title: 'Correspondence', path: '/correspondence', icon: '📧', description: 'Manage office communications' },
            { title: 'Subscriptions', path: '/subscriptions', icon: '💰', description: 'Track service subscriptions' },
            { title: 'Printer', path: '/printer', icon: '🖨️', description: 'Monitor printer status' },
            { title: 'Consumables', path: '/consumables', icon: '📦', description: 'Manage office supplies' },
            { title: 'Gas Logs', path: '/gas-logs', icon: '⛽', description: 'Track gas usage logs' },
          ].map((item, index) => (
            <motion.button
              key={item.path}
              onClick={() => navigate(item.path)}
              variants={cardVariants}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group p-8 bg-slate-900/50 border border-white/10 rounded-3xl backdrop-blur-xl hover:bg-slate-800/50 hover:border-white/20 transition-all duration-300 text-left shadow-xl shadow-slate-950/20"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white text-xl mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  )
}
