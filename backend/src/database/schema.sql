-- Office Management System Database Schema
-- Run this SQL in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Companies table
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  email TEXT,
  industry TEXT,
  team_size TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (profile data linked to Supabase Auth)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth_id TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  role TEXT DEFAULT 'staff',
  company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
  onboarding_completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Members table (relationship between users and companies)
CREATE TABLE IF NOT EXISTS members (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
  role TEXT DEFAULT 'member',
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, company_id)
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_company_id ON users(company_id);
CREATE INDEX IF NOT EXISTS idx_members_company_id ON members(company_id);
CREATE INDEX IF NOT EXISTS idx_members_user_id ON members(user_id);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE members ENABLE ROW LEVEL SECURITY;

-- RLS Policies for companies (allow full access for service role)
CREATE POLICY IF NOT EXISTS "service_role_full_access_companies" ON companies
  FOR ALL USING (true) WITH CHECK (true);

-- RLS Policies for users (allow full access for service role)
CREATE POLICY IF NOT EXISTS "service_role_full_access_users" ON users
  FOR ALL USING (true) WITH CHECK (true);

-- RLS Policies for members (allow full access for service role)
CREATE POLICY IF NOT EXISTS "service_role_full_access_members" ON members
  FOR ALL USING (true) WITH CHECK (true);

-- Subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  provider TEXT,
  cost DECIMAL(10, 2),
  billing_cycle TEXT DEFAULT 'monthly',
  start_date DATE,
  expiry_date DATE,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Consumables table
CREATE TABLE IF NOT EXISTS consumables (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  item_name TEXT NOT NULL,
  quantity INTEGER DEFAULT 0,
  min_quantity INTEGER DEFAULT 0,
  unit TEXT,
  date DATE DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Printer logs table
CREATE TABLE IF NOT EXISTS printer_logs (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  printer_name TEXT NOT NULL,
  page_count INTEGER DEFAULT 0,
  status TEXT DEFAULT 'active',
  date DATE DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Gas logs table
CREATE TABLE IF NOT EXISTS gas_logs (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  vehicle_name TEXT NOT NULL,
  liters DECIMAL(10, 2) DEFAULT 0,
  cost DECIMAL(10, 2),
  odometer_reading INTEGER,
  date DATE DEFAULT CURRENT_DATE,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Correspondence table
CREATE TABLE IF NOT EXISTS correspondence (
  id SERIAL PRIMARY KEY,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  sender TEXT NOT NULL,
  recipient TEXT NOT NULL,
  subject TEXT,
  reference_number TEXT,
  date DATE DEFAULT CURRENT_DATE,
  delivery_method TEXT,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS for all new tables
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE consumables ENABLE ROW LEVEL SECURITY;
ALTER TABLE printer_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE gas_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE correspondence ENABLE ROW LEVEL SECURITY;

-- RLS Policies for all new tables
CREATE POLICY IF NOT EXISTS "service_role_full_access_subscriptions" ON subscriptions
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "service_role_full_access_consumables" ON consumables
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "service_role_full_access_printer_logs" ON printer_logs
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "service_role_full_access_gas_logs" ON gas_logs
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY IF NOT EXISTS "service_role_full_access_correspondence" ON correspondence
  FOR ALL USING (true) WITH CHECK (true);