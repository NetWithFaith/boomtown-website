
<script>
	import { business, mapLocations } from '../lib/data.js';
</script>

<section id="visit" aria-labelledby="visit-heading" class="mx-auto max-w-6xl px-5 py-16 md:py-24">
	<h2 id="visit-heading" class="font-serif text-3xl font-semibold text-brown md:text-4xl">
		Hours and location
	</h2>

	<div class="mt-10 grid gap-10 md:grid-cols-2">
		<div class="min-w-0">
			<h3 class="font-serif text-2xl font-semibold text-brown">Opening hours</h3>

			<div class="mt-4 w-full max-w-md rounded-md bg-cream p-4 sm:p-5">
				<div class="grid grid-cols-[1fr_auto] items-center gap-x-2 sm:gap-x-4">
					<span class="whitespace-nowrap text-sm font-medium text-brown sm:text-base">
						Monday – Sunday
					</span>
					<span class="whitespace-nowrap text-right text-sm text-brown sm:text-base">
						7:00 AM – 12:00 PM
					</span>
				</div>
			</div>

			<h3 class="mt-10 font-serif text-2xl font-semibold text-brown">Find us</h3>

			<address class="mt-3 not-italic">
				{#each business.addressLines as line (line)}
					{line}<br />
				{/each}

				<a
					href={business.phoneHref}
					class="mt-3 inline-block py-1 font-medium text-terracotta underline underline-offset-4"
				>
					{business.phoneDisplay}
				</a>
			</address>

			<div class="mt-6 flex flex-col gap-3 sm:flex-row">
				<a
					href="https://maps.app.goo.gl/wate76wsp5eMGmQH7"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-7 font-medium text-ivory hover:bg-brown"
				>
					Get directions
				</a>

				<a
					href={mapLocations.view}
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex min-h-12 items-center justify-center rounded-full border border-brown px-7 font-medium text-brown hover:bg-brown hover:text-ivory"
				>
					View on Google Maps
				</a>
			</div>
		</div>

		<div class="aspect-4/3 overflow-hidden rounded-md ring-1 ring-brown/15 md:aspect-auto md:min-h-96">
			<iframe
				title="Map showing BoomTown on Omerelu Street, New GRA, Port Harcourt"
				src={mapLocations.embed}
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
				class="h-full w-full border-0"
			></iframe>
		</div>
	</div>
</section>
