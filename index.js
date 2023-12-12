const express=require('express')
const {router}=require('./router/router')
const {connecttomongo}=require('./db')
connecttomongo();
require('dotenv').config()
const app=express();
app.use(express.json())
app.use(router)
const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log("app  strated ")
})