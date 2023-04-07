const router = require('express').Router();
const userRoutes = require('./userRoutes');
const groceryRoutes = require('./groceryRouts');

router.use('/users', userRoutes);
router.use('/groceries', groceryRoutes);

module.exports = router;

