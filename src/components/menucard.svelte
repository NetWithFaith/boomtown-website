
<script>
	import Photo from './photo.svelte';

	let { title, blurb, image = '', imageAlt } = $props();
</script>

<article class="group h-full overflow-hidden bg-cream transition duration-300 hover:-translate-y-1">

	<!-- Food photograph -->
	<div class="relative aspect-4/5 overflow-hidden bg-cream">
		<Photo
			src={image}
			alt={imageAlt}
			class="transition-transform duration-700 group-hover:scale-105"
		/>

		<div
			aria-hidden="true"
			class="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"
		></div>
	</div>

	<!-- Category information -->
	<div class="px-5 pb-7 pt-6">
		<h3 class="font-serif text-2xl font-semibold text-brown">
			{title}
		</h3>

		<p class="mt-3 text-sm leading-relaxed text-charcoal/75">
			{blurb}
		</p>

		<div class="mt-5 h-px w-10 bg-gold transition-all duration-300 group-hover:w-16"></div>
	</div>
</article>
