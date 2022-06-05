import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation} from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { getProducts } from './services/productService';
import ProductDetails from './components/ProductDetails';
import Basket from './components/Basket';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Orders from './components/Orders';
import ProfilePage from './components/ProfilePage';
import Reviews from './components/Reviews';


function App() {

  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState([]);
  const [user, setUser] = useState({});

  //create custom hook useScroll --> neaten this up
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
    }, [location]);

useEffect(() => {
  getProducts().then(data => {
    return setProducts(data)
  })
}, [])

  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/">
          <Navbar user={user} setUser={setUser}/>
          <Products products={products}/>
        </Route>
        <Route path="/product/:id" >
          <ProductDetails setBasket={setBasket} total={total} setTotal={setTotal} />
        </Route>
        <Route path="/basket">
          <Basket user={user} setTotal={setTotal} total={total} setBasket={setBasket} basket={basket} />
        </Route>
        <Route path="/login">
          <LoginPage setUser={setUser}/>
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/profile">
          <ProfilePage setUser={setUser} user={user}/>
        </Route>
        <Route path="/orders">
          <Orders user={user}/>
        </Route>
        <Route path="/reviews">
          <Reviews user={user}/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
