{/* <pre>{process.env.REACT_APP_COMPANY}</pre> */}


export {
  create,
  getAll,
  deleteOne,
  update,
  getCompanyById,
}

const BASE_URL = `${process.env.REACT_APP_COMPANY}`

async function create(company){
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(company)
        })
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
            },
        })
    } catch (error) {
        throw error
    }
}

async function update(company, id){
    try{
        const res = await fetch(`${BASE_URL}${id}/`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(company)
        })
        const data = await res.json()
        return data
    } catch (error) {
        throw error
    }
}

async function getCompanyById (id) {
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