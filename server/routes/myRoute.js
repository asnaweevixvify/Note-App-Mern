const {create,getData} = require('../controllers/noteController')
const express = require('express')
const router = express.Router()

router.post('/create',create)
router.get('/getData',getData)

module.exports = router