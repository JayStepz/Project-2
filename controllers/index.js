const router = require('express').Router();

const apiRoutes = require('./api');
const siteRoute = require('./siteRoute');

router.use('/', siteRoute);
router.use('/api', apiRoutes);

module.exports = router;