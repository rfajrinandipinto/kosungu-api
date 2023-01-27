const User = require("../models/userModel");

(jwt = require("jsonwebtoken")), (bcrypt = require("bcryptjs"));

exports.listAllUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.createNewUsers = (req, res) => {
  let newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).json(user);
  });
};

exports.getUser = (req, res) => {
  User.find({ _id: req.params.id }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).json(user);
  });
};

exports.deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      return res.status(404).send(err);
    }
    res.status(200).json({ message: "User successfully deleted" });
  });
};

exports.register = (req, res) => {
  let newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
    }
    user.hash_password = undefined;
    res.status(201).json(user);
  });
};

exports.signIn = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    (err, user) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized user!" });
      }
      if (!user) {
        res.status(401).json({ message: "Authentication failed. User not found." });
      } else if (user) {
        if (!user.comparePassword(req.body.password)) {
          res.status(401).json({ message: "Authentication failed. Wrong password." });
        } else {
          res.json({ token: jwt.sign({ email: user.email, nama: user.nama, _id: user._id }, "RESTfulAPIs"), nama: user.nama });
        }
      }
    }
  );
};

exports.loginRequired = (req, res, next) => {
  if (req.user) {
    res.json({ message: "Authorized User, Action Successful!" });
  } else {
    res.status(401).json({ message: "Unauthorized user!" });
  }
};

exports.whoami = (req, res, next) => {
  if (req.user) {
    res.json(req.user);
  } else {
    res.status(401).json({ message: "Unauthorized user!" });
  }
};
