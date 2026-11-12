
<script>
	import { business } from '../lib/data.js';
	import Photo from '../components/photo.svelte';
</script>

<section
	id="top"
	aria-labelledby="hero-heading"
	class="relative isolate min-h-100svh overflow-hidden"
>
	<!-- Full-screen background image -->
	<div class="absolute inset-0">
		<Photo
			src="/images/hero-building.jpg"
			alt="The front of the BoomTown building."
			priority={true}
		/>
	</div>

	<!-- Dark overlay -->
	<div class="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/25"></div>

	<!-- Hero content -->
	<div class="relative flex min-h-100svh items-center px-6 py-24 sm:px-10 md:px-14 lg:px-20">
		<div class="max-w-xl">
			<h1
				id="hero-heading"
				class="font-serif text-3xl leading-[1.15] font-semibold text-ivory sm:text-4xl md:text-5xl lg:text-6xl"
			>
				Some meals feed your body.
				<span class="block italic">Others take you home.</span>
			</h1>

			<p class="mt-5 max-w-md text-sm leading-relaxed text-ivory/95 sm:text-base md:text-lg">
				Good food, warm moments, and memories worth keeping.
			</p>

			<div class="mt-7 flex flex-col gap-3 sm:flex-row">
				<a
					href={business.phoneHref}
					class="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-7 font-medium text-ivory transition-colors hover:bg-brown"
				>
					Call BoomTown
				</a>

				<a
					href="#menu"
					class="inline-flex min-h-12 items-center justify-center rounded-full border border-ivory px-7 font-medium text-ivory transition-colors hover:bg-ivory hover:text-brown"
				>
					Explore our menu
				</a>
			</div>
		</div>
	</div>
</section>
