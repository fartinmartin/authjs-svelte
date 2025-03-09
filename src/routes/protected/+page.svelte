<script lang="ts">
	import { page } from "$app/state";
</script>

{#if page.data.session}
	<h1>protected page</h1>
	<p>
		this is page is protected using <code>#if page.data.session</code>. you can
		access this content because you are signed in.
	</p>
	<p>session expiry: {page.data.session.expires}</p>
{:else}
	<h1>access denied</h1>
{/if}

<style>
	code {
		font-weight: bold;
	}
</style>
