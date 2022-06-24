const router = require('express').Router();
const petImgRoutes = require('./petImgRoutes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/post', postRoutes);
router.use('/petimg', petImgRoutes);
router.use('/users', userRoutes);

module.exports = router;