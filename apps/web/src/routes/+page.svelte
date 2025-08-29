<script>
	import { deleteAll, deleteUser, getUsers, insertUser } from "./data.remote";

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<button onclick={async () => await insertUser('').updates(getUsers())}>Add</button>
<button onclick={async () => await deleteUser('').updates(getUsers())}>Delete One</button>
<button onclick={async () => await deleteAll('').updates(getUsers())}>Delete All</button>

{#each await getUsers() as {id, age}}
    <li>{id} - {age}</li>
{/each}