const {create,getData,deleteItem,getOldData,editItem} = require('../controllers/noteController')
const {createUser,login,requireLogin} = require('../controllers/userController')
const express = require('express')
const router = express.Router()

router.post('/create',requireLogin,create)
router.get('/getData',getData)
router.delete('/deleteItem/:id',requireLogin,deleteItem)
router.get('/getOldData/:id',requireLogin,getOldData)
router.put('/editItem/:id',requireLogin,editItem)

router.post('/createUser',createUser)
router.get('/login',login)


module.exports = router