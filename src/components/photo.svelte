
<script>
	let { src = '', alt, class: className = '', priority = false } = $props();
</script>

{#if src}
	<img
		{src}
		{alt}
		loading={priority ? 'eager' : 'lazy'}
		class="h-full w-full object-cover {className}"
	/>
{:else}
	<div
		role="img"
		aria-label={alt}
		class="flex min-h-40 w-full items-center justify-center bg-gradient-to-br from-cream via-ivory to-terracotta/30 p-4 text-center {className}"
	>
		<span class="text-sm text-brown">{alt}</span>
	</div>
{/if}
