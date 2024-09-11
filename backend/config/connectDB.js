const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log("MongoDB Connected at " + con.connection.host))
    .catch((err) => console.log(err));
};

module.exports = connectDatabase;
