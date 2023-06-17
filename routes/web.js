const express = require('express')
const contactus = require('../Controllers/contactus')
const router = express.Router()

const homecomp = require('../Controllers/homecomp')

router.get('/', homecomp)
router.post('/contactus',contactus)


module.exports = router