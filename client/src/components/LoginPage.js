import { Link, useHistory } from "react-router-dom"
import {checkUser} from '../services/userService.js';

export default function LoginPage(props) {
  
  const history = useHistory();

  //call the checkUser on form submit
  function checkDetails(event) {
    event.preventDefault();
    const userCheck = {
      email: event.target.loginEmail.value,
      password: event.target.loginPassword.value
    };
  
    checkUser(userCheck)
    .then(response => {
      if (response) {
      console.log('logged in')
      props.setUser({
        _id: response._id,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        isAdmin: response.isAdmin
      })
      return history.push('/'); 
      }
      return alert('Incorrect username or password')
    })
  }

  return (
    <>
  <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
  <div className='basket_header'>
    <h1>Login</h1>
  </div>
  <div className="loginFormContainer">
    <form className="loginForm" onSubmit={checkDetails}>
      <div className="loginInputWrapper">
        <label>Email</label>
        <input className="loginInput" name="loginEmail" placeholder="Insert email" required></input>
      </div>
      <div className="loginInputWrapper">
        <label>Password</label>
        <input className="loginInput" type="password" name="loginPassword" placeholder="Insert password" required></input>
      </div>
      <div className="login_newUser_buttons">
        <button type="submit" className="login_basket" >Login</button>
        <Link to="/register"><button className="login_basket" >New user?</button></Link>
      </div>
    </form>
   </div>
  </>
  )
}
