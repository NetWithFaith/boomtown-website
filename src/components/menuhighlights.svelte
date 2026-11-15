
<script>
	import { menuCategories, business } from '../lib/data.js';
	import MenuCard from './menucard.svelte';
</script>

<section
	id="menu"
	aria-labelledby="menu-heading"
	class="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32"
>
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">

		<!-- Section introduction -->
		<div class="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">

			<div class="max-w-2xl">
				<p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
					<span class="h-px w-8 bg-terracotta"></span>
					Something for every craving
				</p>

				<h2
					id="menu-heading"
					class="font-serif text-4xl leading-tight font-semibold tracking-tight text-brown sm:text-5xl lg:text-6xl"
				>
					Come hungry.
					<span class="block font-normal italic text-terracotta">Stay a while.</span>
				</h2>
			</div>

			<p class="max-w-md text-base leading-relaxed text-charcoal/75 sm:text-lg">
				From satisfying meals to refreshing treats, discover a taste of what BoomTown has to offer.
			</p>
		</div>

		<!-- Menu category cards -->
		<ul class="grid gap-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
			{#each menuCategories as category (category.title)}
				<li>
					<MenuCard
						title={category.title}
						blurb={category.blurb}
						image={category.image}
						imageAlt={category.imageAlt}
					/>
				</li>
			{/each}
		</ul>

		<!-- Full menu information -->
		<div class="mt-14 flex flex-col items-start justify-between gap-5 border-t border-brown/15 pt-8 sm:flex-row sm:items-center">
			<div>
				<p class="font-serif text-xl text-brown sm:text-2xl">
					Want to explore the full menu?
				</p>
				<p class="mt-2 text-sm text-charcoal/65">
					Contact BoomTown directly for menu details and current prices.
				</p>
			</div>

			<a
				href={business.phoneHref}
				class="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-7 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-brown"
			>
				Call {business.phoneDisplay}
			</a>
		</div>
	</div>
</section>
