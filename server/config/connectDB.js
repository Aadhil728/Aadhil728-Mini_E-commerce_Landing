const mongoose = require("mongoose");

const connectDatabase = () => {
  const MONGO_URI =
    "mongodb+srv://aara0728:Aara%400728@aarashop.ipm8zar.mongodb.net/mini-ecommerce";
  mongoose
    .connect(MONGO_URI)
    .then((con) => console.log("MongoDB Connected at " + con.connection.host))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
