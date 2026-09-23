# Production operations for MIDAD

## Database and backup strategy
- Use PostgreSQL as the primary relational database for users, roles, initiatives, campaigns, events, media, audit logs, and session records.
- Schedule automated daily full backups and hourly WAL or point-in-time recovery snapshots when the production environment supports it.
- Store encrypted backups in object storage with retention for 30-90 days.
- Validate backup integrity by restoring a recent snapshot into a staging environment at least once per week.
- Use read replicas for analytics-heavy endpoints such as dashboards and content lists.

## Caching
- Use Redis for session fragments, public initiative lists, article indexes, category metadata, and hot dashboard aggregates.
- Use short TTLs for frequently changing content and longer TTLs for static pages.
- Invalidate cache entries on create/update/delete events for initiatives, articles, and events.

## Media and object storage
- Store uploaded media in an object store such as S3 or Cloudflare R2.
- Generate multiple image sizes and serve WebP or AVIF when supported.
- Configure CDN caching for public image assets and campaign media.
- Validate file type, file size, MIME matches, and virus scanning for uploaded files.

## Load testing strategy
- Measure concurrent active users with realistic campaign and registration spikes.
- Test login bursts, volunteer applications, and event registration peaks.
- Benchmark API throughput, database latency, cache hit rate, and CDN response times.
- Record the measured limits and scale horizontally by adding application instances behind a load balancer.
- Use background workers for email, notifications, and report generation so the HTTP layer remains fast under traffic spikes.

## Observability and health
- Expose /api/health and /api/ready for infrastructure monitoring.
- Send logs to a central observability stack with structured fields and correlation IDs.
- Track API latency, DB query latency, and failed authentication attempts.
- Alert on elevated 5xx responses, queue backlog, cache degradation, and failed backups.

## Horizontal scaling assumptions
- Run multiple stateless application instances behind a load balancer.
- Allow the database layer to scale independently with connection pooling and read replicas.
- Keep the app stateless where possible so it can autoscale during campaign surges.
- Avoid returning unbounded datasets by using pagination and filters on all collection endpoints.
