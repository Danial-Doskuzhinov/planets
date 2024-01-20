
<script lang="ts">

// +page.server.ts

import Planets from '../routes/+layout.svelte'

</script>
<header>
  
</header>
<h1>это хедер без логики</h1>
<!-- 
// +page.server.ts
export const load = async () => {
    try {
        const name = 'this title load func';
    const response = await fetch(`http://localhost:8081/api/v1/planets/${id}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json', 
        },
    });
    if(!response.ok){
        console.log('ошибка не 200');
        
    }
    const data = await response.json();
    console.log(data, 'log377');
    return {
        body: {
            name,
            planets: data,
        },
    };
    } catch (error) {
        console.log(error , 'oshibka');
        
    }
    
};
 -->
