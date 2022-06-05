import {useEffect} from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import BasketElements from './BasketElements'
import { createOrder } from '../services/orderService';

export default function Basket(props) {
 
  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
    }, [location]);

    function checkLogin () {
      if(props.user._id) {
        //sets total cost from array to number
        const formattedTotal = +(props.total.reduce((prevVal, currentVal) => prevVal + currentVal).toFixed(2));
        console.log(formattedTotal)
        const newOrder = {
          submittedBy: props.user._id,
          resolved: false,
          products: props.basket,
          totalCost: formattedTotal,
          user : props.user.email,
          date: Date.now()
          // address: form for address
        }
        createOrder(newOrder).then(response => response ? history.push('/orders') : console.log('Order not placed'));  
        props.setBasket([])
        props.setTotal([])
    }
      else {
        history.push('/login');  
      }
    }
      


  return (
    <>
      <Link to="/"><button className='continue_shopping_button'>Continue Shopping</button></Link>
    <div className='basket_header'>
      <h1>Your Basket</h1>
    </div>
    <div className='basket_outer'>
      {props.basket.length 
      ?
        <div className='basket_elements'>
          <BasketElements setTotal={props.setTotal} total={props.total} basket={props.basket} setBasket={props.setBasket}/>
          <div className='total_order_button'>
            <h2 className='basket_total'>Total: £{props.total.reduce((prevVal, currentVal) => prevVal + currentVal).toFixed(2) }</h2>
            <button onClick={checkLogin} className="basket_order_button">Order</button>
            {/* add address form with this as the submit button --> also on submit timestamp the date and time using momentum */}
          </div>
        </div>
      :
        <h2 className='empty_basket'>Your basket is empty</h2>
      }
    </div>
    </>
  )
}
