# Project Folder Structure & Dependencies

## Complete Directory Hierarchy

```
HealthCare_WorkingZone/
│
├── docs/                                  # Documentation & Standards
│   ├── architecture.md                   # System design & components
│   ├── coding-standards.md               # Development guidelines
│   ├── vision.md                         # Project vision & goals
│   ├── tenancy-model.md                  # Multi-tenant architecture
│   ├── roadmap.md                        # Project phases & milestones
│   └── folder-structure.md               # This file - folder connections
│
├── apps/                                 # Deployable Applications
│   │
│   ├── web/                              # Frontend Application (Next.js 14)
│   │   ├── src/                          # Source code
│   │   │   └── .gitkeep
│   │   ├── package.json                  # Dependencies & scripts
│   │   ├── tsconfig.json                 # TypeScript config
│   │   └── .eslintrc.json                # ESLint rules
│   │
│   └── api/                              # Backend API (NestJS)
│       ├── src/                          # Source code
│       │   └── .gitkeep
│       ├── package.json                  # Dependencies & scripts
│       ├── tsconfig.json                 # TypeScript config
│       └── .eslintrc.json                # ESLint rules
│
├── packages/                             # Shared, Reusable Code
│   │
│   ├── types/                            # Shared Types & DTOs
│   │   ├── src/
│   │   │   └── index.ts                  # Export all types
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── ui/                               # React Components Library
│   │   ├── src/
│   │   │   └── index.ts                  # Export all components
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── database/                         # Database Configuration
│   │   ├── src/
│   │   │   └── index.ts                  # Export DB utilities
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   ├── shared/                           # Utilities & Helpers
│   │   ├── src/
│   │   │   └── index.ts                  # Export utilities
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── config/                           # Shared Configuration
│       ├── package.json
│       ├── eslint-config.js              # ESLint presets
│       └── .eslintrc.json
│
├── Root Configuration Files
│   ├── package.json                      # Monorepo config, scripts
│   ├── turbo.json                        # Build pipeline config
│   ├── tsconfig.json                     # Base TypeScript config
│   ├── .eslintrc.json                    # Root ESLint rules
│   ├── .prettierrc.json                  # Code formatting rules
│   ├── .gitignore                        # Git ignore patterns
│   ├── README.md                         # Project overview
│   └── DIRECTORY.md                      # This document
```

---

## Component Connections & Data Flow

### 1. **Documentation Layer** (docs/)
```
┌─────────────────────────────────────────┐
│         DOCUMENTATION & STANDARDS       │
└─────────────────────────────────────────┘
         │              │            │
         ↓              ↓            ↓
   vision.md    architecture.md  coding-standards.md
         │              │            │
         └──────┬───────┴───────┬────┘
                ↓               ↓
         tenancy-model.md   roadmap.md
```

**Relationships:**
- `vision.md` → Defines project goals & target users
- `architecture.md` → Technical implementation based on vision
- `coding-standards.md` → Development rules for all code
- `tenancy-model.md` → Multi-tenant isolation strategy (databases/security)
- `roadmap.md` → Phases 1-4 implementation plan
- `folder-structure.md` → This file - shows folder organization

---

### 2. **Frontend Application** (apps/web/)
```
┌──────────────────────────────────────┐
│    FRONTEND (Next.js)                │
│         apps/web/                    │
└──────────────────────────────────────┘
         │         │         │
         ↓         ↓         ↓
    package.json tsconfig.json .eslintrc.json
         │         │         │
         └────┬────┴────┬────┘
              ↓         ↓
         Configuration  Rules
```

**Dependencies:**
```
apps/web imports:
  ├── @healthcare/types       (Shared DTOs)
  ├── @healthcare/ui          (Components)
  └── @healthcare/shared      (Utilities)
```

**Environment:** Browser + Node (dev)  
**Output:** Static & Server-rendered pages (Next.js build)

---

### 3. **Backend API** (apps/api/)
```
┌──────────────────────────────────────┐
│    BACKEND (NestJS)                  │
│         apps/api/                    │
└──────────────────────────────────────┘
         │         │         │
         ↓         ↓         ↓
    package.json tsconfig.json .eslintrc.json
         │         │         │
         └────┬────┴────┬────┘
              ↓         ↓
         Configuration  Rules
```

**Dependencies:**
```
apps/api imports:
  ├── @healthcare/types       (DTOs & request/response contracts)
  ├── @healthcare/database    (TypeORM, repositories, migrations)
  └── @healthcare/shared      (Validators, utilities)
```

**Environment:** Node.js  
**Output:** Compiled JavaScript (dist/main.js)  
**Database:** PostgreSQL (schema-per-tenant)

---

### 4. **Shared Packages** (packages/)

#### **types/** - Shared Types & DTOs
```
┌──────────────────────────────────┐
│  TYPES PACKAGE                   │
│  @healthcare/types               │
└──────────────────────────────────┘
         │
         ├─→ Used by: apps/web
         ├─→ Used by: apps/api
         ├─→ Used by: packages/ui
         └─→ Used by: packages/database
```

**Purpose:** Type safety across frontend & backend  
**Contents:** Interfaces, DTOs, request/response schemas

#### **ui/** - React Components
```
┌──────────────────────────────────┐
│  UI PACKAGE                      │
│  @healthcare/ui                  │
└──────────────────────────────────┘
         │
         ├─→ Used by: apps/web
         └─→ Dependencies: @healthcare/types
```

**Purpose:** Reusable React components  
**Contents:** Buttons, forms, modals, layout components

#### **database/** - Database Configuration
```
┌──────────────────────────────────┐
│  DATABASE PACKAGE                │
│  @healthcare/database            │
└──────────────────────────────────┘
         │
         ├─→ Used by: apps/api
         ├─→ Dependencies: @healthcare/types
         └─→ Handles: TypeORM, Migrations, Repositories
```

**Purpose:** Database abstraction & entity management  
**Contents:** 
- Data source configuration
- Entity definitions
- Repositories (for schema-per-tenant)
- Migrations

#### **shared/** - Utilities & Helpers
```
┌──────────────────────────────────┐
│  SHARED PACKAGE                  │
│  @healthcare/shared              │
└──────────────────────────────────┘
         │
         ├─→ Used by: apps/web
         ├─→ Used by: apps/api
         ├─→ Used by: packages/ui
         └─→ Dependencies: @healthcare/types
```

**Purpose:** Common utilities & business logic  
**Contents:**
- Validators (DTO validation)
- Error handling
- Constants & enums
- Helper functions

#### **config/** - Configuration Files
```
┌──────────────────────────────────┐
│  CONFIG PACKAGE                  │
│  @healthcare/config              │
└──────────────────────────────────┘
         │
         └─→ Extends: Root .eslintrc.json
```

**Purpose:** Shared development tool configurations  
**Contents:** ESLint configs, Prettier presets

---

### 5. **Build & Development Configuration**

```
┌────────────────────────────────────────────┐
│         ROOT CONFIGURATION                 │
└────────────────────────────────────────────┘
         │        │       │        │
         ↓        ↓       ↓        ↓
    package.json  turbo.json  tsconfig.json  .eslintrc.json
         │        │       │        │
         └────┬───┴───┬───┴───┬────┘
              ↓       ↓       ↓
         Workspaces  Pipeline  TypeScript & Linting
         
    ├─ apps/web    → Inherits tsconfig, eslint
    ├─ apps/api    → Inherits tsconfig, eslint
    ├─ packages/*  → Inherits tsconfig, eslint
    └─ All use same Prettier rules
```

---

## Import Path Reference

### From **apps/web**:
```typescript
import { UserDTO } from '@healthcare/types';
import { Button } from '@healthcare/ui';
import { validator } from '@healthcare/shared';
```

### From **apps/api**:
```typescript
import { UserDTO } from '@healthcare/types';
import { Repository } from '@healthcare/database';
import { validator } from '@healthcare/shared';
```

### Path Alias Definitions (tsconfig.json):
```json
{
  "paths": {
    "@healthcare/*": ["packages/*/src", "packages/*/index.ts"],
    "@web/*": ["apps/web/src/*"],
    "@api/*": ["apps/api/src/*"]
  }
}
```

---

## Dependency Graph

```
apps/web (Frontend)
  ↑
  ├── imports ──→ @healthcare/types
  ├── imports ──→ @healthcare/ui
  │                ├── imports ──→ @healthcare/types
  │                └── imports ──→ @healthcare/shared
  └── imports ──→ @healthcare/shared
                   └── imports ──→ @healthcare/types

apps/api (Backend)
  ↑
  ├── imports ──→ @healthcare/types
  ├── imports ──→ @healthcare/database
  │                ├── imports ──→ @healthcare/types
  │                └── imports ──→ @healthcare/shared
  └── imports ──→ @healthcare/shared
                   └── imports ──→ @healthcare/types

@healthcare/types (Base Layer - No Dependencies)
  ↑
  └── Re-exported by all packages
```

---

## File Organization by Concern

### **Type Safety** (types/)
- User DTOs
- API Request/Response contracts
- Domain models
- Entity interfaces

### **Presentation** (apps/web + packages/ui)
- React components
- Page layouts
- Form handlers
- UI logic

### **Business Logic** (packages/shared)
- Input validation
- Error handling
- Constants
- Helper utilities

### **Data Access** (packages/database)
- Entity definitions
- Repository classes
- Database migrations
- ORM configuration

### **Standards** (docs/)
- Coding rules
- Architecture patterns
- Security practices
- Development workflow

---

## Build & Deployment Flow

```
SOURCE CODE
    ↓
    ├─→ apps/web
    │    ├─→ next build
    │    └─→ Output: .next/ directory
    │
    └─→ apps/api
         ├─→ nest build
         └─→ Output: dist/ directory

TURBO PIPELINE (turbo.json)
    ├─→ build: Compile packages first, then apps
    ├─→ dev: Start web dev server + API hot-reload
    ├─→ lint: Check code quality
    ├─→ type-check: Verify TypeScript
    └─→ test: Run test suites
```

---

## Key Connections Summary

| Component | Depends On | Used By | Purpose |
|-----------|-----------|---------|---------|
| **apps/web** | @healthcare/types, @healthcare/ui, @healthcare/shared | End Users | Frontend UI |
| **apps/api** | @healthcare/types, @healthcare/database, @healthcare/shared | apps/web | REST API |
| **@healthcare/types** | None (Base) | All apps/packages | Type Contracts |
| **@healthcare/ui** | @healthcare/types, @healthcare/shared | apps/web | UI Components |
| **@healthcare/database** | @healthcare/types, @healthcare/shared | apps/api | Data Layer |
| **@healthcare/shared** | @healthcare/types | All packages | Utilities |
| **@healthcare/config** | None | Dev Tools | ESLint, Prettier |

---

## Monorepo Workflow

### Development:
```
npm run dev
  → Turbo runs dev in apps/web (Next.js dev server)
  → Turbo runs dev in apps/api (NestJS watch mode)
  → Both rebuild on file changes
```

### Building:
```
npm run build
  → Build packages/* first (dependency order)
  → Then build apps/* using compiled packages
  → Creates production artifacts
```

### Linting:
```
npm run lint
  → Checks all files against root .eslintrc.json
  → Each app/package has own overrides
  → Enforces coding standards
```

---

## Notes

- **Single TypeScript Config**: Root `tsconfig.json` acts as base; each app/package extends it
- **Shared ESLint Rules**: Root config inherited by all; environment-specific overrides per app
- **Turbo Caching**: Pipeline optimizes builds by caching unchanged packages
- **Tenant Isolation**: Database schema-per-tenant (see `tenancy-model.md`)
- **Phase 1 Complete**: Foundation setup done; Phase 2 adds healthcare workflows
