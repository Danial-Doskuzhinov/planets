<script>
	// import Header from './Header.svelte';
	// import './styles.css';/
</script>

<div class="app">
	<header>	
		<nav>			
			<ul>			
				<a href="/">Home</a>							
				<a href="/planets">planets</a>	
				<a href="/">home</a>
			</ul>	
		</nav>
	</header>

	<main>
		<slot />
	</main>

	</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
