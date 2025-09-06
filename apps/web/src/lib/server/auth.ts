import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db"; // your drizzle instance
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";
import { admin } from "better-auth/plugins"

export const auth = betterAuth({
    plugins: [
        admin(),
        sveltekitCookies(getRequestEvent) // make sure this is the last plugin in the array
    ], 
    database: drizzleAdapter(db, {
        provider: "pg",
    }),
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID as string, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, 
        }, 
    },
});