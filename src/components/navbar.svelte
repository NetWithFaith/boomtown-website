
<script>
	import { business, mapLinks } from '../lib/data.js';

	let menuOpen = $state(false);

	function closeMenu() {
		menuOpen = false;
	}

	/** @param {KeyboardEvent} event */
	function handleKeydown(event) {
		if (event.key === 'Escape') closeMenu();
	}
</script>

<svelte:window onkeydown={handleKeydown} />

<header class="sticky top-0 z-50 border-b border-brown/10 bg-ivory/95 backdrop-blur">
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">

		<!-- BoomTown Luxury Editorial wordmark -->
		<a
			href="#top"
			onclick={closeMenu}
			aria-label="BoomTown home"
			class="flex w-fit shrink-0 flex-col items-center text-brown"
		>
			<!-- Cloche and extended gold lines -->
			<div class="flex w-full items-center gap-1 text-[#B89558]">
				<span class="h-2px flex-1 bg-current"></span>

				<svg
					aria-hidden="true"
					viewBox="0 0 64 48"
					class="h-8 w-11 shrink-0"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<circle cx="32" cy="5" r="2.5" fill="currentColor" stroke="none" />
					<path d="M32 8v3" />
					<path d="M12 37a20 20 0 0 1 40 0" />
					<path d="M9 40h46" />
					<path d="M15 37h34" />
				</svg>

				<span class="h-2px flex-1 bg-current"></span>
			</div>

			<!-- Main wordmark -->
			<span class="mt-0.5 whitespace-nowrap font-serif text-[1.65rem] font-bold leading-none tracking-[-0.045em] md:text-3xl">
				{business.shortname.toUpperCase()}
			</span>

			<!-- Curved gold underline -->
			<svg
				aria-hidden="true"
				viewBox="0 0 220 12"
				class="mt-0.5 h-2 w-[90%] text-[#B89558]"
				fill="none"
			>
				<path d="M2 10 Q110 -5 218 10" stroke="currentColor" stroke-width="1.5" />
			</svg>

			<!-- Descriptor -->
			<span class="mt-1 whitespace-nowrap text-[6px] font-medium uppercase tracking-[0.15em] text-brown md:text-[7px]">
				Restaurant <span class="text-[#B89558]">•</span>
				Lounge <span class="text-[#B89558]">•</span>
				Coffee Shop
			</span>
		</a>

		<!-- Desktop navigation -->
		<nav aria-label="Main" class="hidden md:block">
			<ul class="flex items-center gap-8">
				{#each mapLinks as link (link.href)}
					<li>
						<a href={link.href} class="py-2 text-brown transition-colors hover:text-terracotta">
							{link.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<!-- Desktop call button -->
		<a
			href={business.phoneHref}
			class="hidden rounded-full bg-terracotta px-5 py-2.5 font-medium text-ivory transition-colors hover:bg-brown md:inline-flex"
		>
			Call us
		</a>

		<!-- Mobile menu button -->
		<button
			type="button"
			class="inline-flex h-11 w-11 items-center justify-center rounded text-brown md:hidden"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class="sr-only">{menuOpen ? 'Close menu' : 'Open menu'}</span>

			<svg
				aria-hidden="true"
				viewBox="0 0 24 24"
				class="h-6 w-6"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
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
		<nav id="mobile-menu" aria-label="Mobile" class="border-t border-brown/10 bg-ivory md:hidden">
			<ul class="mx-auto max-w-6xl px-5 py-3">
				{#each mapLinks as link (link.href)}
					<li>
						<a
							href={link.href}
							onclick={closeMenu}
							class="flex min-h-12 items-center text-lg text-brown"
						>
							{link.label}
						</a>
					</li>
				{/each}

				<li class="py-3">
					<a
						href={business.phoneHref}
						class="flex min-h-12 items-center justify-center rounded-full bg-terracotta font-medium text-ivory"
					>
						Call us
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>
