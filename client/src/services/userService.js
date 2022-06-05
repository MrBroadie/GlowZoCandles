//fetch method for the products

const url = 'http://localhost:3001';

export const createUser = (user) => {
  return fetch(`${url}/register`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const checkUser = (user) => {
  return fetch(`${url}/login`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const logoutUser = (user) => {
  return fetch(`${url}/logout`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const sendUpdatedUser = (user) => {
  return fetch(`${url}/profile`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(user)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}