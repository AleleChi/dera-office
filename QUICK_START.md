# Quick Start Guide

## 🚀 Project Overview

This is a complete Office Management System with:
- **Backend**: NestJS + Supabase REST API
- **Web App**: React + Vite + Redux Toolkit
- **Mobile App**: Flutter + GetX

## ⚡ Quick Setup (5 minutes)

### 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
```

**Edit .env with your Supabase credentials:**
```
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
JWT_SECRET=your-secret-key
```

**Start backend:**
```bash
npm run start:dev
```
✅ Backend runs on `http://localhost:3001`

### 2. Web Frontend Setup

```bash
cd app/web
npm install
npm run dev
```
✅ Web app runs on `http://localhost:5173`

### 3. Mobile App Setup (Optional)

```bash
cd app/mobile
flutter pub get
flutter run
```

## 📁 Project Structure

```
root/
├── backend/          (NestJS + Supabase)
├── app/
│   ├── web/         (React + Vite)
│   └── mobile/      (Flutter + GetX)
└── README_NEW_STACK.md
```

## 🔑 Key Features

| Feature | Backend | Web | Mobile |
|---------|---------|-----|--------|
| Authentication | ✅ JWT | ✅ RTK Query | ✅ GetX |
| Correspondence | ✅ CRUD API | ✅ RTK Query | ✅ GetX |
| Subscriptions | ✅ CRUD API | ✅ RTK Query | ✅ UI Ready |
| Printer Logs | ✅ CRUD API | ✅ RTK Query | ✅ UI Ready |
| Consumables | ✅ CRUD API | ✅ RTK Query | ✅ UI Ready |
| Gas Logs | ✅ CRUD API | ✅ RTK Query | ✅ UI Ready |

## 🔗 API Endpoints

All endpoints available at `http://localhost:3001`:

```
POST   /auth/login                    - Login
POST   /auth/register                 - Register
GET    /correspondence                - List
POST   /correspondence                - Create
PUT    /correspondence/:id            - Update
DELETE /correspondence/:id            - Delete
```

Similar endpoints for: `/subscriptions`, `/printer/logs`, `/consumables`, `/gas-logs`

## 🎯 Next Steps

1. **Backend**: Add Supabase credentials to `.env`
2. **Database**: Set up Supabase database schema
3. **API Integration**: Implement real API calls
4. **Testing**: Run test suites
5. **Deployment**: Deploy to production

## 📚 Documentation

- [Backend README](./backend/README.md) - NestJS & Supabase setup
- [Web README](./app/web/README.md) - React & Vite setup
- [Mobile README](./app/mobile/README.md) - Flutter & GetX setup
- [Full README](./README_NEW_STACK.md) - Complete project overview

## 🛠️ Tech Stack Reference

### Backend
- NestJS - Modern Node.js framework
- Supabase - PostgreSQL + Auth + APIs
- JWT - Secure authentication
- Express middleware

### Web
- React 18 - UI library
- Vite - Lightning-fast build tool
- Redux Toolkit - State management
- RTK Query - API data fetching
- Tailwind CSS - Utility-first CSS
- React Hook Form - Form management

### Mobile
- Flutter - Cross-platform framework
- GetX - State management & routing
- GetStorage - Local data persistence
- Dio - HTTP client

## 🔐 Security Notes

- Store `.env` files securely
- Never commit secrets
- Use strong JWT secrets
- Enable CORS properly
- Validate all API inputs

## 🚨 Troubleshooting

### Port already in use
```bash
# Find and kill process on port
lsof -i :3001    # Check
kill -9 <PID>    # Kill
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm package-lock.json node_modules/
npm install
```

### Flutter issues
```bash
flutter clean
flutter pub get
flutter run
```

## 💡 Best Practices

✅ Always run backend before web/mobile
✅ Use consistent naming conventions
✅ Keep API endpoints organized
✅ Validate user input
✅ Handle errors gracefully
✅ Cache data efficiently
✅ Test thoroughly before deployment

## 📞 Support

Refer to individual README files in each directory for detailed setup and troubleshooting.
