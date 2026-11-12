
<script>
	import { business, mapLinks } from '../lib/data.js';

	const year = new Date().getFullYear();
</script>

<footer class="on-dark bg-charcoal py-12 text-ivory/85">
	<div class="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3">
		<div>
			<p class="font-serif text-2xl font-semibold text-ivory">
				{business.shortname}
			</p>
			<p class="mt-2 text-sm">{business.name}</p>
		</div>

		<nav aria-label="Footer">
			<ul class="space-y-1">
				{#each mapLinks as link (link.href)}
					<li>
						<a href={link.href} class="inline-block py-1 hover:text-gold">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div>
			<address class="text-sm not-italic">
				{#each business.addressLines as line (line)}
					{line}<br />
				{/each}
			</address>

			<a
				href={business.phoneHref}
				class="mt-3 inline-block py-1 hover:text-gold"
			>
				{business.phoneDisplay}
			</a>
			<a
    href="mailto:boomtownphc@gmail.com"
    class="mt-2 inline-block py-1 hover:text-gold"
>
    boomtownphc@gmail.com
</a>

			{#if business.socials.length > 0}
				<ul class="mt-4 flex items-center gap-4">
					{#each business.socials as social (social.href)}
						<li>
							<a
								href={social.href}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.label}
								title={social.label}
								class="inline-flex items-center justify-center hover:opacity-75"
							>
								{#if social.label === 'Facebook'}
									<svg
										viewBox="0 0 24 24"
										class="h-6 w-6 fill-current"
										aria-hidden="true"
									>
										<path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z" />
									</svg>
								{:else if social.label === 'Instagram'}
									<svg
										viewBox="0 0 24 24"
										class="h-6 w-6 fill-none stroke-current"
										stroke-width="2"
										aria-hidden="true"
									>
										<rect x="3" y="3" width="18" height="18" rx="5" />
										<circle cx="12" cy="12" r="4" />
										<circle
											cx="17.5"
											cy="6.5"
											r="0.8"
											fill="currentColor"
											stroke="none"
										/>
									</svg>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>

	<div class="mx-auto mt-10 max-w-6xl border-t border-ivory/15 px-5 pt-6 text-xs">
		<p>© {year} BoomTown Restaurant & Coffee Shop PHC.</p>
		<p class="mt-2">
			Independent website redesign concept by
			<span class="font-semibold text-ivory">Frank Faith Tamunonengiyeofori</span>.
			This is not the official BoomTown website.
		</p>
	</div>
</footer>
