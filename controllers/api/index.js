const router = require('express').Router();
const petImgRoutes = require('./petImgRoutes');
const userRoutes = require('./userRoutes');


router.use('', petImgRoutes)
router.use('', userRoutes)
router.use('', )

module.exports = router;