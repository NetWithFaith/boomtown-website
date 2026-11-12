<script>
	import { business, mapLinks } from '../lib/data.js';
</script>

<!-- id="contact" is where the "Contact" navbar link lands. -->
<section id="contact" aria-labelledby="contact-heading" class="bg-cream py-20 md:py-28">
	<div class="mx-auto max-w-3xl px-5 text-center">
		<h2 id="contact-heading" class="font-serif text-4xl font-semibold text-brown md:text-5xl">
			Good memories deserve another helping.
		</h2>
		<p class="mx-auto mt-5 max-w-prose text-lg">
			Call {business.shortname} to ask about the menu or opening hours, or come and find them in New GRA.
		</p>

		<address class="mt-6 not-italic">
			{business.addressLines.join(', ')}
		</address>

		<div class="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
			<a
				href={business.phoneHref}
				class="inline-flex min-h-12 items-center justify-center rounded-full bg-terracotta px-8 font-medium text-ivory hover:bg-brown"
			>
				Call {business.phoneDisplay}
			</a>
			<a
				 href="https://maps.app.goo.gl/wate76wsp5eMGmQH7"
				target="_blank"
				rel="noopener"
				class="inline-flex min-h-12 items-center justify-center rounded-full border border-brown px-8 font-medium text-brown hover:bg-brown hover:text-ivory"
			>
				Get directions
			</a>
		</div>
	</div>
</section>
