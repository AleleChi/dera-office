import { motion } from 'framer-motion'
import Layout from '../../../../../shared/layout/Layout'
import { useGetCorrespondenceQuery } from '../../../../../app/store/api/correspondenceApi'

export default function Correspondence() {
  const { data: correspondence, isLoading } = useGetCorrespondenceQuery(undefined)

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
        <motion.h1
          variants={fadeUpVariants}
          transition={{ delay: 0.1 }}
          className="text-4xl font-bold text-white"
        >
          Correspondence
        </motion.h1>

        {isLoading && (
          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center py-12"
          >
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            <span className="ml-3 text-slate-400">Loading correspondence...</span>
          </motion.div>
        )}

        {correspondence && correspondence.length === 0 && (
          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.2 }}
            className="text-center py-12"
          >
            <p className="text-slate-400 text-lg">No correspondence found</p>
          </motion.div>
        )}

        {correspondence && correspondence.length > 0 && (
          <motion.div
            variants={fadeUpVariants}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-white/10 rounded-3xl backdrop-blur-xl overflow-hidden shadow-xl shadow-slate-950/20"
          >
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-slate-800/50 border-b border-white/10">
                  <tr>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Reference</th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Type</th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Date</th>
                    <th className="px-8 py-4 text-left text-sm font-semibold text-slate-300 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {correspondence.map((item: any, index: number) => (
                    <motion.tr
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="hover:bg-white/5 transition-colors duration-200"
                    >
                      <td className="px-8 py-4 text-sm text-white font-medium">{item.reference}</td>
                      <td className="px-8 py-4 text-sm text-slate-300">{item.doc_type}</td>
                      <td className="px-8 py-4 text-sm text-slate-300">{item.logged_date}</td>
                      <td className="px-8 py-4 text-sm">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Active'
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                            : 'bg-slate-500/20 text-slate-400 border border-slate-500/30'
                        }`}>
                          {item.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  )
}
