
<script>
	import { business, mapLocations } from '../lib/data.js';
</script>

<section id="visit" aria-labelledby="visit-heading" class="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32">
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
		<div class="mb-12">
			<p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
				<span class="h-px w-8 bg-terracotta"></span>
				Plan your visit
			</p>

			<h2 id="visit-heading" class="font-serif text-4xl font-semibold tracking-tight text-brown sm:text-5xl lg:text-6xl">
				Hours & <span class="font-normal italic text-terracotta">location.</span>
			</h2>
		</div>

		<div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
			<div class="min-w-0">
				<h3 class="font-serif text-2xl font-semibold text-brown">
					Opening hours
				</h3>

				<div class="mt-5 w-full max-w-md bg-cream p-4 sm:p-6">
					<div class="flex items-center justify-between gap-2 whitespace-nowrap">
						<span class="text-xs font-semibold text-brown sm:text-base">
							Monday – Sunday
						</span>

						<span class="text-xs text-right text-brown sm:text-base">
							7:00 AM – 12:00 AM
						</span>
					</div>
				</div>

				<h3 class="mt-10 font-serif text-2xl font-semibold text-brown">
					Find us
				</h3>

				<address class="mt-4 text-sm not-italic leading-relaxed text-charcoal/75 sm:text-base">
					{#each business.addressLines as line (line)}
						<p>{line}</p>
					{/each}
				</address>

				<a
					href={business.phoneHref}
					class="mt-4 inline-block text-sm font-semibold text-terracotta underline underline-offset-4 transition-colors hover:text-brown"
				>
					{business.phoneDisplay}
				</a>

				<div class="mt-7">
					<a
						href="https://maps.app.goo.gl/wate76wsp5eMGmQH7"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-8 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-brown"
					>
						Get directions <span class="ml-3" aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<div class="aspect-[4/3] min-h-72 overflow-hidden ring-1 ring-brown/15 lg:aspect-auto lg:min-h-[420px]">
				<iframe
					title="Map showing BoomTown on Omerelu Street, New GRA, Port Harcourt"
					src={mapLocations.embed}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="h-full w-full border-0"
				></iframe>
			</div>
		</div>
	</div>
</section>
