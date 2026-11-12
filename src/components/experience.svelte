<script>
	import { experienceItems } from '../lib/data.js';
	import Photo from './photo.svelte';
</script>

<section aria-labelledby="experience-heading" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
	<div class="grid gap-10 md:grid-cols-12 md:items-center">
		<div class="md:col-span-6">
			<h2 id="experience-heading" class="font-serif text-3xl font-semibold text-brown md:text-4xl">
				A place to sit down
			</h2>
			<p class="mt-4 max-w-prose">
				Details about seating, atmosphere and services are still being confirmed with BoomTown, so
				we only list what we know for sure.
			</p>

			<!-- <dl> is a "description list": a term (<dt>) paired with its description (<dd>). -->
			<dl class="mt-8 divide-y divide-brown/15 border-y border-brown/15">
				{#each experienceItems as item (item.title)}
					<div class="py-4 sm:flex sm:gap-6">
						<dt class="font-serif text-xl font-semibold text-brown sm:w-48">{item.title}</dt>
						<dd>{item.text}</dd>
					</div>
				{/each}
			</dl>
		</div>

		<figure class="md:col-span-6">
			<div class="aspect-4/3 overflow-hidden rounded-md">
				<Photo src="\images\experience-terrace.jpg" alt="Outdoor seating with wooden chairs and tables under thatched shelters." />
			</div>
		</figure>
	</div>
</section>
