var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Show all bootcamps'
    })
})

router.post('/', (req, res) => {
    res.status(201).json({
        success: true,
        message: 'create new bootcamp'
    })
})

router.put('/:id', (req, res) => {
    const itemId = req.params.id;
    console.log(itemId);
    res.status(200).json({
        success: true,
        message: `Bootcamp update for ${itemId}`
    })
})

router.delete('/:id', (req, res) => {
    const itemId = req.params.id;
    console.log(itemId);
    res.status(200).json({
        success: true,
        message: `Bootcamp delete for ${itemId}`
    })
})

module.exports = router;