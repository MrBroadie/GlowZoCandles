import OrderSingle from './OrderSingle'


export default function OrderList(props) {

  return (
    props.orders.map(order =>{
      return (
          <OrderSingle resolve={props.resolve} setResolve={props.setResolve} key={order._id} order={order} user={props.user} />
      )
    }
  )
)}
