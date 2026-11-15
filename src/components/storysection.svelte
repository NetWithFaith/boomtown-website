
<script>
	import Photo from './photo.svelte';
</script>

<section
	aria-labelledby="story-heading"
	class="on-dark relative overflow-hidden bg-olive py-24 text-ivory sm:py-28 lg:py-36"
>
	<div class="mx-auto grid max-w-7xl items-center gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-24 lg:px-16">

		<!-- Large food photograph -->
		<figure class="relative">
			<div class="aspect-5/4 overflow-hidden sm:aspect-4/3 lg:aspect-5/4">
				<Photo
					src="/images/funtime.jpg"
					alt="A table with grilled chicken, jollof rice, fries, steak and colourful drinks."
					class="object-center"
				/>
			</div>

			<figcaption class="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-ivory/55">
				<span class="h-px w-9 bg-gold"></span>
				Good food. Better company.
			</figcaption>
		</figure>

		<!-- Editorial story -->
		<div class="max-w-xl">
			<p class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D6B77A]">
				<span class="h-px w-9 bg-[#D6B77A]"></span>
				Beyond the plate
			</p>

			<h2
				id="story-heading"
				class="font-serif text-4xl leading-[1.15] font-semibold tracking-tight sm:text-5xl lg:text-6xl"
			>
				It's not just
				<span class="block font-normal italic text-[#D6B77A]">about the food.</span>
			</h2>

			<p class="mt-7 max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg">
				One day, you'll realise it was never just about what was on the table.
			</p>

			<div class="my-9 space-y-5 border-l border-gold/60 pl-6 font-serif text-xl leading-relaxed text-ivory/90 sm:text-2xl">
				<p>It was the laughter around the table.</p>
				<p>The people who made room for you.</p>
				<p>The conversations that lasted longer than the meal.</p>
				<p>The feeling of belonging somewhere.</p>
			</div>

			<p class="max-w-md font-serif text-xl italic leading-relaxed text-[#D6B77A] sm:text-2xl">
				Those are the moments worth coming back for.
			</p>
		</div>
	</div>
</section>
