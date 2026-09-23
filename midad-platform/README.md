# مِداد — MIDAD platform

This project is a production-oriented Next.js platform for the MIDAD youth volunteer organization. The interface is fully Arabic and RTL-first, with a modern humanitarian and academic identity.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- App Router

## Pages included
- Home
- About
- Initiatives
- Volunteer
- Events
- Articles
- Contact
- Login
- Register
- Dashboard

## API routes
- /api/v1/initiatives
- /api/v1/events
- /api/v1/articles
- /api/v1/auth/register
- /api/v1/auth/login
- /api/v1/volunteers/apply
- /api/v1/contact
- /api/v1/admin/overview

## Architecture notes
The project follows a layered backend-ready structure intended for future expansion:
- routes: app/api/v1/...
- data model: lib/site-data.ts
- UI components: components/
- deployment/config: .env.example, README.md

For production scale, the platform should be backed by PostgreSQL, Redis, object storage, and background job workers. The current app intentionally uses API routes and data modules that are easy to replace with a real database-backed service layer.

## Environment variables
Copy .env.example to .env.local and fill in secure values before production deployment.

## Run locally
```bash
npm install
npm run dev
```

## Production validation checklist
- Server-side validation on all mutation endpoints
- Arabic RTL interface
- Role-based dashboard access patterns
- API response contract with success and error metadata
- Scalable design for Redis, queues, and CDN-backed media delivery

## Operational docs
- [docs/production-operations.md](./docs/production-operations.md)
