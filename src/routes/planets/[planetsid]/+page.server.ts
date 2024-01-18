import type { Load } from '@sveltejs/kit';

export const load: Load = async (serverLoad) => {
    try {
        const {fetch , params , url ,route} = serverLoad;
        console.log('params  ',params,'url  ',url ,'route.id  ',  route.id);
        
        const { planetsid } = params;
        console.log(' its params ',params ,);
        
        const name = 'this title load func';

        const response = await fetch(`http://localhost:8081/api/v1/planets/${planetsid}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            console.error(`Ошибка запроса: ${response.status} ${response.statusText}`);
        }

        const planets = await response.json();
        console.log( planets);
        
        return {
            
                name,
                planets,
                params,
                planetsid
            
        };
    }catch(error) {
        console.error('Ошибка:', error);
    }
};
