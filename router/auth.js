const express=require('express')
const authrouter=express.Router()
const {login,logout,signup}=require('../functions/auth')
const {checkCreds}=require("../middleware/checkCreds")

//http://localhost:5500/auth/login
authrouter.get('/login',login)
authrouter.get('/logout',logout)
authrouter.post('/signup',checkCreds,signup)

module.exports={authrouter}