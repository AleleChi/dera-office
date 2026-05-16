import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-lg font-bold text-white">
                O
              </span>
              <p className="text-lg font-semibold text-slate-900">Office Manager</p>
            </div>
            <p className="mt-4 max-w-sm text-sm text-slate-600">
              A premium office operations platform for teams who want polished workflows and real results.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Product</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#features" className="transition-colors hover:text-orange-600">Features</a></li>
              <li><a href="#how-it-works" className="transition-colors hover:text-orange-600">How it Works</a></li>
              <li><a href="#roles" className="transition-colors hover:text-orange-600">Roles</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li><a href="#" className="transition-colors hover:text-orange-600">Blog</a></li>
              <li><a href="#" className="transition-colors hover:text-orange-600">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-orange-600">Privacy</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Get in touch</p>
            <p className="mt-4 text-sm text-slate-600">
              Ready to see the full experience? Log in or create an account to begin.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-8 text-center text-sm text-slate-500">
          © 2026 Office Manager. All rights reserved.
        </div>
      </div>
    </footer>
  )
}