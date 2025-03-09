<script>
	import { page } from "$app/state";
</script>

<h1>protected page</h1>

<h2>{page.params.id}</h2>

<p>
	this is page is protected using <code>src/hooks.server.ts</code> (via
	<code class="if"
		>if (event.url.pathname.startsWith('/authenticated') && !session)
		redirect(303, '/')</code
	>) AND
	<code>src/routes/authenticated/+layout.svelte</code> via
	<code class="if">if (!page.data.session) goto("/")</code>.
</p>
<p>
	not ideal... buy anyway, you can access this content because you are signed
	in.
</p>
<p>session expiry: {page.data.session?.expires}</p>

<style>
	code {
		font-weight: bold;
	}

	code.if {
		font-weight: normal;
		opacity: 0.5;
	}
</style>
