import React from 'react'

export default function BasketFormScents(props) {
  return (
    props.scents.map(scent => {
        return (
              <option key={scent} >{scent}</option>
        )
    })
)}