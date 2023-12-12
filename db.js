const mongoose = require('mongoose');

const connecttomongo=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/g28').
    then(()=>{console.log("connected to mongdb")}).
    catch(()=>{console.log("connection failed")});
}

module.exports={connecttomongo}