{/* <pre>{process.env.REACT_APP_OPPORTUNITY}</pre> */}


export {
    create,
    getAll,
    deleteOne,
    update,
    getOpportunityById,
}

const BASE_URL = `${process.env.REACT_APP_OPPORTUNITY}`

async function create(opportunity){
    console.log("opp: ", opportunity)
    console.log(localStorage.getItem('token'))
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(opportunity)
        })
        console.log("res: ", res)
        const data = await res.json()
        console.log("data: ", data)
        return data
    } catch (error) {
        throw error
    }
}

async function getAll(){
    try {
        const res = await fetch(BASE_URL, {
            headers: {
            'content-type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('token')}`
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function deleteOne(id){
    try {
        await fetch(`${BASE_URL}${id}/`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }
        })
    } catch (error) {
        throw error
    }
}

async function update(opportunity, id){
    console.log(opportunity)
    try{
        const res = await fetch(`${BASE_URL}${id}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(opportunity)
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function getOpportunityById (id) {
    try {
        const res = await fetch(`${BASE_URL}${id}/`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            }
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}