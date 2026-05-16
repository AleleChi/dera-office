# Office Management System - Full Stack Application

Complete modern tech stack implementation for Office Management System with:
- **Backend**: NestJS + Supabase
- **Web Frontend**: React + Vite + Redux Toolkit + RTK Query
- **Mobile Frontend**: Flutter + GetX

## Project Structure

```
root/
├── backend/           (NestJS + Supabase)
│   ├── src/
│   ├── package.json
│   └── README.md
├── app/
│   ├── web/          (React + Vite)
│   │   ├── src/
│   │   ├── package.json
│   │   └── README.md
│   └── mobile/       (Flutter + GetX)
│       ├── lib/
│       ├── pubspec.yaml
│       └── README.md
├── .gitignore
└── README.md
```

## Tech Stack

### Backend
- **Framework**: NestJS (Node.js)
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT
- **API**: RESTful

### Web Frontend
- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Data Fetching**: RTK Query
- **Forms**: React Hook Form
- **Routing**: React Router

### Mobile Frontend
- **Framework**: Flutter (Dart)
- **State Management**: GetX
- **Storage**: GetStorage
- **HTTP Client**: Dio

## Getting Started

### Prerequisites
- Node.js 18+ (for backend)
- npm or yarn (for backend and web)
- Flutter SDK 3.0+ (for mobile)
- Supabase account

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Fill in your Supabase credentials
npm run start:dev
```

Backend runs on: `http://localhost:3001`

### Web Frontend Setup

```bash
cd app/web
npm install
npm run dev
```

Web app runs on: `http://localhost:5173`

### Mobile App Setup

```bash
cd app/mobile
flutter pub get
flutter run
```

## API Endpoints

All API endpoints are documented in the backend README.

### Base URL: `http://localhost:3001`

Key endpoints:
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /correspondence` - Get all correspondence
- `GET /subscriptions` - Get subscriptions
- `GET /printer/logs` - Get printer logs
- `GET /consumables` - Get consumables
- `GET /gas-logs` - Get gas logs

## Features

✅ **User Authentication**
- JWT-based authentication
- Secure token storage
- Protected routes

✅ **Correspondence Management**
- Track incoming/outgoing correspondence
- Document storage and retrieval
- Status tracking

✅ **Subscription Management**
- Monitor service subscriptions
- Expiry date tracking
- Renewal notifications

✅ **Printer Monitoring**
- Log printer usage
- Track meter readings
- Monitor toner levels

✅ **Consumables Tracking**
- Inventory management
- Usage tracking
- Stock levels

✅ **Gas Logs**
- Monitor gas usage
- Track readings
- Alert on anomalies

## Development Workflow

### Running All Services

1. **Terminal 1 - Backend**
```bash
cd backend
npm run start:dev
```

2. **Terminal 2 - Web Frontend**
```bash
cd app/web
npm run dev
```

3. **Terminal 3 - Mobile (optional)**
```bash
cd app/mobile
flutter run
```

### Building for Production

```bash
# Backend
cd backend
npm run build
npm run start:prod

# Web
cd app/web
npm run build

# Mobile
cd app/mobile
flutter build apk    # Android
flutter build ipa    # iOS
```

## Environment Configuration

### Backend (.env)
- `PORT`: Server port (default: 3001)
- `JWT_SECRET`: JWT signing secret
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_KEY`: Your Supabase anon key

### Web Frontend
- Configure API base URL in `vite.config.ts`
- Update backend URL for production

### Mobile
- Update API base URL in controllers
- Configure for different environments

## Contributing

1. Create a feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request

## Project Status

🚀 **In Development**

- [x] Backend structure
- [x] Web frontend setup
- [x] Mobile frontend setup
- [ ] Full API implementation
- [ ] Database schema migrations
- [ ] Comprehensive testing
- [ ] Production deployment

## Support

For questions or issues, please refer to individual README files in each folder:
- [Backend](./backend/README.md)
- [Web Frontend](./app/web/README.md)
- [Mobile Frontend](./app/mobile/README.md)
