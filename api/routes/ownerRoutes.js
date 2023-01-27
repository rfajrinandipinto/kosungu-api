"use strict";

module.exports = function (app) {
  var owner = require("../controllers/ownerController");

  app.route("/owners").get(owner.listAllOwners).post(owner.createNewOwners);

  app.route("/owners/:id").get(owner.getOwner).put(owner.updateOwner).delete(owner.deleteOwner);
};
