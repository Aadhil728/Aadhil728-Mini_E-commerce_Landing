const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const MONGO_URI =
      "mongodb+srv://aara0728:Aara%400728@aarashop.ipm8zar.mongodb.net/mini-ecommerce";
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Adjust timeout
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    throw err;
  }
};

module.exports = connectDatabase;
