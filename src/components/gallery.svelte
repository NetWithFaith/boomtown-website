
<script>
	import Photo from './photo.svelte';

	const photos = [
		{
			src: '/images/gallery-outdoor.jpg',
			alt: 'Bread and fries on a wooden board in an outdoor courtyard.'
		},
		{
			src: '/images/gallery-crab-pineapple.jpg',
			alt: 'A pan of crab stew with a pineapple and a drink behind it.'
		},
		{
			src: '/images/gallery-grills-sign.jpg',
			alt: 'The BoomTown Grills sign on a dark building.'
		},
		{
			src: '/images/gallery-granita.jpg',
			alt: 'A pink shaved-ice drink in a tall glass with two straws.'
		},
		{
			src: '/images/about-wood-bench.jpg',
			alt: 'Bread and fries on a wooden serving board on a wooden bench.'
		},
		{
			src: '/images/gallery-crab-closeup (1).jpg',
			alt: 'A close-up of crab in red sauce in a cast-iron pan.'
		}
	];
</script>

<section id="gallery" aria-labelledby="gallery-heading" class="bg-cream py-16 md:py-24">
	<div class="mx-auto max-w-6xl px-5">
		<h2 id="gallery-heading" class="font-serif text-3xl font-semibold text-brown md:text-4xl">
			Little moments
		</h2>

		<p class="mt-3 text-brown">
			A glimpse of the moments waiting for you at BoomTown.
		</p>

		<div class="relative mt-8">
			<div class="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-4">
				{#each photos as photo (photo.src)}
					<div class="h-64 w-[80%] flex-none snap-start overflow-hidden rounded-t-[4rem] rounded-b-md sm:h-80 sm:w-[55%] md:w-[40%]">
						<Photo src={photo.src} alt={photo.alt} />
					</div>
				{/each}
			</div>
		</div>

		<p class="mt-2 text-sm text-brown">
			Scroll sideways to explore the photos →
		</p>
	</div>
</section>
