"use strict";

module.exports = function (app) {
  var userHandlers = require("../controllers/userController");

  app.route("/users").get(userHandlers.loginRequired, userHandlers.listAllUsers).post(userHandlers.loginRequired, userHandlers.createNewUsers);

  app.route("/users/:id").get(userHandlers.loginRequired, userHandlers.getUser).put(userHandlers.loginRequired, userHandlers.updateUser).delete(userHandlers.loginRequired, userHandlers.deleteUser);

  app.route("/auth/register").post(userHandlers.register);

  app.route("/auth/sign_in").post(userHandlers.signIn);

  app.route("/auth/whoami").get(userHandlers.whoami);
};
