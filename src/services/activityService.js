export {
  create,
  getAll,
  deleteOne,
  update,
  getActivityById,
}

const BASE_URL = 'http://localhost:8000/api/activities/'

async function create(activity){
  console.log("opp: ", activity)
  console.log(localStorage.getItem('token'))
  try {
      const res = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
              'Authorization': `JWT ${localStorage.getItem('token')}`
          },
          body: JSON.stringify(activity)
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
      await fetch(`${BASE_URL}${id}`, {
          method: 'DELETE'
      })
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
      })
      const data = await res.json()
      return data
  } catch (error) {
      throw error
  }
}

async function getActivityById (id) {
  try {
      const res = await fetch(`${BASE_URL}${id}`)
      const data = await res.json()
      return data
  } catch (error) {
      throw error
  }
}