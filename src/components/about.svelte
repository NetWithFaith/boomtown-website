
<script>
	import { business } from '../lib/data.js';
	import Photo from './photo.svelte';
</script>

<section
	id="about"
	aria-labelledby="about-heading"
	class="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32"
>
	<div class="mx-auto grid max-w-7xl items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">

		<!-- Editorial image composition -->
		<figure class="relative mx-auto w-full max-w-lg lg:mx-0">
			<div class="relative aspect-4/5 overflow-hidden">
				<Photo
					src="/images/warm-feeling.png"
					alt="A warm family meal in golden evening light."
					class="object-center"
				/>
			</div>

			<!-- Decorative image frame -->
			<div
				aria-hidden="true"
				class="pointer-events-none absolute -bottom-4 -right-4 -z-0 h-28 w-28 border-b border-r border-gold sm:-bottom-5 sm:-right-5 sm:h-40 sm:w-40"
			></div>

			<figcaption class="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-brown/60">
				<span class="h-px w-8 bg-gold"></span>
				Moments worth remembering
			</figcaption>
		</figure>

		<!-- Story -->
		<div class="max-w-xl">
			<p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
				<span class="h-px w-8 bg-terracotta"></span>
				A feeling called home
			</p>

			<h2
				id="about-heading"
				class="max-w-lg font-serif text-4xl leading-[1.12] font-semibold tracking-tight text-brown sm:text-5xl lg:text-6xl"
			>
				Do you remember
				<span class="block font-normal italic text-terracotta">the feeling?</span>
			</h2>

			<div class="mt-8 space-y-5 text-base leading-[1.9] text-charcoal/85 sm:text-lg">
				<p>
					The sound of plates being set on the table.
				</p>

				<p>
					The familiar aroma drifting from the kitchen.
				</p>

				<p>
					The voice that called everyone to come and eat before the food got cold.
				</p>

				<p class="font-serif text-xl leading-relaxed text-brown sm:text-2xl">
					Somehow, the simplest meals became the memories we carried for years.
				</p>

				<p>
					Food has never been just about what is on the plate. It is about who we share it with.
				</p>
			</div>

			<div class="my-9 flex items-center gap-4">
				<span class="h-px w-14 bg-gold"></span>
				<span class="text-xs font-semibold uppercase tracking-[0.18em] text-brown/55">
					Find us in Port Harcourt
				</span>
			</div>

			<p class="text-sm leading-relaxed text-brown/75 sm:text-base">
				<strong class="font-semibold text-brown">{business.name}</strong>
				is a restaurant and coffee shop at
				{business.addressLines[0]}, {business.addressLines[1]}, {business.addressLines[2]}.
			</p>
		</div>
	</div>
</section>
