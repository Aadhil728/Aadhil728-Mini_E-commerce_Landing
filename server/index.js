const express = require("express");
const cors = require("cors");
const connectDatabase = require("./config/connectDB");

const app = express();
const PORT = 5000;

//middleware
app.use(
  cors({
    origin: ["https://aadhil728-mini-e-commerce-landing.vercel.app"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/", (req, res) => {
  res.send("Welcome to the Mini E-commerce API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDatabase();
});
