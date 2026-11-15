
<script>
	import { business } from '../lib/data.js';
</script>

<section
	id="contact"
	aria-labelledby="contact-heading"
	class="on-dark relative isolate overflow-hidden bg-brown py-24 text-ivory sm:py-28 lg:py-36"
>
	<div aria-hidden="true" class="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-ivory/10 sm:h-[28rem] sm:w-[28rem]"></div>
	<div aria-hidden="true" class="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-gold/20 sm:h-96 sm:w-96"></div>

	<div class="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
		<p class="mb-6 flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#D6B77A]">
			<span class="h-px w-8 bg-[#D6B77A]"></span>
			Your table is waiting
			<span class="h-px w-8 bg-[#D6B77A]"></span>
		</p>

		<h2
			id="contact-heading"
			class="mx-auto max-w-3xl font-serif text-4xl leading-[1.12] font-semibold tracking-tight sm:text-5xl lg:text-7xl"
		>
			Good memories deserve
			<span class="block font-normal italic text-[#E5C995]">another helping.</span>
		</h2>

		<p class="mx-auto mt-7 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
			Have a question about the menu or opening hours? Get in touch with {business.shortname}, or stop by and experience BoomTown for yourself.
		</p>

		<div class="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
			<a
				href={business.phoneHref}
				class="inline-flex min-h-14 items-center justify-center rounded-full bg-terracotta px-9 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-1 hover:bg-[#854126]"
			>
				Call {business.phoneDisplay}
			</a>

			<a
				href="https://maps.app.goo.gl/wate76wsp5eMGmQH7"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex min-h-14 items-center justify-center rounded-full border border-ivory/40 px-9 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-1 hover:bg-ivory hover:text-brown"
			>
				Get directions <span class="ml-3" aria-hidden="true">↗</span>
			</a>
		</div>

		<div class="mx-auto mt-12 flex max-w-md flex-col items-center gap-2 border-t border-ivory/15 pt-7">
			<p class="text-xs font-semibold uppercase tracking-[0.2em] text-[#D6B77A]">
				Find us in Port Harcourt
			</p>
			<address class="text-sm not-italic leading-relaxed text-ivory/70">
				{business.addressLines.join(', ')}
			</address>
		</div>
	</div>
</section>
