import BasketElement from "./BasketElement"
export default function BasketElements(props) {
  
  return (
    props.basket.map((el, index) => {
      return (
        <BasketElement key={index} index={index} element={el} setTotal={props.setTotal} total={props.total} basket={props.basket} setBasket={props.setBasket}/>
      )
    })
  )
}
