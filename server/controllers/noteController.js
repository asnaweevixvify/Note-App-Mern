const Note = require('../models/Note')

module.exports.create = (req,res)=>{
    const data = req.body
    Note.create(data)
    .then(()=>res.json({msg:'create complete ✅'}))
    .catch((err)=>res.status(400).json('❌',{error:err}))
}

module.exports.getData = (req,res)=>{
    Note.find({})
    .then((data)=>res.json({data}))
    .catch((err)=>res.status(400).json('❌',{error:err}))
}