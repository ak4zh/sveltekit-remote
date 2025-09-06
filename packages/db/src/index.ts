import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from './schema';

if (!process.env.DATABASE_URL) throw new Error('DATABASE_URL is not set');

const db = drizzle(process.env.DATABASE_URL, { schema, casing: 'snake_case' });
export { db, schema }