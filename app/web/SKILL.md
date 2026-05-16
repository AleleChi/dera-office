# Office Management System - Domain-Driven Architecture (Skill: Full-Stack Development)

## Overview

Office Management System is a comprehensive full-stack application with role-specific domain modules, where each user role (Superadmin, Admin Staff, Manager, Staff) has its own independent UI/UX experience. Unlike traditional role-based access systems, this architecture provides completely separate feature sets and interfaces per role.

---

## Project Structure

```
office-management-system/
├── app/
│   ├── mobile/                    # Flutter Mobile App
│   │   ├── lib/
│   │   │   ├── core/             # Core services & utilities
│   │   │   ├── presentation/     # UI layer with GetX
│   │   │   └── main.dart
│   │   └── pubspec.yaml
│   └── web/                      # React Web Application
│       ├── public/
│       ├── src/
│       │   ├── app/              # App-level setup
│       │   │   ├── store/        # Redux Toolkit store
│       │   │   ├── router/       # Route configuration
│       │   │   └── providers/    # Context providers (Auth, Theme, etc.)
│       │   ├── shared/           # Reusable across ALL roles
│       │   │   ├── ui/           # Buttons, Inputs, Modals, Cards
│       │   │   ├── layout/       # Base layouts (Sidebar, Navbar, Shell)
│       │   │   ├── hooks/        # Custom hooks (useAuth, useFetch, etc.)
│       │   │   ├── utils/        # Helpers, formatters
│       │   │   ├── constants/    # App-wide constants
│       │   │   ├── services/     # API base logic (axios instance, interceptors)
│       │   │   └── types/        # Global TypeScript types
│       │   ├── domains/          # 🔥 ROLE-SPECIFIC DOMAINS
│       │   │   ├── superadmin/
│       │   │   │   ├── modules/
│       │   │   │   │   ├── dashboard/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   ├── instructions/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   ├── office-log/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   └── settings/
│       │   │   │   │       ├── components/
│       │   │   │   │       ├── pages/
│       │   │   │   │       └── services/
│       │   │   │   ├── components/     # Superadmin-specific components
│       │   │   │   ├── layouts/        # Superadmin layout (sidebar, nav)
│       │   │   │   ├── routes/         # Superadmin routes
│       │   │   │   └── state/          # Redux slices (optional)
│       │   │   ├── admin/
│       │   │   │   ├── modules/
│       │   │   │   │   ├── dashboard/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   ├── discussions/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   └── profile/
│       │   │   │   │       ├── components/
│       │   │   │   │       ├── pages/
│       │   │   │   │       └── services/
│       │   │   │   ├── components/
│       │   │   │   ├── layouts/
│       │   │   │   ├── routes/
│       │   │   │   └── state/
│       │   │   ├── manager/
│       │   │   │   ├── modules/
│       │   │   │   │   ├── dashboard/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   ├── team-overview/
│       │   │   │   │   │   ├── components/
│       │   │   │   │   │   ├── pages/
│       │   │   │   │   │   └── services/
│       │   │   │   │   └── reports/
│       │   │   │   │       ├── components/
│       │   │   │   │       ├── pages/
│       │   │   │   │       └── services/
│       │   │   │   ├── components/
│       │   │   │   ├── layouts/
│       │   │   │   ├── routes/
│       │   │   │   └── state/
│       │   │   └── staff/
│       │   │       ├── modules/
│       │   │       │   ├── dashboard/
│       │   │       │   │   ├── components/
│       │   │       │   ├── pages/
│       │   │       │   └── services/
│       │   │       │   ├── tasks/
│       │   │       │   │   ├── components/
│       │   │       │   │   ├── pages/
│       │   │       │   │   └── services/
│       │   │       │   └── profile/
│       │   │       │       ├── components/
│       │   │       │       ├── pages/
│       │   │       │       └── services/
│       │       │   ├── components/
│       │       │   ├── layouts/
│       │       │   ├── routes/
│       │       │   ├── state/
│       │   ├── pages/          # Public pages (landing, login, register)
│       │   │   ├── landing/
│       │   │   │   ├── components/
│       │   │   │   ├── pages/
│       │   │   │   └── services/
│       │   │   └── auth/
│       │   │       ├── components/
│       │   │       ├── pages/
│       │   │       └── services/
│       │   ├── assets/         # Images, icons, fonts
│       │   ├── styles/         # Global styles
│       │   └── main.tsx
│       ├── package.json
│       └── vite.config.ts
├── backend/                     # NestJS Backend API
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/            # Authentication module
│   │   │   ├── users/           # User management
│   │   │   ├── roles/           # Role definitions
│   │   │   └── [feature-modules] # Feature-specific modules
│   │   ├── common/              # Shared utilities
│   │   └── main.ts
│   └── package.json
└── docs/                        # Documentation
    ├── API.md
    ├── DEPLOYMENT.md
    └── USER_GUIDE.md
```

---

## Domain-Driven Architecture Principles

### 1. Role-Specific Domains
Each user role operates in complete isolation:
- **Superadmin Domain**: System administration, analytics, global settings
- **Admin Domain**: Office operations, staff management, discussions
- **Manager Domain**: Team oversight, performance reports, resource allocation
- **Staff Domain**: Personal tasks, time tracking, profile management

### 2. Independent Module Architecture
Within each domain, modules are completely self-contained:
- No shared components between domains (unless in `shared/`)
- Each module has its own `components/`, `pages/`, and `services/`
- Even similar features (like "dashboard") are built independently per domain

### 3. Shared Layer Strategy
The `shared/` folder contains truly universal elements:
- **UI Components**: Buttons, inputs, modals that look the same everywhere
- **Layout Primitives**: Base containers, grids, spacing utilities
- **Hooks**: Generic hooks like `useAuth`, `useFetch`
- **Services**: Base API client, interceptors
- **Types**: Global TypeScript interfaces

---

## Authentication & Routing

### Role-Based Navigation
After login, users are routed to their domain-specific experience:

```typescript
// Authentication flow
const user = await authService.login(credentials);

switch (user.role) {
  case 'superadmin':
    navigate('/superadmin/dashboard');
    break;
  case 'admin':
    navigate('/admin/dashboard');
    break;
  case 'manager':
    navigate('/manager/dashboard');
    break;
  case 'staff':
    navigate('/staff/dashboard');
    break;
}
```

### Route Structure
```
/                     # Landing page
/auth/*               # Public auth routes (login, register)
/superadmin/*         # Superadmin domain routes
/admin/*              # Admin domain routes
/manager/*            # Manager domain routes
/staff/*              # Staff domain routes
```

---

## Domain Module Structure

Each domain follows this consistent pattern:

```
domains/[domain-name]/
├── modules/              # Feature modules within the domain
│   ├── [module-name]/
│   │   ├── components/   # Module-specific components
│   │   ├── pages/        # Route-based pages
│   │   └── services/     # Module-specific API calls
├── components/           # Domain-wide shared components
├── layouts/              # Domain-specific layouts
├── routes/               # Domain route configuration
└── state/                # Domain-specific Redux slices
```

### Example: Superadmin Dashboard Module
```
domains/superadmin/modules/dashboard/
├── components/
│   ├── AnalyticsChart.tsx
│   ├── SystemStatus.tsx
│   └── RecentActivity.tsx
├── pages/
│   ├── Dashboard.tsx
│   └── DashboardDetails.tsx
└── services/
    └── dashboardService.ts
```

---

## State Management

### Redux Toolkit with Domain Isolation

```typescript
// Store configuration with domain slices
const store = configureStore({
  reducer: {
    // Shared state
    auth: authSlice,
    ui: uiSlice,

    // Domain-specific state
    superadmin: superadminSlice,
    admin: adminSlice,
    manager: managerSlice,
    staff: staffSlice,
  },
});

// Domain-specific slice example
const superadminSlice = createSlice({
  name: 'superadmin',
  initialState,
  reducers: {
    // Superadmin-specific actions only
  },
});
```

---

## Development Workflow

### Adding a New Feature

1. **Identify Target Domain**: Which role needs this feature?
2. **Create Module Structure**:
   ```bash
   mkdir -p domains/[domain]/modules/[feature]/{components,pages,services}
   ```
3. **Implement Components**: Build domain-specific UI
4. **Add Pages**: Create route-based pages
5. **Implement Services**: Add API interactions
6. **Update Routes**: Register in domain routing
7. **Add State**: Create Redux slice if needed

### Code Organization Rules

- **No Cross-Domain Imports**: Domains should not import from each other
- **Shared Layer Only**: Use `shared/` for truly universal code
- **Domain Isolation**: Each domain is a complete, independent application
- **Consistent Patterns**: All domains follow the same internal structure

---

## Benefits of Domain-Driven Architecture

### ✅ Advantages
- **Tailored UX**: Each role gets a custom-designed experience
- **Clear Separation**: Easy to understand and maintain per-role features
- **Independent Deployment**: Domains can be updated without affecting others
- **Scalability**: New roles and features can be added cleanly
- **Team Organization**: Different teams can work on different domains

### ⚠️ Trade-offs
- **Code Duplication**: Similar features may be implemented multiple times
- **Maintenance Overhead**: More code to maintain across domains
- **Consistency Challenges**: Requires discipline to maintain UI/UX consistency
- **Learning Curve**: Developers need to understand domain boundaries

---

## Technology Stack

### Frontend (Web)
- **React 18** with TypeScript
- **Vite** for build tooling
- **Redux Toolkit** + RTK Query for state management
- **React Router** for domain-based routing
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Mobile
- **Flutter** with Dart
- **GetX** for state management
- **Dio** for HTTP requests
- **Flutter Secure Storage** for token management

### Backend
- **NestJS** with TypeScript
- **PostgreSQL** database
- **JWT** for authentication
- **Role-based access control**

---

## Migration Strategy

### From Old Structure to Domain-Driven

1. **Identify Role-Specific Features**: Map existing features to appropriate domains
2. **Move Components**: Relocate role-specific components to their domains
3. **Update Imports**: Change import paths to use domain structure
4. **Create Shared Layer**: Move truly universal code to `shared/`
5. **Update Routing**: Implement domain-based route structure
6. **Test Isolation**: Ensure domains don't have cross-dependencies

This domain-driven architecture provides a solid foundation for role-specific applications where each user type deserves its own tailored experience.
│       │   │   ├── auth/         # Shared authentication domain
│       │   │   │   ├── components/
│       │   │   │   │   ├── LoginForm.tsx
│       │   │   │   │   ├── RegisterForm.tsx
│       │   │   │   │   └── OTPVerification.tsx
│       │   │   │   ├── pages/
│       │   │   │   │   ├── Login.tsx
│       │   │   │   │   └── Register.tsx
│       │   │   │   ├── services/
│       │   │   │   │   └── authService.ts
│       │   │   │   └── utils/
│       │   │   │       └── authGuard.tsx
│       │   │   ├── superadmin/   # Superadmin domain
│       │   │   │   ├── components/
│       │   │   │   │   ├── UserManagement.tsx
│       │   │   │   │   ├── SystemSettings.tsx
│       │   │   │   │   └── AnalyticsDashboard.tsx
│       │   │   │   ├── pages/
│       │   │   │   │   ├── SuperadminDashboard.tsx
│       │   │   │   │   ├── UserManagement.tsx
│       │   │   │   │   └── SystemConfig.tsx
│       │   │   │   └── services/
│       │   │   │       └── superadminService.ts
│       │   │   ├── admin-staff/ # Admin Staff domain
│       │   │   │   ├── components/
│       │   │   │   │   ├── StaffManagement.tsx
│       │   │   │   │   ├── OfficeSettings.tsx
│       │   │   │   │   └── ReportsDashboard.tsx
│       │   │   │   ├── pages/
│       │   │   │   │   ├── AdminStaffDashboard.tsx
│       │   │   │   │   ├── StaffManagement.tsx
│       │   │   │   │   └── OfficeReports.tsx
│       │   │   │   └── services/
│       │   │   │       └── adminStaffService.ts
│       │   │   ├── manager/     # Manager domain
│       │   │   │   ├── components/
│       │   │   │   │   ├── TeamManagement.tsx
│       │   │   │   │   ├── ProjectDashboard.tsx
│       │   │   │   │   └── ResourceAllocation.tsx
│       │   │   │   ├── pages/
│       │   │   │   │   ├── ManagerDashboard.tsx
│       │   │   │   │   ├── TeamOverview.tsx
│       │   │   │   │   └── ProjectManagement.tsx
│       │   │   │   └── services/
│       │   │   │       └── managerService.ts
│       │   │   └── staff/       # Staff domain
│       │   │       ├── components/
│       │   │       │   ├── TaskBoard.tsx
│       │   │       │   ├── TimeTracker.tsx
│       │   │       │   └── LeaveRequest.tsx
│       │   │       ├── pages/
│       │   │       │   ├── StaffDashboard.tsx
│       │   │       │   ├── MyTasks.tsx
│       │   │       │   └── Profile.tsx
│       │   │       └── services/
│       │           └── staffService.ts
│       │   ├── shared/          # Shared components across domains
│       │   │   ├── components/
│       │   │   │   ├── Layout.tsx
│       │   │   │   ├── Navigation.tsx
│       │   │   │   └── DataTable.tsx
│       │   │   └── utils/
│       │   │       └── commonUtils.ts
│       │   ├── store/           # Redux store & slices
│       │   │   ├── store.ts
│       │   │   ├── slices/
│       │   │   └── api/
│       │   ├── hooks/           # Custom React hooks
│       │   ├── utils/           # Utility functions
│       │   └── types/           # TypeScript type definitions
│       ├── package.json
│       └── vite.config.ts
├── backend/                     # NestJS Backend API
│   ├── src/
│   │   ├── modules/
│   │   │   ├── auth/            # Authentication module
│   │   │   ├── users/           # User management
│   │   │   ├── roles/           # Role management
│   │   │   └── [feature-modules] # Feature-specific modules
│   │   ├── common/              # Shared utilities
│   │   └── main.ts
│   └── package.json
└── docs/                        # Documentation
    ├── API.md
    ├── DEPLOYMENT.md
    └── USER_GUIDE.md
```

---

## Authentication Flow

### Shared Auth Domain

The `auth` domain is shared across all user role domains and handles:

1. **User Registration**: Account creation for all user types
2. **Login Process**: Authentication for all users
3. **Role-Based Navigation**: Redirects users to role-specific dashboards
4. **Session Management**: Token handling and session persistence

### Authentication Workflow

```typescript
// After successful login
const user = await authService.login(credentials);

switch (user.role) {
  case 'superadmin':
    navigate('/domains/superadmin/dashboard');
    break;
  case 'admin-staff':
    navigate('/domains/admin-staff/dashboard');
    break;
  case 'manager':
    navigate('/domains/manager/dashboard');
    break;
  case 'staff':
    navigate('/domains/staff/dashboard');
    break;
  default:
    navigate('/unauthorized');
}
```

---

## Role-Based Domains

### 1. Superadmin Domain
**Purpose**: System-wide administration and configuration
**Features**:
- User management across all roles
- System settings and configuration
- Analytics and reporting
- Database management
- Security settings

### 2. Admin Staff Domain
**Purpose**: Office-level administration
**Features**:
- Staff management within the office
- Office settings and policies
- Department management
- Office reports and analytics
- Resource allocation

### 3. Manager Domain
**Purpose**: Team and project management
**Features**:
- Team management and oversight
- Project planning and tracking
- Resource allocation
- Performance monitoring
- Team communication

### 4. Staff Domain
**Purpose**: Individual employee tasks and activities
**Features**:
- Personal task management
- Time tracking
- Leave requests
- Profile management
- Team collaboration

---

## Domain Architecture Pattern

Each role domain follows a consistent structure:

```
domains/[role-name]/
├── components/          # Domain-specific UI components
├── pages/              # Route-based pages
├── services/           # API service layer
├── hooks/              # Custom React hooks (optional)
├── types/              # Domain-specific types (optional)
└── utils/              # Domain utilities (optional)
```

### Shared Components
- `Layout`: Role-specific layout wrapper
- `Navigation`: Role-based navigation menu
- `AuthGuard`: Route protection component

---

## State Management

### Redux Toolkit + RTK Query

```typescript
// Store configuration
const store = configureStore({
  reducer: {
    auth: authSlice,
    superadmin: superadminSlice,
    adminStaff: adminStaffSlice,
    manager: managerSlice,
    staff: staffSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Role-specific slices
const superadminSlice = createSlice({
  name: 'superadmin',
  initialState,
  reducers: {
    // Superadmin-specific actions
  },
});
```

---

## API Integration

### Backend Domains Structure

```
backend/src/domains/
├── auth/                # Authentication & authorization
├── users/               # User management
├── roles/               # Role definitions
├── superadmin/          # Superadmin endpoints
├── admin-staff/         # Admin staff endpoints
├── manager/             # Manager endpoints
├── staff/               # Staff endpoints
└── shared/              # Shared utilities
```

### Role-Based API Access

```typescript
// Role guard decorator
@UseGuards(RoleGuard)
@Controller('superadmin')
export class SuperadminController {
  @Roles('superadmin')
  @Get('users')
  getAllUsers() {
    // Only superadmin can access
  }
}
```

---

## Navigation & Routing

### Role-Based Routing

```typescript
// App.tsx
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/auth/*" element={<AuthRoutes />} />

        {/* Protected role-based routes */}
        <Route path="/domains/superadmin/*" element={
          <RoleGuard role="superadmin">
            <SuperadminRoutes />
          </RoleGuard>
        } />
        <Route path="/domains/admin-staff/*" element={
          <RoleGuard role="admin-staff">
            <AdminStaffRoutes />
          </RoleGuard>
        } />
        <Route path="/domains/manager/*" element={
          <RoleGuard role="manager">
            <ManagerRoutes />
          </RoleGuard>
        } />
        <Route path="/domains/staff/*" element={
          <RoleGuard role="staff">
            <StaffRoutes />
          </RoleGuard>
        } />
      </Routes>
    </BrowserRouter>
  );
}
```

---

## Development Workflow

### Adding a New Feature

1. **Identify Target Domain**: Determine which role domain needs the feature
2. **Create Components**: Add UI components in the domain's `components/` folder
3. **Add Pages**: Create route-based pages in the domain's `pages/` folder
4. **Implement Services**: Add API calls in the domain's `services/` folder
5. **Update State**: Add necessary Redux slices and actions
6. **Add Routes**: Register new routes in the domain's routing configuration
7. **Update Backend**: Add corresponding API endpoints with proper role guards

### Code Organization Principles

- **Separation of Concerns**: Each domain handles its own business logic
- **Shared Auth**: Authentication is centralized but role-aware
- **Consistent Patterns**: All domains follow the same architectural patterns
- **Scalability**: Easy to add new roles or features without affecting others

---

## Technology Stack

### Frontend (Web)
- **React 18** with TypeScript
- **Vite** for build tooling
- **Redux Toolkit** + RTK Query for state management
- **React Router** for navigation
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Mobile
- **Flutter** with Dart
- **GetX** for state management
- **Dio** for HTTP requests
- **Flutter Secure Storage** for token management

### Backend
- **NestJS** with TypeScript
- **PostgreSQL** database
- **JWT** for authentication
- **Role-based access control**

---

## Security Considerations

### Role-Based Access Control (RBAC)
- **Frontend Guards**: Route protection based on user roles
- **Backend Guards**: API endpoint protection with role validation
- **Data Filtering**: Users only see data appropriate to their role
- **Audit Logging**: Track user actions for compliance

### Authentication Security
- **JWT Tokens**: Secure token-based authentication
- **Refresh Tokens**: Automatic token renewal
- **Session Management**: Secure session handling
- **Password Policies**: Strong password requirements

---

## Deployment & Scaling

### Domain Isolation
- Each role domain can be deployed independently
- Shared auth domain ensures consistent authentication
- Database schema supports multi-tenant architecture
- API versioning for backward compatibility

This architecture provides a scalable, maintainable, and secure foundation for the Office Management System with clear separation of concerns and role-based access control.
│   │   │   │   └── dashboard_controller.dart
│   │   │   ├── services/
│   │   │   │   └── dashboard_service.dart
│   │   │   ├── models/
│   │   │   │   └── dashboard_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── dashboard_widgets.dart
│   │   │   └── dashboard_screen.dart
│   │   ├── correspondence/
│   │   │   ├── controllers/
│   │   │   │   └── correspondence_controller.dart
│   │   │   ├── services/
│   │   │   │   └── correspondence_service.dart
│   │   │   ├── models/
│   │   │   │   └── correspondence_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── correspondence_widgets.dart
│   │   │   ├── correspondence_list_screen.dart
│   │   │   └── correspondence_detail_screen.dart
│   │   ├── consumables/
│   │   │   ├── controllers/
│   │   │   │   └── consumables_controller.dart
│   │   │   ├── services/
│   │   │   │   └── consumables_service.dart
│   │   │   ├── models/
│   │   │   │   └── consumable_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── consumables_widgets.dart
│   │   │   ├── consumables_list_screen.dart
│   │   │   └── manage_consumables_screen.dart
│   │   ├── printer/
│   │   │   ├── controllers/
│   │   │   │   └── printer_controller.dart
│   │   │   ├── services/
│   │   │   │   └── printer_service.dart
│   │   │   ├── models/
│   │   │   │   └── printer_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── printer_widgets.dart
│   │   │   └── printer_status_screen.dart
│   │   ├── subscriptions/
│   │   │   ├── controllers/
│   │   │   │   └── subscriptions_controller.dart
│   │   │   ├── services/
│   │   │   │   └── subscriptions_service.dart
│   │   │   ├── models/
│   │   │   │   └── subscription_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── subscriptions_widgets.dart
│   │   │   └── subscriptions_screen.dart
│   │   ├── gas_logs/
│   │   │   ├── controllers/
│   │   │   │   └── gas_logs_controller.dart
│   │   │   ├── services/
│   │   │   │   └── gas_logs_service.dart
│   │   │   ├── models/
│   │   │   │   └── gas_log_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── gas_logs_widgets.dart
│   │   │   └── gas_logs_screen.dart
│   │   ├── splash/
│   │   │   ├── controllers/
│   │   │   │   └── splash_controller.dart
│   │   │   ├── services/
│   │   │   │   └── splash_service.dart
│   │   │   ├── models/
│   │   │   │   └── splash_model.dart
│   │   │   ├── widgets/
│   │   │   │   └── splash_widgets.dart
│   │   │   └── splash_screen.dart
│   │   └── settings/
│   │       ├── controllers/
│   │       │   └── settings_controller.dart
│   │       ├── services/
│   │       │   └── settings_service.dart
│   │       ├── models/
│   │       │   └── settings_model.dart
│   │       ├── widgets/
│   │       │   └── settings_widgets.dart
│   │       └── settings_screen.dart
│   └── widgets/          # Shared reusable widgets
│       ├── status_badge_widget.dart
│       ├── office_stats_widget.dart
│       ├── offline_sync_indicator.dart
│       ├── printer_status_widget.dart
│       ├── consumables_tracker_widget.dart
│       └── subscription_alert_widget.dart
├── theme/
│   ├── app_colors.dart
│   └── app_theme.dart
└── main.dart
```

---

## Screen Pattern

Each screen follows this consistent structure:

```
screen_name/
├── screen_name.dart          # UI screen
├── controllers/             # GetX controller
│   └── screen_name_controller.dart
├── services/               # API service layer
│   └── screen_name_service.dart
├── models/                 # Data models
│   └── model_name.dart
└── widgets/               # Reusable widgets
    └── widget_name.dart
```

---

## State Management

### Framework: GetX

Controllers extend `GetxController` and manage both state and business logic:

```dart
class AuthController extends GetxController {
  /*
   * STATE
   */
  final _loading = false.obs;
  final _obscure = true.obs;

  /*
   * GETTERS
   */
  bool get obscure => _obscure.value;
  set obscure(bool value) => _obscure.value = value;
  bool get loading => _loading.value;

  /*
   * SETTERS
   */
  void setLoading(bool value) {
    _loading.value = value;
  }

  /*
   * LIFECYCLE
   */
  @override
  void onInit() {
    super.onInit();
  }
}
```

### Usage in Screens

```dart
final controller = Get.find<AuthController>();

Obx(() => controller.loading
  ? CircularProgressIndicator()
  : ElevatedButton(onPressed: controller.login, child: Text('Login'))
)
```

---

## Models

### Model Pattern

```dart
IAuthUser iAuthUserFromMap(Map<String, dynamic> json) => IAuthUser.fromMap(json);
String iAuthUserToMap(IAuthUser data) => json.encode(data.toMap());

class IAuthUser {
  final String? id;
  final String? email;
  final String? phone;
  final String? firstName;
  final String? lastName;
  final String? role;

  IAuthUser({
    this.id,
    this.email,
    this.phone,
    this.firstName,
    this.lastName,
    this.role,
  });

  factory IAuthUser.fromMap(Map<String, dynamic> json) => IAuthUser(
    id: json['id'] as String,
    email: json['email'] as String,
    phone: json['phone'] as String?,
    firstName: json['firstName'] as String,
    lastName: json['lastName'] as String,
    role: json['role'] as String,
  );

  Map<String, dynamic> toMap() => {
    'id': id,
    'email': email,
    'firstName': firstName,
    'lastName': lastName,
    'role': role,
  };
}
```

---

## API Integration

### API Client Service

Located at: `core/services/api_client.dart`

Uses **Dio** HTTP client:

```dart
class ApiClient extends GetxService {
  late Dio _dio;
  final StorageService _storage = Get.find<StorageService>();

  Future<ApiClient> init() async {
    _dio = Dio(
      BaseOptions(
        baseUrl: ApiConstants.baseUrl,
        connectTimeout: ApiConstants.connectTimeout,
        receiveTimeout: ApiConstants.receiveTimeout,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      ),
    );

    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: _onRequest,
        onError: _onError,
      ),
    );

    return this;
  }
}
```

### Service Layer Pattern

Each screen has its own service in the screen folder:

```dart
// screens/auth/services/auth_service.dart
class AuthService {
  final ApiClient _apiClient = Get.find<ApiClient>();

  Future<ILoginResponse> login(Map<String, dynamic> credentials) async {
    final response = await _apiClient.post(
      ApiConstants.login,
      data: credentials,
    );
    return ILoginResponse.fromMap(response.data['data']);
  }
}
```

---

## Navigation

### App Routes

```dart
class AppRoutes {
  static const String splash = '/';
  static const String login = '/login';
  static const String register = '/register';
  static const String otpVerification = '/otp-verification';
  static const String dashboard = '/dashboard';
  static const String correspondence = '/correspondence';
  static const String correspondenceDetail = '/correspondence/:id';
  static const String consumables = '/consumables';
  static const String manageConsumables = '/manage-consumables';
  static const String printer = '/printer';
  static const String printerStatus = '/printer/:id';
  static const String subscriptions = '/subscriptions';
  static const String gasLogs = '/gas-logs';
  static const String settings = '/settings';
}
```

### Navigation Methods

```dart
Get.toNamed(AppRoutes.dashboard);
Get.offNamed(AppRoutes.dashboard);
Get.offAllNamed(AppRoutes.login);
```

---

## Token Management

```dart
final storage = Get.find<StorageService>();

await storage.saveTokens(
  accessToken: response.accessToken,
  refreshToken: response.refreshToken,
);

final token = storage.accessToken;

await storage.clearAll();
```

---

## Error Handling

```dart
Future<void> _onError(
  DioException error,
  ErrorInterceptorHandler handler,
) async {
  if (error.response?.statusCode == 401) {
    final refreshed = await _refreshToken();
    if (refreshed) {
      final opts = error.requestOptions;
      opts.headers['Authorization'] = 'Bearer ${_storage.accessToken}';
      try {
        final response = await _dio.fetch(opts);
        return handler.resolve(response);
      } catch (e) {
        return handler.next(error);
      }
    } else {
      await _storage.clearAll();
      Get.offAllNamed('/login');
    }
  }
  handler.next(error);
}
```

---

## Services

| Service               | Location                                  | Description                    |
| --------------------- | ----------------------------------------- | ------------------------------ |
| `ApiClient`           | `core/services/api_client.dart`           | HTTP client with interceptors |
| `StorageService`      | `core/services/storage_service.dart`      | Secure token storage          |
| `AuthService`         | `core/services/auth_service.dart`         | Authentication API calls      |
| `CorrespondenceService`| `core/services/correspondence_service.dart`| Correspondence management     |
| `ConsumablesService`  | `core/services/consumables_service.dart`  | Consumables tracking          |
| `PrinterService`      | `core/services/printer_service.dart`      | Printer status monitoring     |
| `SubscriptionsService`| `core/services/subscriptions_service.dart`| Subscription management       |
| `GasLogsService`      | `core/services/gas_logs_service.dart`     | Gas usage logging             |
| `OfflineSyncService`  | `core/services/offline_sync_service.dart` | Offline data sync             |

---

## Widgets

| Widget                    | Location                                   | Description                 |
| ------------------------- | ------------------------------------------ | --------------------------- |
| `StatusBadgeWidget`       | `presentation/widgets/status_badge_widget.dart`       | Status indicators           |
| `OfficeStatsWidget`       | `presentation/widgets/office_stats_widget.dart`       | Office statistics display   |
| `OfflineSyncIndicator`   | `presentation/widgets/offline_sync_indicator.dart`   | Offline status indicator   |
| `PrinterStatusWidget`    | `presentation/widgets/printer_status_widget.dart`    | Printer status display     |
| `ConsumablesTrackerWidget`| `presentation/widgets/consumables_tracker_widget.dart`| Consumables tracking       |
| `SubscriptionAlertWidget`| `presentation/widgets/subscription_alert_widget.dart`| Subscription alerts        |

---

## Adding a New Screen

1. **Create folder**: `lib/presentation/screens/new_feature/`

2. **Create controller**: `controllers/new_feature_controller.dart`

   ```dart
   class NewFeatureController extends GetxController {
     final _loading = false.obs;
     bool get loading => _loading.value;
   }
   ```

3. **Create service**: `services/new_feature_service.dart`

   ```dart
   class NewFeatureService {
     final ApiClient _apiClient = Get.find<ApiClient>();
     // API calls here
   }
   ```

4. **Create model**: `models/new_feature_model.dart`

   ```dart
   class NewFeatureModel {
     factory NewFeatureModel.fromMap(Map<String, dynamic> json) => ...
   }
   ```

5. **Create widgets**: `widgets/new_feature_widgets.dart`

   ```dart
   class NewFeatureWidget extends StatelessWidget { ... }
   ```

6. **Create screen**: `new_feature_screen.dart`

   ```dart
   class NewFeatureScreen extends GetView<NewFeatureController> {
     const NewFeatureScreen({super.key});

     @override
     Widget build(BuildContext context) {
       return Scaffold(
         body: Obx(() => controller.loading
           ? Center(child: CircularProgressIndicator())
           : Text('Content')
         ),
       );
     }
   }
   ```

7. Register route in `app_routes.dart`

8. Register page in `app_pages.dart`

---

## Dependencies

```yaml
dependencies:
  flutter:
    sdk: flutter
  get: ^4.6.6
  dio: ^5.4.0
  flutter_secure_storage: ^9.0.0
  intl: ^0.19.0
```

---

## Theme

Located at: `theme/`

- `app_colors.dart` - Color constants
- `app_theme.dart` - Material theme configuration
