import type { Load } from "@sveltejs/kit";

export const load: Load = async ({ fetch, params }) => {
    console.log('dsssddddssssssssssss', params);
    const { planetsid } = params; 
    const response = await fetch(`http://localhost:8081/api/v1/planets/${planetsid}`);
    
    if (!response.ok) {
        console.error(`response dont ok  ${planetsid}. Status: ${response.status}`);
        return {
            status: response.status,
            body: {
                error: `response dont oki  ${planetsid}. Status: ${response.status}`,
            },
        };
    }

    const data = await response.json();
    return {
        body:{
            data:{
                id:data.id,
                name:data.name,
                rotation:data.rotation,
                revolution:data.revolution,
                radius:data.radius,
                temperature:data.temperature,
                
                overview:{
                    content:data.overview.content,
                    source:data.overview.source,
                },
                structure:{
                    content:data.structure.content,
                    source:data.structure.source,
                },
                geology:{
                    content:data.geology.content,
                    source:data.geology.source,
                }
            }
        }
        
        }
      
      
};

