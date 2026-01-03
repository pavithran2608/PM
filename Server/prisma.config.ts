import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  // Keep this path matching the folder name casing in your repo.
  schema: 'Prisma/schema.prisma',
  datasource: {
    // Prefer the unpooled connection (better for migrations/db push),
    // but fall back to DATABASE_URL if DIRECT_URL isn't set.
    url: process.env.DIRECT_URL ?? process.env.DATABASE_URL ?? '',
  },
});
