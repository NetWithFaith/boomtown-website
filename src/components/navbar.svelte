
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
	<div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-2.5">

		<!-- Compact BoomTown Luxury Editorial wordmark -->
		
<a
	href="#top"
	onclick={closeMenu}
	aria-label="BoomTown home"
	class="flex shrink-0 flex-col items-start text-brown"
>
	<!-- Main wordmark -->
	<span class="font-serif text-[1.4rem] font-bold leading-none tracking-[-0.045em] sm:text-2xl">
		BOOMTOWN<span class="text-[#B89558]">.</span>
	</span>

	<!-- Brand descriptor -->
	<span class="mt-1 whitespace-nowrap text-[6px] font-semibold uppercase tracking-[0.16em] text-[#8C7048] sm:text-[7px]">
		Restaurant · Lounge · Coffee Shop
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
