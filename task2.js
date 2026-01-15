// Task 2: listUsers()
import { getServerURL } from "./task1.js";

export async function listUsers() {
    
    const url = getServerURL(); 

    try {
        const response = await fetch(url);

        
        if (!response.ok) {
            throw new Error(`Error en el servidor: ${response.status}`);
        }

        const result = await response.json();
        console.log(result); 
        
    } catch (error) {
        console.error("Hubo un problema al obtener los usuarios:", error.message);
    }
}

