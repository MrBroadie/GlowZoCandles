import React from 'react'
import { Link } from 'react-router-dom'

export default function Product(props) {

  const linkStyle = {
    color: "black",
    textDecoration: 'none',
    fontSize: '20px',
    textEmphasis: '500'
  };

  return (
    <>
    <Link style={linkStyle} to={`/product/${props.product._id}`} className="product">
      <img src={props.product.pic_one} className="picture_home" alt="picture_of_each_candle"></img>
      <p className="title_home" >{props.product.title}</p>
    </Link>
    </>
  )
}
