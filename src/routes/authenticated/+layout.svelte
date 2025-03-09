<script lang="ts">
	import { goto } from "$app/navigation";
	import { page } from "$app/state";

	if (!page.data.session) goto("/");
</script>

<slot />
