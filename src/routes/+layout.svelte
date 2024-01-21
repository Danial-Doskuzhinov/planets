<script lang="ts">  
import './style.css';
import Header from './header.svelte';
    export let data;
</script>
<header>
    
    <nav>
     <Header {data}/>
    </nav>
</header>
<slot/>
<style>

</style>