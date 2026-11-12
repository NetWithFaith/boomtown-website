<script>
	import Photo from '../components/photo.svelte';

	// Reusable card: write it once, use it for every menu category.
	// The parent passes these props in: <MenuCard title="..." blurb="..." />
	let { title, blurb, image = '', imageAlt } = $props();
</script>

<!-- <article> is a self-contained piece of content, perfect for a card. -->
<article class="overflow-hidden rounded-md bg-ivory shadow-sm ring-1 ring-brown/10">
	<div class="aspect-4/3">
		<Photo src={image} alt={imageAlt} />
	</div>
	<div class="p-5">
		<!-- h3 because the section heading above it is an h2. -->
		<h3 class="font-serif text-2xl font-semibold text-brown">{title}</h3>
		<p class="mt-2">{blurb}</p>
	</div>
</article>
