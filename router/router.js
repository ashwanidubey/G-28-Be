const express=require('express')
const router=express.Router()

const {authrouter}=require('./auth')
const {noterouter}=require('./note')

router.use('/auth',authrouter)
router.use('/note',noterouter)

module.exports={router}
//http://localhost:5500/note/deletenote