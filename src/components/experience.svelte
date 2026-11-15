
<script>
	import { experienceItems } from '../lib/data.js';
	import Photo from './photo.svelte';
</script>

<section
	aria-labelledby="experience-heading"
	class="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32"
>
	<div class="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">

		<!-- Experience photograph -->
		<figure class="relative">
			<div class="aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
				<Photo
					src="/images/experience-terrace.jpg"
					alt="Outdoor seating with wooden chairs and tables under thatched shelters."
					class="object-center"
				/>
			</div>

			<figcaption class="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-brown/55">
				<span class="h-px w-9 bg-gold"></span>
				A space to enjoy the moment
			</figcaption>
		</figure>

		<!-- Experience information -->
		<div class="max-w-xl">
			<p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
				<span class="h-px w-8 bg-terracotta"></span>
				The BoomTown experience
			</p>

			<h2
				id="experience-heading"
				class="font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-brown sm:text-5xl lg:text-6xl"
			>
				More than a meal.
				<span class="block font-normal italic text-terracotta">A place to unwind.</span>
			</h2>

			<p class="mt-7 max-w-lg text-base leading-relaxed text-charcoal/75 sm:text-lg">
				Every visit is an opportunity to slow down, enjoy good food and spend time with the people who matter.
			</p>

			<!-- Verified experience details -->
			<dl class="mt-10 border-y border-brown/15">
				{#each experienceItems as item (item.title)}
					<div class="grid gap-2 border-b border-brown/10 py-5 last:border-b-0 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6">
						<dt class="font-serif text-xl font-semibold text-brown">
							{item.title}
						</dt>

						<dd class="text-sm leading-relaxed text-charcoal/75 sm:text-base">
							{item.text}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</div>
</section>
