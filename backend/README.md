# NestJS Backend - Office Management System

This is the backend API built with NestJS and Supabase.

## Features

- 🔐 JWT Authentication with Supabase
- 📧 Correspondence Management
- 💰 Subscription Tracking
- 🖨️ Printer Monitoring
- 📦 Consumables Management
- ⛽ Gas Logs
- 🚀 RESTful API

## Installation

```bash
cd backend
npm install
```

## Environment Setup

1. Copy `.env.example` to `.env`
2. Fill in your Supabase credentials:
   - `SUPABASE_URL`: Your Supabase project URL
   - `SUPABASE_KEY`: Your Supabase anon key
3. Set your `JWT_SECRET`

## Running

### Development
```bash
npm run start:dev
```

### Production
```bash
npm run build
npm run start:prod
```

## API Endpoints

### Authentication
- `POST /auth/login` - Login user
- `POST /auth/register` - Register new user

### Correspondence
- `GET /correspondence` - Get all correspondence
- `GET /correspondence/:id` - Get correspondence by ID
- `POST /correspondence` - Create new correspondence
- `PUT /correspondence/:id` - Update correspondence
- `DELETE /correspondence/:id` - Delete correspondence

### Subscriptions
- `GET /subscriptions` - Get all subscriptions
- `POST /subscriptions` - Create subscription
- `PUT /subscriptions/:id` - Update subscription
- `DELETE /subscriptions/:id` - Delete subscription

### Printer
- `GET /printer/logs` - Get all printer logs
- `POST /printer/logs` - Create printer log
- `PUT /printer/logs/:id` - Update printer log
- `DELETE /printer/logs/:id` - Delete printer log

### Consumables
- `GET /consumables` - Get all consumables
- `POST /consumables` - Create consumable
- `PUT /consumables/:id` - Update consumable
- `DELETE /consumables/:id` - Delete consumable

### Gas Logs
- `GET /gas-logs` - Get all gas logs
- `POST /gas-logs` - Create gas log
- `PUT /gas-logs/:id` - Update gas log
- `DELETE /gas-logs/:id` - Delete gas log

## Testing

```bash
npm run test
npm run test:cov
```
