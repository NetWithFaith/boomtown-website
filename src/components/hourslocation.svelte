
<script>
	import { business, mapLocations } from '../lib/data.js';
</script>

<section
	id="visit"
	aria-labelledby="visit-heading"
	class="overflow-hidden bg-ivory py-20 sm:py-24 lg:py-32"
>
	<div class="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
		<div class="mb-12 max-w-2xl sm:mb-16">
			<p class="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-terracotta">
				<span class="h-px w-8 bg-terracotta"></span>
				Plan your visit
			</p>

			<h2
				id="visit-heading"
				class="font-serif text-4xl leading-tight font-semibold tracking-tight text-brown sm:text-5xl lg:text-6xl"
			>
				We'd love to <span class="font-normal italic text-terracotta">welcome you.</span>
			</h2>

			<p class="mt-5 max-w-lg text-base leading-relaxed text-charcoal/75 sm:text-lg">
				Find your way to BoomTown, check our opening hours and plan a visit.
			</p>
		</div>

		<div class="grid items-stretch gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
			<div class="flex flex-col">
				<div class="border-y border-brown/15 py-7">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
						Opening hours
					</p>

					<div class="mt-5 flex items-center justify-between gap-4">
						<span class="font-serif text-xl font-semibold text-brown sm:text-2xl">
							Monday – Sunday
						</span>
						<span class="text-right text-sm font-medium text-charcoal sm:text-base">
							7:00 AM – 12:00 AM
						</span>
					</div>
					<p class="mt-2 text-sm text-charcoal/55">Open every day</p>
				</div>

				<div class="py-7">
					<p class="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
						Find us
					</p>

					<address class="mt-5 not-italic">
						<p class="font-serif text-2xl font-semibold text-brown">
							{business.name}
						</p>

						<div class="mt-3 space-y-1 text-sm leading-relaxed text-charcoal/75 sm:text-base">
							{#each business.addressLines as line (line)}
								<p>{line}</p>
							{/each}
						</div>

						<a
							href={business.phoneHref}
							class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-terracotta underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-brown"
						>
							{business.phoneDisplay}
							<span aria-hidden="true">↗</span>
						</a>
					</address>
				</div>

				<div class="mt-auto border-t border-brown/15 pt-6">
					<a
						href="https://maps.app.goo.gl/wate76wsp5eMGmQH7"
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-terracotta px-7 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-brown sm:w-auto"
					>
						Get directions
						<span aria-hidden="true">↗</span>
					</a>
				</div>
			</div>

			<div class="relative min-h-[320px] overflow-hidden bg-cream sm:min-h-[420px] lg:min-h-[500px]">
				<iframe
					title="Map showing BoomTown on Omerelu Street, New GRA, Port Harcourt"
					src={mapLocations.embed}
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
					class="absolute inset-0 h-full w-full border-0"
				></iframe>
			</div>
		</div>
	</div>
</section>
