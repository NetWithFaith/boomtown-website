<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />

	<link
		href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,400&display=swap"
		rel="stylesheet"
	/>

	<title>BoomTown Restaurant & Coffee Shop | New GRA, Port Harcourt</title>
	<meta
		name="description"
		content="BoomTown Restaurant & Coffee Shop, 15C Omerelu Street, New GRA, Port Harcourt. A student redesign concept."
	/>
</svelte:head>



{@render children()}