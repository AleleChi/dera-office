# React + Vite Web Frontend

Modern web application built with React, Vite, Tailwind CSS, Redux Toolkit, and RTK Query.

## Features

- ⚡ Vite for fast development
- ⚛️ React 18 with Hooks
- 🎨 Tailwind CSS for styling
- 🔄 Redux Toolkit for state management
- 🌐 RTK Query for API data fetching and caching
- 📋 React Hook Form for form handling
- 🛣️ React Router for navigation
- 🔐 JWT Authentication

## Installation

```bash
cd app/web
npm install
```

## Development

```bash
npm run dev
```

Server will run at `http://localhost:5173`

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── pages/              # Page components
│   ├── Login.tsx
│   ├── Dashboard.tsx
│   ├── Correspondence.tsx
│   ├── Subscriptions.tsx
│   ├── Printer.tsx
│   ├── Consumables.tsx
│   └── GasLogs.tsx
├── components/         # Reusable components
│   └── Layout.tsx
├── store/
│   ├── store.ts        # Redux store
│   ├── slices/         # Redux slices
│   └── api/            # RTK Query endpoints
├── App.tsx
└── main.tsx
```

## API Configuration

The app is configured to proxy API requests to `http://localhost:3001` in development.

Update `vite.config.ts` to change the backend URL.
