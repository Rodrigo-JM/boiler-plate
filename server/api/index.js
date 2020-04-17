<<<<<<< HEAD
const router = require('express').Router();

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });
  
  module.exports = router
=======
const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
>>>>>>> ed27ccb20ee1d10d35ed0264d74445b43188343c
