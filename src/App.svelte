<script>
	import ProfilesList from "./components/ProfilesList.svelte"
	import ProfileBtn from "./components/ProfileBtn.svelte"
</script>

<main class="shadow container">
	<header>
		<h1>Select your profile</h1>
		<p>Logged in users can view full business profiles and save contact details.</p>
	</header>
	<ProfilesList />
	<ProfileBtn />
</main>

<style>
	main {
		background-color: #fff;
		border-radius: 25px;
	}

	header {
		text-align: center;
	}

	header h1 {
		margin-bottom: 1rem;
	}

	header p {
		font-weight: bold;
		max-width: 45ch;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 2rem;
	}
</style>