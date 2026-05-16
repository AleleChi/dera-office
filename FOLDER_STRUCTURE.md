# Office Management System Folder Structure

This document provides a dedicated folder structure overview for the Office Management System project.

```
office-management-system/
├── backend/
│   ├── src/
│   │   ├── app.controller.ts
│   │   ├── app.module.ts
│   │   ├── app.service.ts
│   │   ├── main.ts
│   │   └── modules/
│   │       ├── auth/
│   │       │   ├── auth.controller.ts
│   │       │   ├── auth.module.ts
│   │       │   ├── auth.service.ts
│   │       │   └── strategies/
│   │       ├── consumables/
│   │       │   ├── consumables.controller.ts
│   │       │   ├── consumables.module.ts
│   │       │   └── consumables.service.ts
│   │       ├── correspondence/
│   │       │   ├── correspondence.controller.ts
│   │       │   ├── correspondence.module.ts
│   │       │   └── correspondence.service.ts
│   │       ├── gas-logs/
│   │       │   ├── gas-logs.controller.ts
│   │       │   ├── gas-logs.module.ts
│   │       │   └── gas-logs.service.ts
│   │       ├── printer/
│   │       │   ├── printer.controller.ts
│   │       │   ├── printer.module.ts
│   │       │   └── printer.service.ts
│   │       └── subscriptions/
│   │           ├── subscriptions.controller.ts
│   │           ├── subscriptions.module.ts
│   │           └── subscriptions.service.ts
│   ├── package.json
│   ├── tsconfig.json
│   ├── nest-cli.json
│   ├── .env.example
│   ├── .gitignore
│   └── README.md
│
├── app/
│   ├── web/
│   │   ├── public/
│   │   │   └── landing-page/
│   │   │       ├── index.html
│   │   │       ├── README.md
│   │   │       ├── script.js
│   │   │       └── styles.css
│   │   ├── src/
│   │   │   ├── app/
│   │   │   │   ├── providers/
│   │   │   │   └── router/
│   │   │   │       ├── App.tsx
│   │   │   │       └── index.tsx
│   │   │   ├── domains/
│   │   │   │   ├── admin/
│   │   │   │   ├── manager/
│   │   │   │   ├── staff/
│   │   │   │   └── superadmin/
│   │   │   ├── pages/
│   │   │   │   ├── Dashboard.tsx
│   │   │   │   ├── landing-page/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── components/
│   │   │   │   ├── Login.tsx
│   │   │   │   ├── Register.tsx
│   │   │   │   ├── auth/
│   │   │   │   └── landing/
│   │   │   ├── shared/
│   │   │   │   ├── constants/
│   │   │   │   ├── hooks/
│   │   │   │   ├── layout/
│   │   │   │   ├── services/
│   │   │   │   ├── types/
│   │   │   │   ├── ui/
│   │   │   │   └── utils/
│   │   │   ├── index.css
│   │   │   └── main.tsx
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.node.json
│   │   ├── vite.config.ts
│   │   ├── tailwind.config.js
│   │   ├── postcss.config.js
│   │   ├── .gitignore
│   │   └── README.md
│   └── mobile/
│       ├── lib/
│       │   ├── main.dart
│       │   └── app/
│       │       ├── controllers/
│       │       │   ├── auth_controller.dart
│       │       │   └── correspondence_controller.dart
│       │       ├── modules/
│       │       │   ├── auth/
│       │       │   │   ├── login/
│       │       │   │   └── register/
│       │       │   ├── dashboard/
│       │       │   ├── correspondence/
│       │       │   ├── subscriptions/
│       │       │   ├── printer/
│       │       │   ├── consumables/
│       │       │   └── gas_logs/
│       │       ├── routes/
│       │       │   ├── app_pages.dart
│       │       │   └── app_routes.dart
│       │       └── theme/
│       │           └── app_theme.dart
│       ├── pubspec.yaml
│       ├── pubspec.lock
│       ├── analysis_options.yaml
│       ├── .gitignore
│       └── README.md
│
├── data/
│   ├── documents/
│   ├── scans/
│   └── 1776162726019_WACS_meeting_2.pdf
│
├── ARCHITECTURE.md
├── LANDING_PAGE_GUIDE.md
├── QUICK_START.md
├── README_NEW_STACK.md
├── STATUS.md
├── .gitignore
└── PROJECT_STRUCTURE.md
```

## Notes
- `backend/` contains the NestJS API and feature modules.
- `app/web/` contains the React + Vite web frontend.
- `app/mobile/` contains the Flutter + GetX mobile app.
- `data/` stores documents, scans, and sample files.
- Documentation files live at the repository root.
