export default function BasketElement(props) {

function removeItem() {
  props.setBasket([
    ...props.basket.slice(0, props.index),
    ...props.basket.slice(props.index + 1)
  ])
  props.setTotal([...props.total, -props.element.price])
}

  return (
    <div className='element_container'>
      <div className='basket_element'>
        <p className='basket_name'>Qty: 1</p>
        <p className='basket_name'>Title: {props.element.title} </p>
        <p className='basket_name'>Price: {props.element.price} </p>
        <p className='basket_name'>Colour: {props.element.colour} </p>
        <p className='basket_name'>Scent: {props.element.scent} </p>
      </div>
      <button onClick={removeItem} className='basket_delete_button'>X</button>
  </div>
  )
}

