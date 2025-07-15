const Note = require('../models/Note')

module.exports.create = (req,res)=>{
    const data = req.body
    Note.create(data)
    .then(()=>res.json({msg:'create complete ✅'}))
    .catch((err)=>res.status(400).json({error:err}))
}

module.exports.getData = (req,res)=>{
    Note.find({})
    .then((data)=>res.json({data}))
    .catch((err)=>res.status(400).json({error:err}))
}

module.exports.deleteItem = (req,res)=>{
    const {id} = req.params
    Note.findOneAndDelete({_id:id})
    .then(()=>res.json({msg:'delete complete'}))
    .catch((err)=>res.status(400).json({error:err}))
}

module.exports.getOldData = (req,res)=>{
    const {id} = req.params
    Note.findOne({_id:id})
    .then((data)=>res.json({data}))
    .catch((err)=>res.status(400).json({error:err}))
}

module.exports.editItem = (req,res)=>{
    const {id} = req.params
    const data = req.body
    Note.findOneAndUpdate({_id:id},data)
    .then(()=>res.json({msg:'update complete'}))
    .catch((err)=>res.status(400).json({error:err}))
}