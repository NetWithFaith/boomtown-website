
<script>
	import { business } from '../lib/data.js';
	import Photo from './photo.svelte';
</script>

<section
	id="top"
	aria-labelledby="hero-heading"
	class="relative isolate flex min-h-100svh items-center overflow-hidden bg-brown"
>
	<!-- Full-screen building photograph -->
	<div class="absolute inset-0">
		<Photo
			src="/images/hero-building.jpg"
			alt="The exterior of BoomTown Restaurant and Coffee Shop."
			priority={true}
			class="object-center"
		/>
	</div>

	<!-- Cinematic overlay for readable text -->
	<div
		class="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20"
	></div>

	<!-- Additional subtle bottom shading -->
	<div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>

	<!-- Hero content -->
	<div class="relative z-10 mx-auto w-full max-w-7xl px-6 py-28 sm:px-10 md:px-14 lg:px-20">
		<div class="max-w-2xl">

			<p class="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D6B77A] sm:text-sm">
				<span class="h-px w-9 bg-[#D6B77A]"></span>
				Restaurant · Lounge · Coffee Shop
			</p>

			<h1
				id="hero-heading"
				class="font-serif text-5xl leading-[1.08] font-semibold tracking-tight text-ivory sm:text-6xl md:text-7xl lg:text-8xl"
			>
				Some meals feed your body.
				<span class="mt-2 block font-normal italic text-[#E5C995]">
					Others take you home.
				</span>
			</h1>

			<p class="mt-7 max-w-lg text-base leading-relaxed text-ivory/85 sm:text-lg">
				Good food, warm moments, and memories worth keeping.
			</p>

			<div class="mt-9 flex flex-col gap-4 sm:flex-row">
				<a
					href={business.phoneHref}
					class="inline-flex min-h-14 items-center justify-center rounded-full bg-terracotta px-8 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-1 hover:bg-[#854126]"
				>
					Call BoomTown
				</a>

				<a
					href="#menu"
					class="inline-flex min-h-14 items-center justify-center rounded-full border border-ivory/70 px-8 text-sm font-semibold text-ivory transition duration-300 hover:bg-ivory hover:text-brown"
				>
					Explore our menu
					<span class="ml-3" aria-hidden="true">↓</span>
				</a>
			</div>
		</div>
	</div>

	<!-- Location indicator -->
	<div class="absolute bottom-7 right-6 z-10 hidden text-right text-xs uppercase tracking-[0.2em] text-ivory/75 sm:block md:right-12">
		<p>New GRA</p>
		<p class="mt-1 text-ivory/50">Port Harcourt, Nigeria</p>
	</div>
</section>
