const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { expressjwt: expressJWT } = require("express-jwt");

module.exports.createUser = (req,res)=>{
    const userData = req.body
    bcrypt.hash(userData.password,10,(err,hash)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        userData.password = hash
        User.create(userData)
        .then(()=>res.json({msg:'สร้างบัญชีสำเร็จ'}))
        .catch(()=>res.status(400).json({error:'username นี้ถูกใช้งานแล้ว'}))
    })
}

module.exports.login = (req,res)=>{
    const {username,password} = req.query
    User.findOne({username})
    .then((data)=>{
        if(data){
            const passwordDb = data.password
            const userId = data._id
            bcrypt.compare(password,passwordDb,(err,result)=>{
                if(err){
                    return res.status(400).json({error:err})
                }
                if(result){
                    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'1d'})
                    return res.json({msg:'เข้าสู่ระบบสำเร็จ',token,username,userId})
                }
                else{
                    return res.status(401).json({msg:'รหัสผ่านไม่ถูกต้อง'})
                }
            })
        }
        else{
            return res.status(401).json({msg:'ไม่พบชื่อผู้ใช้'})
        }
    })
    .catch((err)=>res.status(400).json({error:err}))
}

module.exports.requireLogin = expressJWT({
    secret: () => process.env.JWT_SECRET,
    algorithms:["HS256"],
    requestProperty:"auth"
})