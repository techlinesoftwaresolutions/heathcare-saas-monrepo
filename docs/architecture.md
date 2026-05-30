# Architecture

This architecture is designed for a modern healthcare SaaS platform built with Next.js, NestJS, PostgreSQL, Redis, TypeORM, and Turborepo.

## Overview

- Frontend and backend are separate applications.
- Shared logic is stored in reusable packages.
- The backend exposes OpenAPI-compatible APIs.
- Authentication is JWT-based.
- The system uses a schema-per-tenant posture for database isolation.

## System Components

### Frontend

- Built with Next.js 14.
- Implements the presentation layer, routing, and user interface.
- Consumes backend APIs for authentication, tenant management, and healthcare workflows.
- Shares utility code and types through packages when appropriate.

### Backend

- Built with NestJS.
- Uses TypeORM for data access.
- Applies the repository pattern for persistence abstraction.
- Validates input using DTOs and class-validator.
- Keeps controllers thin; all business logic belongs in services or domain layers.
- Exposes OpenAPI-compatible endpoints for integration and documentation.

### Shared Packages

- Contains shared types, DTOs, utility functions, and business rules that can be reused by frontend and backend.
- Ensures consistent domain modeling across applications.

## Data Architecture

- PostgreSQL is the primary data store.
- Each tenant is isolated using a separate schema in the same database.
- Schema-per-tenant allows strong row-level and schema-level data separation while simplifying tenant onboarding.
- Redis is used for caching, session data, or distributed locking as needed.

## Authentication and Security

- JWT authentication is the standard mechanism for API access.
- Access tokens validate user identity and tenant context.
- Tenant-aware authorization ensures users only access data that belongs to their tenant.
- Sensitive data handling and validation are enforced through DTOs and strict typing.

## API and Integration

- Backend APIs follow OpenAPI compatibility.
- APIs are designed for integration with external systems and partner applications.
- Documentation and contract-driven development are prioritized.

## Deployment and Operations

- The architecture supports a Turborepo monorepo structure for coordinated builds and package sharing.
- Frontend and backend deployments may be decoupled to allow independent release cadence.
- Database and tenant schemas are managed centrally but kept logically isolated.
- Monitoring, logging, and health checks are part of production readiness.
