const mongoose = require('mongoose');

const notechema= mongoose.Schema(
    { title: String ,
      status:String,
      desc:String,
      date: { type: Date, default: Date.now },
    }
    );

const Note = mongoose.model('Note',notechema);

module.exports={Note}