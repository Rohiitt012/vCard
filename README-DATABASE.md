# PostgreSQL setup for vCards

This app uses **PostgreSQL** with **Prisma** for vCards, contact inquiries, and email subscriptions.

## 1. Install PostgreSQL

Install PostgreSQL locally or use a cloud provider (e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com), or [Railway](https://railway.app)).

## 2. Create a database

Create a database and note the connection URL, e.g.:

```
postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public
```

## 3. Configure environment

Copy the example env file and set your URL:

```bash
cp .env.example .env
```

Edit `.env` and set:

```
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE?schema=public"
```

## 4. Run migrations

Create the tables:

```bash
npx prisma migrate dev --name init
```

Or, if you prefer to push the schema without migration history:

```bash
npx prisma db push
```

## 5. After pulling / schema changes

If the Prisma schema has changed (e.g. new `deletedAt` column on vCards), apply migrations:

```bash
npx prisma migrate dev
```

This creates and runs any pending migrations so your database matches the schema.

## 6. Run the app

```bash
npm run dev
```

vCards are now stored in PostgreSQL. The first time you create a vCard from the dashboard, it will be saved to the database. Edit tokens are stored in the browser so you can edit/delete only vCards you created on that device.

## Optional: Email on new inquiry

To get an email when someone submits the Contact form on your vCard page, sign up at [Resend](https://resend.com), create an API key, and add to `.env`:

- `RESEND_API_KEY=re_xxxx`
- `RESEND_FROM=noreply@yourdomain.com` (optional; defaults to Resend’s test sender)

Ensure the vCard has an **email** set in Basic/Personal details; that address receives the notification.

## Health check

- `GET /api/health` — Returns `{ status: "ok", checks: { database: "ok" } }` when the database is connected, or 503 when not configured.
