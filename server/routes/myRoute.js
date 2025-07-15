const {create,getData,deleteItem,getOldData,editItem} = require('../controllers/noteController')
const express = require('express')
const router = express.Router()

router.post('/create',create)
router.get('/getData',getData)
router.delete('/deleteItem/:id',deleteItem)
router.get('/getOldData/:id',getOldData)
router.put('/editItem/:id',editItem)


module.exports = router