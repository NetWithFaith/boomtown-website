<script>
	import Photo from '../components/photo.svelte';
</script>

<!-- A deliberate pause: dark olive background, lots of space, no buttons, no cards.
     "on-dark" switches the keyboard focus ring colour (see app.css). -->
<section aria-labelledby="story-heading" class="on-dark bg-olive py-20 text-ivory md:py-32">
	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-20">
		<div class="aspect-4/5 overflow-hidden rounded-md md:aspect-3/4">
			<Photo src="\images\funtime.jpg" alt="A table with grilled chicken, jollof rice, fries, steak and colourful drinks." />
		</div>

		<div>
			<!-- Visually hidden heading keeps the outline of the page complete for screen readers. -->
			<h2 id="story-heading" class="sr-only">A moment to pause</h2>

			<p class="font-serif text-2xl leading-snug md:text-3xl">One day, you'll realise it was never just about the food.</p>

			<div class="mt-8 space-y-3 font-serif text-xl text-ivory/90">
				<p>It was the laughter around the table.</p>
				<p>The people who made room for you.</p>
				<p>The conversations that lasted longer than the meal.</p>
				<p>The feeling of belonging somewhere.</p>
			</div>

			<p class="mt-8 font-serif text-xl italic">Those are the moments worth coming back for.</p>
		</div>
	</div>
</section>
