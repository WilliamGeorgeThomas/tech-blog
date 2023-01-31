const router = require('express').Router();

const apiRoutes = require('./api');
const postRoutes = require('./post-routes');

router.use('/post', postRoutes);


module.exports = router;