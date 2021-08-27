export {
  signup
}


async function signup(data){
  try{
    const res = await fetch(`${process.env.REACT_APP_LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    return json

  } catch (error) {
    throw error
  }
}