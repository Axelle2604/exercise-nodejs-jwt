const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/info', (req, res) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      console.log(err, user);
      return res.status(400).json({
        message: 'Something is not right',
        user: user,
      });
    }
  })(req, res);
  res.json({ resp: 'ok' });
});

module.exports = router;
