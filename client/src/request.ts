

export async function getPromotion() {
    try {
        const responce = await fetch('http://localhost:3000/promotion/get', {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
            
        })
        const data = await responce.json()
        console.log(" data = ", data)
        return data
    } catch (error) {
        return 'Ошибка при получении акций dsdsc: ' + error
    }
}

export async function getByIdPromotion(id: string) {
    try {

        const responce = await fetch(`http://localhost:3000/promotion/getById/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            }
        })
        if (!responce.ok) {
            throw new Error(`Ошибка сервера: ${responce.status}`);
        }
        const data = await responce.json()
        console.log(" data = ", data)
        return data
    } catch (error) {
        return 'Ошибка при получении акции front: ' + error
    }
    
}


export async function getPrize() {
    try {
        const responce = await fetch('http://localhost:3000/prize/get', {
            method: 'GET',
            headers: {
                accept: 'application/json'
            }
        })
        const data = await responce.json()
        console.log("prize = ", data)
        return data
    } catch (error) {
        console.log("Ошибка при получении призов: " + error)
    }
}

export async function createPromotion(data) {
    console.log("DATAA = ", data)
    try {
        const responce = await fetch('http://localhost:3000/promotion/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        const data2 = await responce.json()
        return data2
      
    } catch (error) {
        console.log("Ошибка при создании акции front: " + error)
    }
  
}

export async function deletePromotion(id: string) {
    console.log("DELETE = ", id)
    try {
        const responce = await fetch('http://localhost:3000/promotion/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json', 
                'Accept': 'application/json'
            },
            body: JSON.stringify({id})
        })
    
        const data2 = await responce.json()
        return data2
      
    } catch (error) {
        console.log("Ошибка при удалении акции front: " + error)
    }
}


export async function updatePromotion(data) {
    console.log("UPDATE = ", data)
    try {
        const responce = await fetch('http://localhost:3000/promotion/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',  
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
    
        const data2 = await responce.json()
        return data2
      
    } catch (error) {
        console.log("Ошибка при изменении акции front: " + error)
    }
}