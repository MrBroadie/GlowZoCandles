
const url = 'http://localhost:3001';

export const getOrders = (order) => {
  return fetch(`${url}/orders`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(order)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const getUserOrders = (submittedByUser) => {
  return fetch(`${url}/ordersUser`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({submittedByUser})
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const createOrder = (order) => {
  return fetch(`${url}/orders`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(order)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const updateOrder = (orderId) => {
  return fetch(`${url}/orders`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({_id: orderId})
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

