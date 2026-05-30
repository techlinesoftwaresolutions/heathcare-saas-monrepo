# Coding Standards

This document defines the coding standards for the multi-tenant healthcare SaaS project.

## TypeScript Standards

- Use strict TypeScript settings in `tsconfig`.
- Avoid `any` and non-strict type escapes.
- Prefer explicit types for DTOs, request payloads, and domain models.
- Use type-safe shared contracts across frontend, backend, and packages.

## Project Structure

- Frontend and backend are separate applications.
- Shared utilities and domain logic live in reusable packages.
- No business logic in controllers; controllers orchestrate requests and responses only.
- Services or domain layers contain business processes, rules, and state transitions.

## Validation and DTOs

- Use DTO validation for all incoming API payloads.
- Apply class-validator or equivalent validation decorators consistently.
- Validate both frontend and backend inputs when appropriate.

## Persistence and Repository Pattern

- Use the repository pattern for database access.
- Keep SQL and ORM interactions encapsulated inside repository classes.
- Avoid leaking persistence details into service or controller layers.

## API Design

- APIs should be OpenAPI-compatible.
- Use clear, consistent naming for endpoints, DTOs, and models.
- Document payloads and response contracts using OpenAPI or Swagger annotations.

## Security Practices

- Implement JWT authentication for API security.
- Ensure tenant context is included in authentication and authorization checks.
- Never trust client input without validation.
- Protect all user-sensitive and tenant-specific data paths.

## Code Quality

- Write production-ready code with maintainability, readability, and testability in mind.
- Follow consistent formatting, linting, and commit standards.
- Prefer small, composable functions and classes.
- Keep modules focused on a single responsibility.
