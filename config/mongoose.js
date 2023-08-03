const mongoose = require("mongoose");

mongoose.connect(
  'mongodb+srv://niteshkumarranjan534:nitesh123@cluster0.xnngdvj.mongodb.net/csv'
);

const db = mongoose.connection;

db.once("open", function () {
  console.log("database connected to the server successfully!");
});

module.exports = db;
