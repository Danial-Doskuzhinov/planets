<script lang="ts">  
import './style.css'
    export let data;
    let planets = data.body?.planets.data;
</script>
<header>
    <a class="linkhome" href="/"><h1 class="home">THE PLANETS</h1></a>
    <nav>
        {#each planets as planet }
        <ul>  
         <a href={`/planets/${planet.id}`}><h2>{planet.id} </h2></a>     
       </ul>
     {/each}
    </nav>
    <div class="line"></div>
</header>
<slot/>
<style>
    h2{
        color: #FFF;
    }
    .home{
        color: #FFF;
font-family: Antonio;
font-size: 1.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.06563rem;
text-transform: uppercase;
    }
    nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
    .line{
         width: 90rem;
         height: 0.0625rem;
         flex-shrink: 0;
         opacity: 0.2;
         background: #FFF;
   }
</style>