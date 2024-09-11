const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const databaseConnection = require("./dbConnect");

dotenv.config("./env");

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["https://aadhil728-mini-e-commerce-landing.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/", (req, res) => {
  res.send({ message: "Welcome to the Mini E-commerce API" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
  databaseConnection();
});
