var express = require('express');
const { getBootcamps, getBootcamp, createBootcamp, updateBootcamp, deleteBootcamp } = require('../controllers/bootcamps');
var router = express.Router();

// router.get('/', getBootcamps);

// router.post('/', createBootcamp);

// router.get('/:id', getBootcamp);

// router.put('/:id', updateBootcamp);

// router.delete('/:id', deleteBootcamp);


router
    .route('/')
    .get(getBootcamps)
    .post(createBootcamp)

router
    .route('/:id')
    .get(getBootcamp)
    .put(updateBootcamp)
    .delete(deleteBootcamp)


module.exports = router;