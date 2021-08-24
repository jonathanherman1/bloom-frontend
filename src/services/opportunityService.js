export {
    create,
    getAll,
    deleteOne,
    update,
    getOpportunityById,
}

const BASE_URL = '/api/opportunities/'

async function create(opportunity){
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(opportunity)
        }, {mode: 'cors'})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function getAll(){
    try {
        const res = await fetch(BASE_URL, {
            headers: {
            'content-type': 'application/json'
            }
        }, {mode: 'cors'})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function deleteOne(id){
    try {
        await fetch(`${BASE_URL}${id}`, {
            method: 'DELETE'
        }, {mode: 'cors'})
    } catch (error) {
        throw error
    }
}

async function update(opportunity, id){
    console.log(opportunity)
    try{
        const res = await fetch(`${BASE_URL}${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(opportunity)
        }, {mode: 'cors'})
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function getOpportunityById (id) {
    try {
        const res = await fetch(`${BASE_URL}${id}`, { mode: 'cors' })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}