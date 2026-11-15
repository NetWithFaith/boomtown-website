
<script>
	import { business, mapLinks } from '../lib/data.js';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	function handleKeydown(event) {
		if (event.key === 'Escape') closeMenu();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="sticky top-0 z-50 border-b border-brown/10 bg-ivory">
	<div class="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-3 sm:px-8 lg:px-12">

		<!-- Brand -->
		<a
			href="#top"
			onclick={closeMenu}
			aria-label="BoomTown home"
			class="group flex shrink-0 flex-col text-brown"
		>
			<span class="font-serif text-2xl font-semibold leading-none tracking-[-0.06em] sm:text-[1.75rem]">
				BOOMTOWN<span class="text-gold">.</span>
			</span>

			<span class="mt-1 text-[7px] font-semibold uppercase tracking-[0.2em] text-brown/65 sm:text-[8px]">
				Restaurant · Lounge · Coffee Shop
			</span>
		</a>

		<!-- Desktop navigation -->
		<nav aria-label="Main navigation" class="hidden md:block">
			<ul class="flex items-center gap-7 lg:gap-10">
				{#each mapLinks as link (link.href)}
					<li>
						<a
							href={link.href}
							class="relative py-2 text-sm font-medium text-brown/80 transition-colors duration-200 hover:text-terracotta after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-terracotta after:transition-all after:duration-300 hover:after:w-full"
						>
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Desktop CTA -->
		<a
			href={business.phoneHref}
			class="hidden min-h-11 items-center justify-center rounded-full bg-terracotta px-6 text-sm font-semibold text-ivory transition duration-300 hover:-translate-y-0.5 hover:bg-brown md:inline-flex"
		>
			Call us
		</a>

		<!-- Mobile menu toggle -->
		<button
			type="button"
			class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-brown/15 text-brown transition-colors hover:bg-cream md:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>

			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				class="h-5 w-5"
				fill="none"
				stroke="currentColor"
				stroke-width="1.8"
				stroke-linecap="round"
			>
				{#if menuOpen}
					<path d="M6 6l12 12M18 6L6 18" />
				{:else}
					<path d="M4 7h16M4 12h16M4 17h16" />
				{/if}
			</svg>
		</button>
	</div>

	<!-- Mobile navigation -->
	{#if menuOpen}
		<nav
			id="mobile-menu"
			aria-label="Mobile navigation"
			class="border-t border-brown/10 bg-ivory md:hidden"
		>
			<ul class="mx-auto max-w-7xl px-6 py-4">
				{#each mapLinks as link (link.href)}
					<li class="border-b border-brown/10 last:border-0">
						<a
							href={link.href}
							onclick={closeMenu}
							class="flex min-h-14 items-center justify-between text-base font-medium text-brown transition-colors hover:text-terracotta"
						>
							{link.label}
							<span aria-hidden="true" class="text-brown/35">↗</span>
						</a>
					</li>
				{/each}

				<li class="pt-4">
					<a
						href={business.phoneHref}
						class="flex min-h-12 items-center justify-center rounded-full bg-terracotta text-sm font-semibold text-ivory transition-colors hover:bg-brown"
					>
						Call BoomTown
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
