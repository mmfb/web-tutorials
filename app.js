var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

var app = express();


/**
 * Session Configuration (New!)
 */


 const session = {
    secret: process.env.SESSION_SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: false
  };
  
  if (app.get("env") === "production") {
    // Serve secure cookies, requires HTTPS
    session.cookie.secure = true;
  }

/**
 * Passport Configuration (New!)
 */


 const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      /**
       * Access tokens are used to authorize users to an API
       * (resource server)
       * accessToken is the token to call the Auth0 API
       * or a secured third-party API
       * extraParams.id_token has the JSON Web Token
       * profile has all the information from the user
       */
      return done(null, profile);
    }
  );


/**
 *  App Configuration
 */
 

 app.use(expressSession(session));

 passport.use(strategy);
 app.use(passport.initialize());
 app.use(passport.session());


 passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((user, done) => {
    done(null, user);
  });


const secured = (req, res, next) => {
    if (req.user) {
      return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/auth/login");
  };  


var usersRouter = require('./routes/usersRoutes');
var authRouter = require('./routes/authRoutes');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/private', secured);
app.use('/private',express.static(path.join(__dirname, 'private')));

app.use('/auth', authRouter);

app.use('/api/users', usersRouter);

module.exports = app;
