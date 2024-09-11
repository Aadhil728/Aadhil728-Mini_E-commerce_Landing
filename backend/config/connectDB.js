const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => console.log("MongoDB Connected at " + con.connection.host))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = connectDatabase;
