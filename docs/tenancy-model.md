# Tenancy Model

This project uses a strong multi-tenant architecture tailored for healthcare SaaS, with tenant isolation and secure schema management.

## Model Summary

- Multi-tenant SaaS with one database and separate PostgreSQL schemas per tenant.
- Each tenant has its own schema to isolate data, support tenant-specific extensions, and reduce cross-tenant risk.
- The application is tenant-aware across all request handling, persistence, and authorization.

## Tenant Isolation

- Tenant data is separated at the schema level rather than using shared tables.
- Schema-per-tenant prevents accidental cross-tenant data access through SQL queries.
- Tenant context is established early in request processing and passed through service layers.

## Tenant Lifecycle

### Provisioning

- A new tenant is created with its own PostgreSQL schema.
- Tenant metadata is stored in a central registry schema or configuration store.
- Initial setup may include default roles, initial admin user, and tenant-specific configuration.

### Authentication and Access

- Users authenticate with JWT tokens.
- Tokens embed tenant identity and user claims.
- All authorization checks are tenant-aware, ensuring users only access resources for their tenant.

### Data Access

- Repository and service layers enforce the active tenant context.
- Queries are executed against the current tenant's schema.
- Shared metadata or cross-tenant configuration is limited to a secure central schema.

## Security Considerations

- Tenant boundary enforcement is essential for compliance and privacy.
- Each request must be validated against tenant membership before data access.
- DTO validation and strict typing reduce the risk of invalid or malformed tenant payloads.

## Scalability and Maintenance

- Schema-per-tenant supports tenant-specific customization without affecting others.
- It simplifies backup, restore, and tenant migration strategies.
- Operational tooling should include schema health checks, tenant onboarding automation, and lifecycle cleanup.
