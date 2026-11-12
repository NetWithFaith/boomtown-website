<script>
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css?family=DM+Sans:wgt@400;500;700&family=Fraunces:itaal,opsz,wght@0,9..144,400,600;1,9..144,400&display=swap" rel="stylesheet" />

	<title>BoomTown Restaurant & CoffeeShop | New GRA, Port Harcourt</title>
	<meta name="description" content="BoomTown Restaurant &Coffee Shop, 15C Omerelu Street, New GRA, Port Harcourt. A student redesign concept." />
</svelte:head>

<a href="#main" class="srr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 'focus:z-[60]' focus:bg-brown focus:px-4 focus:py-2 focus:text-ivory">Skip to main content</a>
{@render children()}
