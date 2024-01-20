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
  <h1>{planet.name}</h1>
  <p>Rotation: {planet.rotation}</p>
<p>revolution {planet.revolution}</p>
<p>radius {planet.radius}</p>
<p>temperature {planet.temperature}</p>
  <p>content -{planet.overview.content}</p>
  <p>source - {planet.overview.source}</p>
    <p>structure {planet.structure.content}</p>
    <p>geology {planet.geology.content}</p>
    <p>source {planet.geology.source}</p>
{/if}


<style>
  h1{
    color: aliceblue;
  }
</style>