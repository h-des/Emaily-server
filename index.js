const express = require('express');
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/user');
require('./services/passport');

const app = express();
const port = process.env.PORT || 3030;

app.use(
  cookieSession({
    // maxAge - 30 days 
    maxAge: 30*24*60*60*1000,
    keys: [keys.cookieKey],
  })
);
//passport middleware to make sure we're logged in
app.use(passport.initialize());
app.use(passport.session()); 

mongoose.connect(keys.mongoURI, {useMongoClient: true});
authRoutes(app); // or 'require('./routes/authRoutes')'
billingRoutes(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

