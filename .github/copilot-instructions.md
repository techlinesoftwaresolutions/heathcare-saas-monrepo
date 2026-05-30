# GITHUB COPILOT INSTRUCTIONS

## PROJECT IDENTITY

Enterprise-grade Multi-Tenant Healthcare SaaS Platform.

Architecture:

* Monorepo using Turborepo
* Frontend: Next.js 14 + TypeScript
* Backend: NestJS + TypeScript
* Database: PostgreSQL
* ORM: TypeORM
* Cache/Queue: Redis
* Authentication: JWT
* Tenant Isolation: Schema-per-tenant

---

# CORE AI EXECUTION RULES

Always understand existing architecture before generating code.

Before writing code:

1. Check folder structure
2. Reuse shared packages
3. Respect existing naming conventions
4. Preserve architecture consistency
5. Avoid duplicate utilities/components/services

Never generate isolated code without considering:

* multi-tenant impact
* type safety
* API contracts
* scalability
* maintainability

---

# ARCHITECTURE RULES

## Backend Rules (NestJS)

Use:

* Controller → Service → Repository pattern
* DTO validation
* Dependency injection
* Repository abstraction
* OpenAPI-compatible APIs

Never:

* Put business logic in controllers
* Access database directly inside controllers
* Leak ORM logic into services
* Use untyped request payloads

Controllers:

* Request/response orchestration only

Services:

* Business logic
* workflows
* tenant-aware operations

Repositories:

* database access only

---

## Frontend Rules (Next.js)

Use:

* App Router architecture
* reusable components
* server/client separation
* modular folder structure
* shared types from packages

Never:

* duplicate components
* inline business logic
* inconsistent UI patterns
* direct backend schema assumptions

Frontend must consume typed API contracts.

---

# SHARED PACKAGE RULES

Use packages consistently.

## @healthcare/types

Contains:

* DTOs
* interfaces
* request/response contracts
* domain types

## @healthcare/ui

Contains:

* reusable UI components
* shared design patterns

## @healthcare/shared

Contains:

* validators
* constants
* utilities
* helpers
* error handling

## @healthcare/database

Contains:

* repositories
* entities
* migrations
* TypeORM configuration

Never duplicate logic already available in packages.

---

# TYPESCRIPT RULES

Strict TypeScript only.

Never:

* use any
* disable strict typing
* bypass DTO validation
* use unsafe casting

Prefer:

* explicit types
* reusable interfaces
* typed responses
* domain-safe models

---

# MULTI-TENANCY RULES

System is schema-per-tenant.

Always:

* preserve tenant isolation
* include tenant context
* validate tenant authorization
* prevent cross-tenant leakage

All backend operations must be tenant-aware.

---

# SECURITY RULES

Always:

* validate all inputs
* sanitize payloads
* use JWT authentication
* enforce authorization checks
* protect healthcare-sensitive data

Never trust client input.

---

# API RULES

APIs must:

* be OpenAPI compatible
* use DTO validation
* follow REST consistency
* maintain stable contracts

Use:

* Swagger decorators
* typed responses
* consistent naming

---

# DATABASE RULES

Use:

* repository pattern
* transaction-safe operations
* migration-driven schema changes

Never:

* write raw SQL in controllers
* tightly couple services to ORM internals

---

# CODE QUALITY RULES

Code must be:

* production-ready
* scalable
* modular
* testable
* readable

Prefer:

* small composable functions
* clean separation of concerns
* reusable abstractions

Avoid:

* giant files
* duplicated logic
* hidden side effects

---

# IMPORT RULES

Frontend:

```ts
import { X } from '@healthcare/types'
import { Y } from '@healthcare/ui'
import { Z } from '@healthcare/shared'
```

Backend:

```ts
import { X } from '@healthcare/types'
import { Repo } from '@healthcare/database'
import { Util } from '@healthcare/shared'
```

---

# MONOREPO RULES

Respect dependency order.

Packages build first:

1. types
2. shared
3. database
4. ui
5. apps

Never create circular dependencies.

---

# RESPONSE FORMAT RULES

When generating code always provide:

1. file path
2. complete code
3. explanation
4. edge cases
5. scalability notes

Do not provide partial architecture-breaking snippets.

---

# UI/UX RULES

UI should be:

* modern
* accessible
* healthcare-grade
* responsive
* clean

Prefer:

* reusable patterns
* consistency
* maintainable styling

---

# PERFORMANCE RULES

Optimize for:

* scalability
* caching
* minimal re-renders
* efficient queries
* shared computation

Avoid:

* unnecessary API calls
* duplicated fetches
* unoptimized rendering

---

# DEVELOPMENT PHILOSOPHY

This is not a demo project.

All generated code must assume:

* enterprise scale
* production deployment
* multiple tenants
* long-term maintainability
* healthcare security requirements

Always think like a senior SaaS architect.
