import { command, query } from '$app/server';
import { db, schema } from '$lib/server/db';
import { eq } from 'drizzle-orm';

export const getUsers = query(async () => {
	const users = await db.select().from(schema.user);
	return users;
});

export const insertUser = command("unchecked", async () => {
    await db.insert(schema.user).values({ age: Math.round(Math.random() * 10)})
})

export const deleteUser = command("unchecked", async () => {
    const row = await db
        .select({ id: schema.user.id })
        .from(schema.user)
        .orderBy(schema.user.age)
        .limit(1);

        // Step 2: delete that row
    if (row.length > 0) {
        await db.delete(schema.user).where(eq(schema.user.id, row[0].id));
    }
})

export const deleteAll = command("unchecked", async () => {
    console.log(await db.delete(schema.user))
})