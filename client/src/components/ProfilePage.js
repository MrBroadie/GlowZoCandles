import { Link, useHistory } from "react-router-dom"
import {sendUpdatedUser} from '../services/userService.js';

export default function ProfilePage(props) {

  const history = useHistory();

  //call the updateUser on form submit
  function newUser(event) {
    event.preventDefault();
    const userCheck = {
      email: props.user.email,
      password:  event.target.updatePassword.value ?  event.target.updatePassword.value : props.user.password,
      firstName: event.target.updateFirstName.value ? event.target.updateFirstName.value : props.user.firstName,
      lastName: event.target.updateLastName.value ? event.target.updateLastName.value : props.user.lastName,
    };
  
    sendUpdatedUser(userCheck)
    .then(response => {
      if (response) {
      props.setUser({
        _id: response._id,
        email: response.email,
        firstName: response.firstName,
        lastName: response.lastName,
        isAdmin: response.isAdmin
      })
      history.push('/')
      history.push('/profile')
      }
    })
  }
  console.log(props.user)
  return (
    <>
  <Link to="/"><button className='continue_shopping_button'>Home</button></Link>
  <div className='basket_header'>
    <h1>Your Details</h1>
  </div>
  <div className="registerFormContainer">
    <form className="loginForm" onSubmit={newUser}>
      <div className="loginInputWrapper">
        <label>Email</label>
        <input className="loginInput" placeholder={props.user.email} disabled></input>
      </div>
      <div className="loginInputWrapper">
        <label>Password</label>
        <input className="profileInput" type="password" name="updatePassword" placeholder="Update Password?"></input>
      </div>
      <div className="loginInputWrapper">
        <label>First Name</label>
        <input className="profileInput" name="updateFirstName" placeholder={props.user.firstName}></input>
      </div>
      <div className="loginInputWrapper">
        <label>Last Name</label>
        <input className="profileInput" name="updateLastName" placeholder={props.user.lastName}></input>
      </div>
      <div className="login_newUser_buttons">
        <button type="submit" className="login_basket" >Update</button>
      </div>
    </form>
   </div>
  </>
  )
}
