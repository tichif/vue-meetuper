const User = require('../models/users');
const passport = require('passport');

exports.getUsers = function(req, res) {
  User.find({}).exec((errors, users) => {
    if (errors) {
      return res.status(422).send({ errors });
    }

    return res.json(users);
  });
};

exports.register = function(req, res) {
  const registerData = req.body;

  // check if exists email
  if (!registerData.email) {
    return status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  // check if exists password
  if (!registerData.password) {
    return status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  // check if password match with confirmPassword
  if (registerData.password !== registerData.passwordConfirmation) {
    return status(422).json({
      errors: {
        password: 'is not the same with confirmation password'
      }
    });
  }

  // create users
  const user = new User(registerData);
  return user.save((errors, saveUser) => {
    if (errors) {
      return res.status(422);
    }
    return res.json(saveUser);
  });
};

exports.login = function(req, res, next) {
  const { email, password } = req.body;

  // check if exists email
  if (!email) {
    return status(422).json({
      errors: {
        email: 'is required'
      }
    });
  }

  // check if exists password
  if (!password) {
    return status(422).json({
      errors: {
        password: 'is required'
      }
    });
  }

  return passport.authenticate('local', (err, passportUser) => {
    if (err) {
      return next(err);
    }

    if (passportUser) {
      req.login(passportUser, function(err) {
        if (err) {
          return next(err);
        }
        return res.json(passportUser);
      });
    } else {
      return status(422).json({
        errors: {
          authentication: 'Ooops, something went wrong!!!'
        }
      });
    }
  })(req, res, next);
};

exports.logout = function(req, res) {
  req.logout();

  return res.json({
    status: 'Session destroyed'
  });
};
