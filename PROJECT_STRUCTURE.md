#!/bin/bash
# Project Tree Visualization
# Generated: April 20, 2026

office-management-system/
│
├── 📁 backend/                           # NestJS + Supabase API
│   ├── src/
│   │   ├── modules/                      # Feature modules
│   │   │   ├── auth/                     # Authentication
│   │   │   ├── correspondence/           # Correspondence CRUD
│   │   │   ├── subscriptions/            # Subscriptions management
│   │   │   ├── printer/                  # Printer monitoring
│   │   │   ├── consumables/              # Consumables tracking
│   │   │   └── gas-logs/                 # Gas logs management
│   │   ├── app.module.ts                 # Main module
│   │   ├── app.controller.ts
│   │   ├── app.service.ts
│   │   └── main.ts                       # Entry point
│   ├── package.json                      # Dependencies
│   ├── tsconfig.json
│   ├── nest-cli.json
│   ├── .env.example                      # Environment template
│   ├── .gitignore
│   ├── README.md                         # Backend docs
│   └── 🚀 npm run start:dev               # Port 3001
│
├── 📁 app/                               # Frontend applications
│   ├── web/                              # React + Vite
│   │   ├── src/
│   │   │   ├── pages/                    # Page components
│   │   │   │   ├── landing-page/         # Landing page
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── components/       # Landing page components
│   │   │   │   │       ├── Hero.tsx
│   │   │   │   │       ├── Features.tsx
│   │   │   │   │       ├── HowItWorks.tsx
│   │   │   │   │       ├── Roles.tsx
│   │   │   │   │       ├── ValueProposition.tsx
│   │   │   │   │       ├── CTA.tsx
│   │   │   │   │       ├── Footer.tsx
│   │   │   │   │       ├── Navigation.tsx
│   │   │   │   │       ├── AnimatedBackground.tsx
│   │   │   │   │       └── FloatingParticles.tsx
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── Correspondence.tsx
│   │   │   │   ├── Subscriptions.tsx
│   │   │   │   ├── Printer.tsx
│   │   │   │   ├── Consumables.tsx
│   │   │   │   └── GasLogs.tsx
│   │   │   ├── components/               # Reusable components
│   │   │   │   └── Layout.tsx
│   │   │   ├── store/                    # Redux Toolkit
│   │   │   │   ├── store.ts
│   │   │   │   ├── slices/
│   │   │   │   │   └── authSlice.ts
│   │   │   │   └── api/                  # RTK Query endpoints
│   │   │   │       ├── apiSlice.ts
│   │   │   │       ├── authApi.ts
│   │   │   │       ├── correspondenceApi.ts
│   │   │   │       ├── subscriptionsApi.ts
│   │   │   │       ├── printerApi.ts
│   │   │   │       ├── consumablesApi.ts
│   │   │   │       └── gasLogsApi.ts
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── index.css
│   │   ├── public/
│   │   │   └── landing-page/             # Reference (old landing page)
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   ├── .gitignore
│   │   ├── package.json                  # React dependencies
│   │   ├── README.md                     # Web docs
│   │   └── 🚀 npm run dev                 # Port 5173
│   │
│   └── mobile/                           # Flutter + GetX
│       ├── lib/
│       │   ├── main.dart                 # Entry point
│       │   └── app/
│       │       ├── routes/
│       │       │   ├── app_routes.dart
│       │       │   └── app_pages.dart
│       │       ├── modules/              # Feature modules
│       │       │   ├── splash/
│       │       │   ├── auth/
│       │       │   │   ├── login/
│       │       │   │   └── register/
│       │       │   ├── dashboard/
│       │       │   ├── correspondence/
│       │       │   ├── subscriptions/
│       │       │   ├── printer/
│       │       │   ├── consumables/
│       │       │   └── gas_logs/
│       │       ├── controllers/          # GetX controllers
│       │       │   ├── auth_controller.dart
│       │       │   └── correspondence_controller.dart
│       │       └── theme/
│       │           └── app_theme.dart
│       ├── pubspec.yaml                  # Flutter dependencies
│       ├── pubspec.lock
│       ├── analysis_options.yaml
│       ├── .gitignore
│       ├── README.md                     # Mobile docs
│       └── 🚀 flutter run                 # Device/Emulator
│
├── 📁 data/                              # File storage
│   ├── documents/                        # Document uploads
│   ├── scans/                            # Scanned files
│   └── 1776162726019_WACS_meeting_2.pdf  # Sample file
│
├── 📚 Documentation
│   ├── QUICK_START.md                    # 🟢 Start here! 5-min setup
│   ├── README_NEW_STACK.md               # Complete project overview
│   ├── ARCHITECTURE.md                   # Project structure guide
│   └── CLEANUP_SUMMARY.md                # What was cleaned up
│
├── .gitignore                            # Git ignore rules
│
└── ⚠️ Legacy (can be deleted)
    ├── node_modules/                     # Old Express dependencies
    └── office.db                         # Old SQLite database

═══════════════════════════════════════════════════════════════════════════════

🎯 KEY ENDPOINTS

Backend API (Port 3001):
  ├── POST   /auth/login
  ├── POST   /auth/register
  ├── GET    /correspondence
  ├── POST   /correspondence
  ├── PUT    /correspondence/:id
  ├── DELETE /correspondence/:id
  ├── GET    /subscriptions
  ├── GET    /printer/logs
  ├── GET    /consumables
  └── GET    /gas-logs

Web Frontend (Port 5173):
  ├── / (Dashboard)
  ├── /login
  ├── /correspondence
  ├── /subscriptions
  ├── /printer
  ├── /consumables
  └── /gas-logs

═══════════════════════════════════════════════════════════════════════════════

✅ FEATURES IMPLEMENTED

✓ Full-stack authentication (JWT + Supabase)
✓ RESTful API with multiple resources
✓ State management (Redux Toolkit + GetX)
✓ Form handling with validation
✓ API data fetching and caching
✓ Navigation and routing
✓ Protected routes
✓ Responsive UI (Tailwind CSS)
✓ Cross-platform mobile support

═══════════════════════════════════════════════════════════════════════════════

🚀 QUICK START

Backend:
  $ cd backend
  $ npm install
  $ cp .env.example .env
  $ npm run start:dev

Web:
  $ cd app/web
  $ npm install
  $ npm run dev

Mobile:
  $ cd app/mobile
  $ flutter pub get
  $ flutter run

═══════════════════════════════════════════════════════════════════════════════
