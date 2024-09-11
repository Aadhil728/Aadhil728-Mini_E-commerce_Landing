const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const MONGO_URI =
      "mongodb+srv://aara0728:Aara%400728@aarashop.ipm8zar.mongodb.net/mini-ecommerce";
    const con = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected at " + con.connection.host);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err; // Propagate the error so the server doesn't start if DB fails
  }
};

module.exports = connectDatabase;
