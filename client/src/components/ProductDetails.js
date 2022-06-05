import {useState, useEffect} from 'react'
import { Link, useParams, useHistory, useLocation } from 'react-router-dom'
import { getProduct } from '../services/productService';
import BasketFormColours from './BasketFormColours'
import BasketFormScents from './BasketFormScents'


export default function ProductDetails(props) {

  const history = useHistory();

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
    }, [location]);

  //access the id in the url
  const { id } = useParams();
  const [product, setProduct] = useState({})

  //sets the currently selected colour
  const [colour, setColour] = useState('')

  //sets scents to be the array inside the object with the colour value
  let scents = product.colours && product.colours.find(colourObject => colourObject.colour === colour)?.scents

  //fetches the data of a specific product
   useEffect(() => {
    getProduct(id).then(data => {
      return setProduct(data)
    })
  }, [id])

  //when form is handled adds product to the basket state
  function addToBasket(event) {
    event.preventDefault();
    const newItem = {
       title: product.title,
       price: product.price,
       colour: event.target.candleColour.value,
       scent: event.target.candleScent.value,
    }

    //ensures that the item can only be submitted if it has a valid value
    let checkItem = true && newItem.scent !== 'Scent' && newItem.colour !== 'Colour'
    if (checkItem) {
      props.setBasket(basket => [...basket, newItem]); 
      history.push('/basket');   
      props.setTotal(current => [...current, newItem.price])
    }
  }

  return (
    <>
      <Link  to="/"><button className='home_button'>Home</button></Link>
      <div className='img_container'>
        <img className="details_picture" src={product.pic_two} alt="imageOfCandle"></img>
        </div>
        <div className='details_layout'>
          <div className='inner_details_layout'>
            <p>Description: <br/>{product.description}</p>
            <p>Price: £{product.price}</p>
          </div>
          <div>
            <form className='add_to_basket_form' onSubmit={addToBasket} >
                <select id="select_colour" onChange={(event) => setColour(event.target.value)} className="add_to_basket_dropdown" name="candleColour">
                <option>Colour</option>
                  {product.colours && <BasketFormColours product={product} />}
                </select>
                <select className="add_to_basket_dropdown" name="candleScent">
                  {scents ? <BasketFormScents scents={scents}/> : <option>Scent</option>}
                </select>
                <button type="submit" className='add_to_basket_selector'>Add to basket</button>
            </form>
          </div>
        </div>
    </>
  )
}
