<script>
	import { deleteAll, deleteUser, getUsers, insertUser } from './data.remote';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<Button onclick={async () => await insertUser('').updates(getUsers())}>Add</Button>
<Button onclick={async () => await deleteUser('').updates(getUsers())}>Delete One</Button>
<Button onclick={async () => await deleteAll('').updates(getUsers())}>Delete All</Button>

{#each await getUsers() as { id, age }}
	<li>{id} - {age}</li>
{/each}
