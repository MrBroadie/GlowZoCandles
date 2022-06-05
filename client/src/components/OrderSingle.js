import OrderProducts from "./OrderProducts"
import moment from 'moment'
import { updateOrder } from "../services/orderService"

export default function OrderSingle(props) {
  //console.log('all orders', props.order)

  function resolveOrder() {
    //call put request from service
    updateOrder(props.order._id)
    props.setResolve(!props.resolve)
  }

  return (
    <>
    <div className='order_element_container'>
          <div className="order_name">
          {props.order.resolved ? <h3 >Order has been shipped</h3> : <h3> Order has been placed</h3>}
          {props.order.resolved ? <p> Shipped on: {moment(props.order.date).format('MMMM Do YYYY, h:mm a')} </p> :<p> Placed on: {moment(props.order.date).format('MMMM Do YYYY, h:mm a')} </p> }
          </div>
          <div className="order_format">
            {<OrderProducts orderProducts={props.order.products}/>}
          </div>
          <div className="order_name">
            <p className='basket_name'>Ordered by: {props.order.user}</p>
            <p className='basket_name'>Order id: {props.order._id}</p>
            <p className='basket_name'>Total: {props.order.totalCost}</p>
          </div>
        {props.user.isAdmin && <button onClick={resolveOrder} className="order_button">Complete order</button>}
      </div>
    </>
  )
}
