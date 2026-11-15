
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

<section
	id="gallery"
	aria-labelledby="gallery-heading"
	class="overflow-hidden bg-cream py-20 sm:py-24 lg:py-32"
>
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

		<!-- Gallery introduction -->
		<div class="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
			<div>
				<p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
					<span class="h-px w-8 bg-terracotta"></span>
					A taste of BoomTown
				</p>

				<h2
					id="gallery-heading"
					class="font-serif text-4xl font-semibold tracking-tight text-brown sm:text-5xl lg:text-6xl"
				>
					Little moments.
					<span class="block font-normal italic text-terracotta">Lasting memories.</span>
				</h2>
			</div>

			<p class="max-w-sm text-base leading-relaxed text-charcoal/75 sm:text-lg">
				A glimpse of the food, spaces and moments that make every visit memorable.
			</p>
		</div>

		<!-- Asymmetric gallery -->
		<div class="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">

			<!-- Large outdoor photograph -->
			<figure class="col-span-2 row-span-2 min-h-64 overflow-hidden sm:min-h-80 lg:min-h-520px">
				<div class="group h-full overflow-hidden">
					<Photo
						src={photos[0].src}
						alt={photos[0].alt}
						class="transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</figure>

			<!-- Food photograph -->
			<figure class="aspect-4/5 overflow-hidden">
				<div class="group h-full overflow-hidden">
					<Photo
						src={photos[1].src}
						alt={photos[1].alt}
						class="transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</figure>

			<!-- Brand photograph -->
			<figure class="aspect-4/5 overflow-hidden">
				<div class="group h-full overflow-hidden">
					<Photo
						src={photos[2].src}
						alt={photos[2].alt}
						class="transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</figure>

			<!-- Drink photograph -->
			<figure class="aspect-4/5 overflow-hidden">
				<div class="group h-full overflow-hidden">
					<Photo
						src={photos[3].src}
						alt={photos[3].alt}
						class="transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</figure>

			<!-- Close-up food photograph -->
			<figure class="aspect-4/5 overflow-hidden">
				<div class="group h-full overflow-hidden">
					<Photo
						src={photos[5].src}
						alt={photos[5].alt}
						class="transition-transform duration-700 group-hover:scale-105"
					/>
				</div>
			</figure>

		</div>

		<!-- Final caption -->
		<p class="mt-7 text-xs uppercase tracking-[0.18em] text-brown/55">
			Good food · Good company · Good memories
		</p>
	</div>
</section>
