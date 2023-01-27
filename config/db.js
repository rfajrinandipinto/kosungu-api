const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

var uri = "mongodb+srv://kosungu-admin:kosunguadmin@kosungu-db.tur2dzg.mongodb.net/?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(uri, options).then(
  () => {
    console.log("Database connection established!");
  },
  (err) => {
    {
      console.log("Error connecting Database instance due to:", err);
    }
  }
);
