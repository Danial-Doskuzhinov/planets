<script lang="ts">
  export let data;
  let planetData = data && data.body && data.body.data;
  let planet = planetData || {
    id: '',
    name: '',
    rotation: 0,
    revolution: 0,
    radius: 0,
    temperature:0,
    overview:{
      content:'',
      source:'',
    },
    structure:{
      content:'',
      source:'',
    },
    geology:{
      content:'',
      source:'',
    }
     
  };
</script>

{#if planet}
<div class="planet-info">
  <h1 class="planet-name">{planet.name}</h1> 
  <p class="overview-content">{planet.overview.content}</p>
  <p class="overview-source">source:{planet.overview.source}</p>
  <button class="btn" type="button"><h3 class="btn-overview">  OVERVIEW</h3></button><br>
  <button class="btn" type="button"><h3 class="btn-overview"> Internal Structure</h3></button><br>
  <button class="btn" type="button"><h3 class="btn-overview"> Surface Geology</h3></button><br>
</div>
   
<footer>
  <div class="footer"><p class="footer-03">ROTATION TIME</p> <p class="footer-number">{planet.rotation}</p> </div>
  <div class="footer"><p class="footer-03">REVOLUTION TIME</p> <p class="footer-number">{planet.revolution}</p> </div>
  <div class="footer"><p class="footer-03">RADIUS</p> <p class="footer-number">{planet.radius}</p> </div>
  <div class="footer"><p class="footer-03">AVERAGE TEMP.</p> <p class="footer-number">{planet.temperature}</p> </div>
</footer>
   

<p>structure {planet.structure.content}</p>
<p>geology {planet.geology.content}</p>
<p>source {planet.geology.source}</p>
{/if}


<style>
  .planet-info{
    margin-top: 7.88rem;
    margin-left: 57.81rem;
  }
  .planet-name{
    color: #FFF;
font-family: Antonio;
font-size: 4.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
text-transform: uppercase;
  }
  .overview-content{
    width: 21.875rem;
color: #FFF;

font-family: Spartan;
font-size: 0.875rem;
font-style: normal;
font-weight: 400;
line-height: 1.5625rem; /* 178.571% */
  }
  .overview-source{
    opacity: 0.5;
color: #FFF;
font-family: Spartan;
font-size: 0.875rem;
font-style: normal;
font-weight: 700;
line-height: 1.5625rem;
text-decoration-line: underline;
  }
  .btn{
background: #070724;
width: 30.875rem;
height: 3rem;
flex-shrink: 0;
margin-bottom: 1rem;
border: 1px solid #FFF;
}
  .btn-overview{
    
    color: #FFF;
font-family: Spartan;
font-size: 0.75rem;
font-style: normal;

line-height: 1.5625rem; /* 208.333% */
letter-spacing: 0.16069rem;
text-transform: uppercase;
  }
 
  .footer-03{
    margin-top: 1.5rem;
    margin-left: 3rem;
    color: #FFF;
font-family: Spartan;
font-size: 0.9rem;
font-style: normal;
font-weight: 700;
line-height: 1.5625rem; /* 227.273% */
letter-spacing: 0.0625rem;
text-transform: uppercase;
opacity: 1.5;
  }
  footer{
    display: flex;
    justify-content: center;
    margin-top: 5.45rem;
  }
  .footer{
    margin-left: 1.9rem;
    width: 15.9375rem;
height: 8rem;
flex-shrink: 0;
border: 1px solid #FFF;
opacity: 0.4;
  }
  .footer-number{
    margin-top: 1.3rem;
    margin-left: 3rem;
    color: #FFF;
    letter-spacing: -0.09375rem;

  }

</style>