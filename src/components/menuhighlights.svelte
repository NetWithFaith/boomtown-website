<script>
	import { menuCategories, business } from '../lib/data.js';
	import MenuCard from '../components/menucard.svelte';
</script>

<section id="menu" aria-labelledby="menu-heading" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
	<h2 id="menu-heading" class="font-serif text-3xl font-semibold text-brown md:text-4xl">
		Come hungry. Stay a while.
	</h2>
	<p class="mt-4 max-w-prose">
		A first look at what BoomTown offers. For the full menu and prices, give the restaurant a call.
	</p>

	<!-- 1 column on phones, 2 on small tablets, 4 on large screens. -->
	<ul class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<!-- Loop over the array and draw one MenuCard per category.
		     We pass each value in as a prop. -->
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

	<p class="mt-8">
		Menu details and prices are not listed here yet.
		<a href={business.phoneHref} class="font-medium text-terracotta underline underline-offset-4">
			Call {business.phoneDisplay}
		</a>
		to ask.
	</p>
</section>
