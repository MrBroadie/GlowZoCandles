
const url = 'http://localhost:3001';

export const getReviews = (review) => {
  return fetch(`${url}/reviews`, {
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}

export const postReview = (review) => {
  return fetch(`${url}/reviews`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
} 

export const resolveReviews = (review) => {
  return fetch(`${url}/reviews`, {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
} 

export const destroyReview = (review) => {
  return fetch(`${url}/reviews`, {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(review)
  })
  .then(response => response.json())
  .catch(err => console.error(err))
}  