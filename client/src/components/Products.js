import Product from './Product'
import {useState} from 'react'


export default function Products(props) {

  const [searchWord, setSearchWord] = useState('')

  return (
    <> 
    <div className='searchContainer'>
      <input className='searchBar' type="text" placeholder='Search' onChange={event => setSearchWord(event.target.value)}/>
    </div>
    <div className='products'>
      {props.products.filter((val) => {
        if (searchWord === '') {
          return val;
        }
        else if (val.title.toLowerCase().includes(searchWord.toLowerCase())) {
          return val;
        }
      }).map(product => {
          return <Product key={product._id} product={product} />
        })
      }
    </div>
    </>
  )
}
