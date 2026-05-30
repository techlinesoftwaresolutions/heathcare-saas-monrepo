# Turborepo Structure

## Overview

This is a multi-tenant healthcare SaaS platform built with Turborepo, leveraging monorepo architecture for code sharing and coordinated builds.

## Directory Structure

```
.
├── apps/
│   ├── web/              # Next.js frontend application
│   │   ├── src/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── .eslintrc.json
│   └── api/              # NestJS backend API
│       ├── src/
│       ├── package.json
│       ├── tsconfig.json
│       └── .eslintrc.json
├── packages/
│   ├── types/            # Shared types and DTOs
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── ui/               # Shared React components
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── database/         # Database configuration and utilities
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── shared/           # Utility functions and helpers
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── config/           # Shared configuration files
│       ├── package.json
│       └── eslint-config.js
├── docs/                 # Documentation
├── .eslintrc.json        # Root ESLint configuration
├── .prettierrc.json      # Root Prettier configuration
├── tsconfig.json         # Root TypeScript configuration
├── turbo.json            # Turborepo pipeline configuration
└── package.json          # Root package.json
```

## Apps

### `web` (Next.js)
- Frontend application for the healthcare SaaS platform
- Uses Next.js 14 for server-side rendering and static generation
- Imports types from `@healthcare/types`
- Imports UI components from `@healthcare/ui`
- Imports utilities from `@healthcare/shared`

### `api` (NestJS)
- Backend REST API built with NestJS
- Uses TypeORM for database access
- Implements repository pattern for persistence
- Uses PostgreSQL with schema-per-tenant isolation
- JWT-based authentication
- OpenAPI-compatible endpoints

## Packages

### `types`
- Shared TypeScript types and DTOs
- Contains request/response contracts
- Domain models for frontend and backend consumption
- No runtime dependencies

### `ui`
- React component library
- Shared UI components for the web application
- Can be extended for future applications (mobile, admin dashboard, etc.)

### `database`
- Database configuration and utilities
- TypeORM data source configuration
- Entity definitions (placeholder for healthcare entities)
- Migration management
- Repository utilities

### `shared`
- Utility functions and helpers
- Validators and transformers
- Common business logic
- Reusable error handling
- Constants and enums

### `config`
- Shared ESLint configurations
- Prettier configurations
- TypeScript configuration presets
- Other development tool configurations

## Scripts

### Root-level Commands
```bash
# Development
npm run dev              # Start all apps in development mode

# Building
npm run build            # Build all apps and packages

# Testing
npm run test             # Run tests across the monorepo

# Linting and formatting
npm run lint             # Lint all files
npm run format           # Format all files with Prettier
npm run type-check       # Run TypeScript type checking

# Database
npm run db:migrate       # Run database migrations

# Cleanup
npm run clean            # Remove all node_modules and build artifacts
```

### App/Package-specific Commands
Each app and package has its own `package.json` with commands like:
- `build` - Build the app/package
- `dev` - Start development mode
- `lint` - Lint the code
- `type-check` - Check TypeScript types
- `test` - Run tests
- `format` - Format code

## Turborepo Pipeline

The `turbo.json` file defines the build pipeline with the following tasks:

- **build** - Builds packages that other apps depend on first
- **dev** - Runs development servers with caching disabled
- **lint** - Lints code (no caching)
- **type-check** - Type checks with TypeScript (no caching)
- **test** - Runs tests (no caching)
- **format** - Formats code (no caching)
- **db:migrate** - Runs database migrations

## TypeScript Configuration

- **Root tsconfig.json** - Base configuration with path aliases for importing from packages
- **App/Package tsconfig.json** - Extends root config with specific settings

### Path Aliases
```typescript
@healthcare/*  // Import from packages
@web/*         // Web app specific imports
@api/*         // API app specific imports
```

## ESLint and Prettier

- **Root configurations** - Applied to all files
- **App/Package overrides** - Environment-specific rules (browser vs Node.js)
- **Strict TypeScript rules** - No `any` types, explicit returns where possible

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Adding New Apps or Packages

1. Create a new folder in `apps/` or `packages/`
2. Create `package.json` with a scoped name (e.g., `@healthcare/myapp`)
3. Create `tsconfig.json` extending the root config
4. Create `.eslintrc.json` extending the root config
5. Create `src/` directory with initial code
6. The workspace will automatically recognize the new app/package

## Development Workflow

- **Feature development** - Work in `apps/web` or `apps/api` as needed
- **Shared logic** - Extract to appropriate `packages/` directory
- **Type safety** - Use `@healthcare/types` for all contracts between frontend and backend
- **Validation** - All inputs should be validated using DTOs
- **Testing** - Write tests in each app/package and run with `npm run test`

## Next Steps

- Healthcare-specific entity definitions in `@healthcare/database`
- API endpoint implementations in `apps/api`
- UI component implementations in `packages/ui`
- Frontend feature implementation in `apps/web`
