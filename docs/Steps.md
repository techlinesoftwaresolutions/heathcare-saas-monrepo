# AI EXECUTION PLAN — HEALTHCARE SAAS PLATFORM

## EXECUTION PRINCIPLE

Never ask AI to generate the entire software system at once.

Best results come from:

1. Architecture-first development
2. Documentation-first workflow
3. Step-by-step execution
4. Small isolated commits
5. Strict AI rules and constraints

This project follows an incremental enterprise SaaS execution strategy.

---

# PROJECT STRUCTURE

```txt
healthcare-platform/

apps/
│
├── web/
├── api/
└── worker/ (future)

packages/
│
├── types/
├── ui/
├── database/
├── shared/
├── config/

docs/
.ai/
```

---

# STEP 0 — AI RULES SYSTEM

Create:

```txt
.ai/rules.md
```

This file must always be loaded into:

* GitHub Copilot
* Cursor
* Roo
* Claude
* Gemini
* Any AI coding assistant

Purpose:

* Preserve architecture consistency
* Prevent AI drift
* Avoid inconsistent code generation
* Enforce enterprise standards

---

# AI RULES FILE CONTENT

```md
You are a Senior Staff Engineer.

Project:
Multi-tenant Healthcare SaaS

Tech Stack:
- Next.js 14
- NestJS
- PostgreSQL
- Redis
- TypeORM
- Turborepo

Architecture Rules:

- Frontend and Backend are separate applications.
- Shared logic belongs in packages.
- No business logic inside controllers.
- Use DTO validation.
- Use repository pattern.
- Use strict TypeScript.
- No any type.
- Multi-tenant architecture.
- Schema per tenant.
- JWT authentication.
- OpenAPI compatible APIs.

Code must be production-ready.
```

---

# STEP 1 — DOCUMENTATION FIRST

Before generating application code, generate architecture and standards documentation.

Create:

```txt
docs/
├── vision.md
├── architecture.md
├── tenancy-model.md
├── coding-standards.md
├── roadmap.md
└── sprint-1.md
```

---

# CURSOR / ROO PROMPT #1

```txt
Read .ai/rules.md.

Create all documentation files inside docs/.

Generate:
- vision.md
- architecture.md
- tenancy-model.md
- coding-standards.md
- roadmap.md

Do not generate application code.

Only documentation.
```

---

# COMMIT

```bash
git commit -m "docs: initial architecture documents"
```

---

# STEP 2 — MONOREPO FOUNDATION

Generate Turborepo structure.

Target Structure:

```txt
apps/
  web
  api

packages/
  types
  ui
  database
  shared
  config
```

Generate:

* package.json files
* turbo.json
* tsconfig files
* eslint configs

Do not generate healthcare modules yet.

---

# PROMPT

```txt
Read docs and rules.

Create Turborepo structure:

apps/
  web
  api

packages/
  types
  ui
  database
  shared
  config

Generate:
- package.json files
- turbo.json
- tsconfig files
- eslint configs

Do not generate healthcare modules yet.
```

---

# COMMIT

```bash
git commit -m "setup: initialize turborepo monorepo"
```

---

# STEP 3 — NEXT.JS SETUP

Configure frontend application.

Requirements:

* Next.js 14
* App Router
* TypeScript
* Tailwind
* ESLint
* Prettier

Generate production-ready setup.

---

# PROMPT

```txt
Configure apps/web.

Requirements:

- Next.js 14
- App Router
- TypeScript
- Tailwind
- ESLint
- Prettier

Generate production-ready setup.
```

---

# COMMIT

```bash
git commit -m "web: setup nextjs application"
```

---
# Completed
# STEP 4 — NESTJS SETUP

Configure backend API.

Requirements:

* NestJS
* TypeORM
* PostgreSQL
* ConfigModule
* Swagger
* ValidationPipe

Generate bootstrap code.

---

# PROMPT

```txt
Configure apps/api.

Requirements:

- NestJS
- TypeORM
- PostgreSQL
- ConfigModule
- Swagger
- ValidationPipe

Generate bootstrap code.
```

---

# COMMIT

```bash
git commit -m "api: setup nestjs backend"
```

---

# STEP 5 — SHARED PACKAGES

Create shared reusable packages.

Packages:

* types
* shared
* database
* config

Expected Structure:

```txt
packages/

types/
  patient.ts
  auth.ts

shared/
  constants
  utils

database/
  entities
  migrations

config/
  env
```

---

# PROMPT

```txt
Create packages:

types
shared
database
config

Generate production-ready folder structure and exports.
```

---

# COMMIT

```bash
git commit -m "packages: create shared packages"
```

---

# STEP 6 — DOCKER SETUP

Create development Docker environment.

Requirements:

* PostgreSQL
* Redis
* docker-compose.yml

Development only.

---

# PROMPT

```txt
Create Docker setup.

Requirements:

Postgres
Redis

docker-compose.yml

Development only.
```

---

# COMMIT

```bash
git commit -m "devops: add docker development setup"
```

---

# STEP 7 — CI/CD

Create GitHub Actions pipeline.

Requirements:
Run:

* install
* lint
* typecheck
* build

for Turborepo.

---

# PROMPT

```txt
Create GitHub Actions.

Run:
- install
- lint
- typecheck
- build

for Turborepo.
```

---

# COMMIT

```bash
git commit -m "ci: add github actions pipeline"
```

---

# DAY 1 SUCCESS CRITERIA

By end of Day 1, project should contain:

* Turborepo monorepo
* Next.js application
* NestJS API
* Docker setup
* PostgreSQL
* Redis
* CI/CD pipeline
* Shared packages

No healthcare business logic yet.

---

# DAY 2 — MULTI-TENANT CORE

This phase begins actual SaaS implementation.

---

# STEP 8 — TENANT ARCHITECTURE

Implement multi-tenant system.

Public schema:

* tenants
* subscriptions

Tenant schema:

* patients
* departments
* samples

Use TypeORM.

---

# PROMPT

```txt
Read tenancy-model.md.

Implement multi-tenant architecture.

Requirements:

public schema:
- tenants
- subscriptions

tenant schema:
- patients
- departments
- samples

Use TypeORM.

Generate entities and architecture.
```

---

# COMMIT

```bash
git commit -m "tenant: implement multi-tenant architecture"
```

---

# STEP 9 — TENANT RESOLVER

Create tenant middleware.

Input:

```txt
abc.localhost
```

Output:

```txt
tenantCode=abc
```

Store tenant in request context.

Schema must remain available during request lifecycle.

---

# PROMPT

```txt
Create NestJS middleware.

Input:

abc.localhost

Output:

tenantCode=abc

Store in request context.

Schema should be available throughout request lifecycle.
```

---

# COMMIT

```bash
git commit -m "tenant: add tenant resolver middleware"
```

---

# STEP 10 — DATABASE MIGRATIONS

Generate migrations:

* departments
* patients
* samples

Requirements:

* UUID PK
* created_at
* updated_at
* deleted_at

Production-ready.

---

# PROMPT

```txt
Generate migrations:

departments
patients
samples

Requirements:
- UUID PK
- created_at
- updated_at
- deleted_at

Production-ready.
```

---

# COMMIT

```bash
git commit -m "database: add core tenant migrations"
```

---

# STEP 11 — AUTHENTICATION

Generate authentication module.

Features:

* Login
* Refresh Token
* JWT
* Role Based Access

Roles:

* SuperAdmin
* TenantAdmin
* Doctor
* Receptionist
* LabTechnician

---

# PROMPT

```txt
Generate Auth Module.

Features:

- Login
- Refresh Token
- JWT
- Role Based Access

Roles:
- SuperAdmin
- TenantAdmin
- Doctor
- Receptionist
- LabTechnician
```

---

# COMMIT

```bash
git commit -m "auth: implement authentication system"
```

---

# STEP 12 — PATIENT MODULE

Folder:

```txt
api/src/modules/patient
```

Generate:

* CRUD APIs
* Validation DTOs
* Swagger docs
* Repository pattern
* Tenant-aware services

---

# PROMPT

```txt
Generate Patient Module.

CRUD APIs.

Validation DTOs.

Swagger.

Repository pattern.

Tenant aware.
```

---

# COMMIT

```bash
git commit -m "patient: implement patient module"
```

---

# STEP 13 — FRONTEND FOUNDATION

Setup:

* shadcn/ui
* Storybook
* Design Tokens
* packages/ui

---

# PROMPT

```txt
Setup:

shadcn/ui

Storybook

Design Tokens

packages/ui

Generate configuration.
```

---

# COMMIT

```bash
git commit -m "ui: setup frontend design system"
```

---

# STEP 14 — FRONTEND/BACKEND INTEGRATION

Create package:

```txt
packages/api-client
```

Requirements:

* axios
* configurable base URL
* JWT support
* tenant header support

---

# PROMPT

```txt
Generate typed API client.

Use axios.

Base URL configurable.

Support JWT.

Support tenant header.
```

---

# PATIENT FRONTEND MODULE

Folder:

```txt
web/modules/patient
```

Requirements:

* patient list page
* loading states
* error states
* typed API integration

---

# PROMPT

```txt
Create Patient List page.

Use api-client package.

Display patient table.

Loading states.

Error states.
```

---

# COMMIT

```bash
git commit -m "frontend: connect patient module to backend"
```

---

# WEEKEND SUCCESS CRITERIA

Final structure should contain:

```txt
apps/
  web/
  api/

packages/
  api-client/
  types/
  database/
  shared/
  ui/
```

Core Features:

* Login
* Tenant Resolution
* Patient CRUD
* PostgreSQL
* Redis
* Docker
* Swagger
* CI/CD
* Storybook

This is no longer a scaffold.

This becomes a working enterprise healthcare SaaS foundation capable of supporting:

* Laboratory Systems
* Billing
* Radiology
* Inventory
* CRM
* HR
* Scheduling
* Analytics

---

# FINAL DEVELOPMENT RULE

Commit after every major step.

Examples:

* docs
* monorepo
* frontend
* backend
* docker
* auth
* tenant
* patient

Benefits:

* easy rollback
* safer AI experimentation
* architecture stability
* reproducible development workflow

AI should assist development — not control architecture.
