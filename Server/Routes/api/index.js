const router = require('express').Router()
const pizzaRouter = require('./pizza.js')
router.use('/pizza', pizzaRouter)
module.exports = router;