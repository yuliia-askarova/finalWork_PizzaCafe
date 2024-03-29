const router = require('express').Router();
const Pizza = require('../../model/Pizza.js')


router.get('/', async (req, res) => {
    const pizza = await Pizza.find()
    
    return res.status(200).json(pizza)
})

module.exports = router;