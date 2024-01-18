<script lang="ts">    
    export let data;
    let planets = data.body?.planets.data;
    let log = console.log(planets);
</script>
<header>
    {#each planets as planet }
    <ul>
        {planet.name}
        {planet.id}
    </ul>
{/each}
</header>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
{log}
<style>
    ul{
        display: flex;
        flex-direction: row;
    }
</style>

