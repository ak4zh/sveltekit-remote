import { command, query } from '$app/server';
import { db, schema } from '$lib/server/db';
import { eq } from 'drizzle-orm';

export const getUsers = query(async () => {
	const users = await db.select().from(schema.demo);
	return users;
});

export const insertUser = command('unchecked', async () => {
	await db.insert(schema.demo).values({ age: Math.round(Math.random() * 10) });
});

export const deleteUser = command('unchecked', async () => {
	const row = await db
		.select({ id: schema.demo.id })
		.from(schema.demo)
		.orderBy(schema.demo.age)
		.limit(1);

	// Step 2: delete that row
	if (row.length > 0) {
		await db.delete(schema.demo).where(eq(schema.demo.id, row[0].id));
	}
});

export const deleteAll = command('unchecked', async () => {
	await db.delete(schema.demo)
});
