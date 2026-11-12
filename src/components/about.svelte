<script>
	import { business } from '../lib/data.js';
	import Photo from './photo.svelte';
</script>

<section id="about" aria-labelledby="about-heading" class="bg-cream py-16 md:py-24">
	<div class="mx-auto grid max-w-6xl items-center gap-10 px-5 md:grid-cols-12 md:gap-14">
		<!-- Small photo, offset on desktop for an editorial feel. -->
		<figure class="md:col-span-5">
			<div class="aspect-4/3 overflow-hidden rounded-md md:aspect-3/4">
				<Photo src="\images\warm-feeling.png" alt="A warm family meal in golden evening light." />
			</div>
		</figure>

		<div class="md:col-span-7">
			<h2 id="about-heading" class="font-serif text-3xl font-semibold text-brown md:text-4xl">
				Do you remember the feeling?
			</h2>

			<!-- Each line is its own paragraph so it can breathe. -->
			<div class="mt-6 max-w-prose space-y-4 font-serif text-lg leading-relaxed text-charcoal">
				<p>The sound of plates being set on the table.</p>
				<p>The familiar aroma drifting from the kitchen.</p>
				<p>The voice that called everyone to come and eat before the food got cold.</p>
				<p>
					Somehow, the simplest meals became the memories we carried for years. Food has never
					been just about what is on the plate. It is about who we share it with.
				</p>
			</div>

			<!-- Thin gold line: a quiet break between the feeling and the facts. -->
			<hr class="my-8 w-16 border-gold" />

			<!-- Only verified information about the business appears below. -->
			<p class="max-w-prose">
				<strong class="text-brown">{business.name}</strong> is a restaurant and coffee shop at
				{business.addressLines[0]}, {business.addressLines[1]}, {business.addressLines[2]}.
			</p>
		</div>
	</div>
</section>
