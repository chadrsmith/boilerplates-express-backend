const router = require('express').Router();

router.get('/', (req, res) => {
  res.send(`
    <div style="display: flex; justify-content: center; align-items: center; text-align: center; padding-top: 10%;">
      <p style="font-family:Helvetica Neue, Helvetica, Arial, sans-serif; font-weight:100; font-size: 2em; ">
        🗣 Welcome to my express API.
      </p>
    </div>
    <div style="margin: auto; text-align: center;">
      <p style="font-family:Helvetica Neue, Helvetica, Arial, sans-serif; font-weight:100; font-size: 1.1em; ">
        You might not find what you are looking for here...
      </p>
    </div>
    `)
});

router.use('/health', [
  require('./health')
])

router.use('/', [
  require('./no-auth/create-account.route')
])


module.exports = router;