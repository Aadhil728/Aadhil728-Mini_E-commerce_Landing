const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/connectDB");

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(
  cors({
    origin: ["https://aadhil728-mini-e-commerce-landing.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Mini E-commerce API!");
});

// Connect to the database and then start the server
const startServer = async () => {
  try {
    await connectDatabase(); // Ensure DB is connected before starting the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to database:", error);
    process.exit(1); // Exit if DB connection fails
  }
};

startServer();
