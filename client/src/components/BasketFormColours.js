import React from 'react'

export default function BasketFormColours(props) {
  return (
   props.product.colours.map(colour => {
      return (
        <option key={colour.colour}>{colour.colour}</option>
      )
      })
  )}
