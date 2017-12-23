const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

module.exports = (app) => {
  app.post('/api/addcredits', requireLogin, async (req,res) => {
    req.user.credits +=5;
    const user = await req.user.save();
    res.send(user);
  })
};
