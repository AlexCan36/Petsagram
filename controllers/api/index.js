const router = require('express').Router();
const petImgRoutes = require('./petImgRoutes');
const userRoutes = require('./userRoutes');


router.use('/petimg', petImgRoutes)
router.use('/users', userRoutes)

module.exports = router;