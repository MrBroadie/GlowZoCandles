//fetch method for the products

const url = 'http://localhost:3001';

export const getProducts = (product) => {
  return fetch(`${url}/`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(product)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const getProduct = (id) => {
  return fetch(`${url}/product/${id}`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}