
export {
  getCurrentUser
}

const BASE_URL = `${process.env.REACT_APP_CURRENT_USER}`



async function getCurrentUser(){
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
