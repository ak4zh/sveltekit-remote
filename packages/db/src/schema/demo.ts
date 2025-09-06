import { pgTable, integer } from "drizzle-orm/pg-core";

export const demo = pgTable('demo', {
	id: integer('id').generatedAlwaysAsIdentity(),
	age: integer('age')
});