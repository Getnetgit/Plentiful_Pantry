const router = require('express').Router();
const userRoutes = require('./userRoutes');
//const groceryRoutes = require('./groceryRoutes');

router.use('/users', userRoutes);
//router.use('/grocery', groceryRoutes);

module.exports = router;
