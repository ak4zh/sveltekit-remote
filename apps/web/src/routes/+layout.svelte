<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { ModeWatcher } from "mode-watcher";
	import { siteConfig } from "$lib/config/meta";
	import NavBar from '$lib/components/NavBar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>{siteConfig.name}</title>
	<meta name="description" content={siteConfig.description} />
	<meta name="keywords" content={siteConfig.keywords.join(', ')} />
	
	<!-- Open Graph -->
	<meta property="og:title" content={siteConfig.name} />
	<meta property="og:description" content={siteConfig.description} />
	<meta property="og:image" content={siteConfig.ogImage} />
	<meta property="og:url" content={siteConfig.url} />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content={siteConfig.name} />
	<meta property="twitter:description" content={siteConfig.description} />
	<meta property="twitter:image" content={siteConfig.ogImage} />
</svelte:head>

<ModeWatcher />

<svelte:boundary>
	{#snippet pending()}
		<p>loading...</p>
	{/snippet}
	<div class="container min-h-screen flex flex-col gap-4">
		<NavBar />
		<main class="flex-1 p-4">
			{@render children?.()}
		</main>
		<Footer />
	</div>
</svelte:boundary>
