const {Note}=require('../models/note')
const createnote=(req,res)=>{
  const {title,desc,status}=req.body
   const note = new Note({title,desc,status});
   note.save().then(() => console.log('note created'));
   res.send("hello i createnote")
 }
 const searchenote=(req,res)=>{
  const {title}=req.body
   const notes =  Note.find({title});
   
   res.send({search:true,notes})
 } 
 const editnote=(req,res)=>{
  const {id,newnote}=req.body
  const notes =  Note.find({_id:id});
  if(notes.length>=0)
  {
     let note= Note.findByIdAndUpdate(id,{$set:newnote} )
     return res.send({"update":true,"note":note, "message":"note has been deleted",success:true}); 
  }
  else
  {
      res.send({update:false,"message":"no record "})
  }
  }
  const deletenote=(req,res)=>{
    const {id}=req.body
    const notes =  Note.find({_id:id});
    if(notes.length>=0)
    {
       const result=Note.findByIdAndDelete(id);
       res.send({delete:true,result})
    }
    else
    {
        res.send({delete:false,"message":"no record "})
    }
   
  }

  module.exports={
    createnote,editnote,deletenote ,searchenote
  }