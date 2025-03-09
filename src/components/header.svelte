<script lang="ts">
	import { page } from "$app/state";
	import { signIn, signOut } from "@auth/sveltekit/client";
	import { SignIn, SignOut } from "@auth/sveltekit/components";

	const uuid = crypto.randomUUID();
	const defaultAvatar = `https://api.dicebear.com/9.x/thumbs/svg?seed=${uuid}&randomizeIds=true`;
</script>

<header>
	<div class="session">
		{#if page.data.session}
			{@const user = page.data.session.user}
			<div class="user">
				<img alt="User avatar" src={user?.image} width="50" height="50" />
				<span>{user?.name ?? user?.email}</span>
			</div>
			<div class="buttons">
				<button onclick={() => signOut()}>💻 sign out</button>
				<SignOut>
					<div slot="submitButton">🤖 sign out</div>
				</SignOut>
			</div>
		{:else}
			<div class="user">
				<img alt="User avatar" src={defaultAvatar} width="50" height="50" />
				<span>you are not signed in :(</span>
			</div>
			<div class="buttons">
				<button onclick={() => signIn("github")}> 💻 sign in </button>
				<SignIn provider="github">
					<div slot="submitButton">🤖 sign in</div>
				</SignIn>
			</div>
		{/if}
	</div>
	<nav>
		<ul class="navItems">
			<li class="navItem"><a href="/">home</a></li>
			<li class="navItem"><a href="/protected">protected</a></li>
			<li class="navItem">
				<a href={`/authenticated/${uuid}`}>authenticated/[id]</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	.session {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.user {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.buttons {
		display: flex;
		flex-direction: column;
	}

	nav ul {
		display: flex;
		align-items: center;
		list-style: none;
		padding: 0;
		gap: 1rem;
	}
</style>
