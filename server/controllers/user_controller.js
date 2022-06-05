const bcrypt = require('bcrypt');
const e = require('express');
const { User } = require('../models/users')

async function index (req, res) {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({email: email});
    const validated = await bcrypt.compare(password, user.password);
    if(!validated) throw new Error();
    req.session.uid = user._id;
    res.status(200).send(user);
  } catch (err) {
    console.error(err);
    res.status(500);
    res.send('Username or password is incorrect')
  }
}

async function create (req, res) {
  const {email, password} = req.body;
  const user = await User.findOne({ email: email })
  if (user) {
    return res.status(409).send('Invalid email, please try another')
  }
  try {
    if (password === '') throw new Error();
    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      ...req.body,
      password: hash,
    });
    const user = await newUser.save();
    //req.session.uid = user._id;
    res.status(201).send(user);
  } catch (err) {
    console.error(err);
    res.status(400);
  }
}

//call fetch request when a user logs in to access this data
//when I call this for orders, need to check the isAdmin prop too
const userProfile = async (req, res) => {
  try{
    const {_id, email, firstName, lastName} = req.user;
    const user = {_id, email, firstName, lastName};
    res.send(user)
  } catch (err) {
    console.error(err)
    res.status(404).send('User not found')
  }
}

async function updateDetails (req, res) {
  try {
  const {email, password, firstName, lastName} = req.body;
  let hash;
  if (password) {
    hash = await bcrypt.hash(password, 10);
  }
  else {
    hash = password
  }
  const filter = { email: email }
  const update = {  
    password: hash,
    firstName: firstName,
    lastName: lastName
  }
  let user = await User.findOneAndUpdate(filter, update)
  user = await User.findOne(filter)
  res.status(201).send(user);
  } catch (err) {
    console.error(err);
    res.status(400);
  }
}

const logout = (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error(error)
      res.status(500).send('Could not log out, please try again')
    } else {
      res.clearCookie('sid');
      res.status(200).send(true)
    }
  })
}

module.exports = { index, create, userProfile, updateDetails, logout}