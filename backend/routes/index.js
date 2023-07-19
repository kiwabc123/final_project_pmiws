const router = require('express').Router()
// const { authenticated, authenticatedAdmin } = require('../configs/security')


const image = require('./image/image')
const product = require('./product/product')
const supplier =require('./supplier/supplier')




router.use('/image',image)
router.use('/product',product)
router.use('/supplier',supplier)

module.exports = router;
