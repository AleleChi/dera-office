# Project Structure Guide

This is a clean, modern full-stack application with separate backend, web, and mobile applications.

## 📁 Directory Structure

```
office-management-system/
├── backend/                 # NestJS REST API + Supabase
│   ├── src/
│   │   ├── modules/        # Feature modules
│   │   ├── app.module.ts
│   │   ├── main.ts
│   │   └── ...
│   ├── package.json
│   ├── tsconfig.json
│   ├── .env.example        # Copy to .env and fill in Supabase credentials
│   └── README.md           # Backend documentation
│
├── app/                     # Frontend applications
│   ├── web/                # React + Vite + Redux Toolkit
│   │   ├── src/
│   │   │   ├── pages/      # Page components
│   │   │   ├── components/ # Reusable components
│   │   │   ├── store/      # Redux setup, slices, API endpoints
│   │   │   ├── App.tsx
│   │   │   └── main.tsx
│   │   ├── index.html
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── package.json
│   │   ├── public/
│   │   │   └── landing-page/  # Old landing page (reference only)
│   │   └── README.md       # Web frontend documentation
│   │
│   └── mobile/             # Flutter + GetX
│       ├── lib/
│       │   ├── main.dart
│       │   └── app/
│       │       ├── routes/
│       │       ├── modules/
│       │       ├── controllers/
│       │       ├── theme/
│       │       └── ...
│       ├── pubspec.yaml
│       ├── analysis_options.yaml
│       └── README.md       # Mobile documentation
│
├── data/                    # Shared data and uploads
│   ├── documents/          # Document uploads
│   ├── scans/              # Scanned files
│   └── ...                 # Other data files
│
├── QUICK_START.md          # Quick setup guide
├── README_NEW_STACK.md     # Full project documentation
├── .gitignore              # Git ignore rules
└── node_modules/           # ⚠️ TO BE IGNORED (old, remove manually if needed)
```

## 🗑️ Cleanup Notes

### Deleted (Old Express System)
- ✅ `server.js` - Old Express server
- ✅ `Public/` - Old Express public folder
- ✅ `package.json` (root) - Old root dependencies
- ✅ `package-lock.json` (root) - Old lock file
- ✅ `web-landing-page/` - Moved to `app/web/public/landing-page` (reference)
- ✅ `uploads/` - Moved to `data/`

### Archived/Moved
- 📦 `web-landing-page` → `app/web/public/landing-page/` (reference only)
- 📦 `uploads/` → `data/` (documents and scans)

### Note
- `node_modules/` (old) - Contains locked files from better-sqlite3. Safe to ignore or manually delete if needed.
- `office.db` (old) - SQLite database from Express system. Can be deleted if not needed.

## 🚀 Each Module is Independent

Each application has its own:
- `package.json` (backend and web)
- `pubspec.yaml` (mobile)
- Dependencies management
- Configuration files
- README with setup instructions

## 📋 How to Run

### Backend
```bash
cd backend
npm install
cp .env.example .env    # Add your Supabase credentials
npm run start:dev
```

### Web Frontend
```bash
cd app/web
npm install
npm run dev
```

### Mobile
```bash
cd app/mobile
flutter pub get
flutter run
```

## 🔗 All Services Running
- Backend: `http://localhost:3001`
- Web: `http://localhost:5173`
- Mobile: Runs on device/emulator

## 📚 Documentation Files
- [QUICK_START.md](./QUICK_START.md) - 5-minute setup
- [README_NEW_STACK.md](./README_NEW_STACK.md) - Complete overview
- [backend/README.md](./backend/README.md) - Backend details
- [app/web/README.md](./app/web/README.md) - Web details
- [app/mobile/README.md](./app/mobile/README.md) - Mobile details

## ✨ Clean Architecture Benefits
- **Separation of Concerns** - Each app handles its own logic
- **Independent Deployment** - Deploy frontend and backend separately
- **Technology Flexibility** - Choose best tools for each platform
- **Easy Scaling** - Add microservices without affecting other apps
- **Better Collaboration** - Teams can work independently
