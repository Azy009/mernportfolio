const express = require('express')
const contactus = require('../Controllers/contactus')
const multer = require('multer');
const router = express.Router()

const homecomp = require('../Controllers/homecomp')
const upload = multer();

router.get('/', homecomp)
router.post('/contactus',upload.none(),contactus)


module.exports = router