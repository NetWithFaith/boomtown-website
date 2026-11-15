
<script>
	import { business, mapLinks } from '../lib/data.js';

	const year = new Date().getFullYear();
</script>

<footer class="on-dark bg-charcoal text-ivory/85">
	<div class="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
		<div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr] lg:gap-20">

			<!-- Brand -->
			<div>
				<a href="#top" class="inline-block">
					<span class="font-serif text-3xl font-semibold tracking-tight text-ivory">
						{business.shortname}<span class="text-gold">.</span>
					</span>
				</a>

				<p class="mt-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">
					Restaurant · Lounge · Coffee Shop
				</p>

				<p class="mt-6 max-w-xs text-sm leading-relaxed text-ivory/60">
					Good food, warm moments, and memories worth keeping.
				</p>
			</div>

			<!-- Navigation -->
			<nav aria-label="Footer navigation">
				<h2 class="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
					Explore
				</h2>

				<ul class="space-y-3">
					{#each mapLinks as link (link.href)}
						<li>
							<a
								href={link.href}
								class="inline-block text-sm text-ivory/75 transition-colors duration-200 hover:text-gold"
							>
								{link.label}
							</a>
						</li>
					{/each}
				</ul>
			</nav>

			<!-- Contact -->
			<div>
				<h2 class="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
					Get in touch
				</h2>

				<address class="text-sm not-italic leading-relaxed text-ivory/70">
					{#each business.addressLines as line (line)}
						<p>{line}</p>
					{/each}
				</address>

				<a
					href={business.phoneHref}
					class="mt-4 inline-block text-sm text-ivory/80 transition-colors hover:text-gold"
				>
					{business.phoneDisplay}
				</a>

				<a
					href="mailto:boomtownphc@gmail.com"
					class="mt-2 block text-sm text-ivory/80 transition-colors hover:text-gold"
				>
					boomtownphc@gmail.com
				</a>

				{#if business.socials.length > 0}
					<ul class="mt-6 flex items-center gap-4">
						{#each business.socials as social (social.href)}
							<li>
								<a
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									title={social.label}
									class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 text-ivory/75 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-charcoal"
								>
									{#if social.label === 'Facebook'}
										<svg
											viewBox="0 0 24 24"
											class="h-5 w-5 fill-current"
											aria-hidden="true"
										>
											<path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8h3.4z" />
										</svg>
									{:else if social.label === 'Instagram'}
										<svg
											viewBox="0 0 24 24"
											class="h-5 w-5 fill-none stroke-current"
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

		<!-- Bottom bar -->
		<div class="mt-16 border-t border-ivory/15 pt-8">
			<div class="flex flex-col items-center gap-5 text-center">
				<p class="text-xs text-ivory/50">
					© {year} BoomTown Restaurant & Coffee Shop PHC. All rights reserved.
				</p>

				<p class="text-xs text-ivory/60">
					Designed and developed by
					<span class="font-semibold text-gold">
						Frank Faith Tamunonengiyeofori
					</span>
				</p>

				<p class="max-w-xl text-[11px] leading-relaxed text-ivory/40">
					Independent website redesign concept created for portfolio purposes.
					This is not the official BoomTown website.
				</p>
			</div>
		</div>
	</div>
</footer>
