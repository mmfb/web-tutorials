var express = require('express');
var router = express.Router();
var uModel = require("../models/usersModel")
const passport = require("passport");
const querystring = require("querystring");

router.get('/login',
  passport.authenticate("auth0", {
    scope: "openid email profile"
  }),
  function(req, res, next) {
    res.redirect("/private/pInit.html"); 
});


router.get("/callback", function (req, res, next) {
    passport.authenticate("auth0", function (err, user, info) {
      if (err) {
        return next(err);
      }
      if (!user) {
        return res.redirect("/auth/login");
      }
      req.logIn(user, function (err) {
        if (err) {
          return next(err);
        }
        const returnTo = req.session.returnTo;
        delete req.session.returnTo;
        res.redirect(returnTo || "/");
      });
    })(req, res, next);
  });


router.get("/logout", function (req, res) {
    req.logOut();
  
    let returnTo = req.protocol + "://" + req.hostname;
    const port = req.socket.localPort;
    if (port !== undefined && port !== 80 && port !== 443) {
      returnTo =
        process.env.NODE_ENV === "production"
          ? `${returnTo}/`
          : `${returnTo}:${port}/`;
    }
    const logoutURL = new URL(
      `https://${process.env.AUTH0_DOMAIN}/v2/logout`
    );
  
    const searchString = querystring.stringify({
      client_id: process.env.AUTH0_CLIENT_ID,
      returnTo: returnTo
    });
    logoutURL.search = searchString;
    res.redirect(logoutURL);
  });

  router.get("/user", function (req, res, next) {
    if (req.user) res.status(200).send(req.user);
    else res.status(401).send({msg:"User is not authenticated"})
});
  
module.exports = router;
