
<script lang="ts">

export let data;

    let planets = data.body?.planets.data;
</script>
<header>
    <div>
    <a class="linkhome" href="/"><h1 class="home">THE PLANETS</h1></a>
    </div>
    <nav>
       
    {#each planets as planet }
    <ul> 
         <li><a href="/planets/{planet.id}"><h2>{planet.name}</h2></a> </li>     
   </ul>
   
 {/each}
</nav>

</header>
<div class="line"></div>





<style>
    header {
		display: flex;
		justify-content: space-between;
	}
     h2{
        color: #FFF;
    }
    nav{
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
    }
  
   .home{
    margin-top: 1.4rem;
		margin-bottom: 2rem;
		margin-left: 2rem;

		color: #FFF;
font-family: Antonio;
font-size: 1.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: -0.06563rem;
text-transform: uppercase;
    }

    .line{
         width: 90rem;
         height: 0.0625rem;
         flex-shrink: 0;
         opacity: 0.2;
         background: #FFF;
   }
  

		
	
	.line{
		width: 90rem;
height: 0.0625rem;
flex-shrink: 0;
opacity: 0.2;
background:#FFF;
	}
	
	nav {
		display: flex;
		justify-content: center;
		background: #070724;
	}

	

	ul {
		
		margin-bottom: 1.6rem;
		position: relative;
		padding: 0;
		
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>