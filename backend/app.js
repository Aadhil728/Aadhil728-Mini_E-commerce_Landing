const express = require("express");
const app = express();
const dotenv = require("dotenv");

const path = require("path");
const databaseConnection = require("./config/connectDB");
dotenv.config({ path: path.join(__dirname, "config", "config.env") });
const cors = require("cors");

//route imports
const auth = require("./routes/auth");
const products = require("./routes/product");
const orders = require("./routes/order");
const heroSlider = require("./routes/heroSlider");
const banner = require("./routes/banner");
const blogs = require("./routes/blogs");
const brands = require("./routes/brands");

databaseConnection();

// Use the cors middleware
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json());

// Use the auth routes
app.use("/api/v1/auth", auth);
// Use the product routes
app.use("/api/v1/", products);
// Use the order routes
app.use("/api/v1/", orders);
// Use the heroSlider routes
app.use("/api/v1/", heroSlider);
// Use the banner routes
app.use("/api/v1/", banner);
// Use the blogs routes
app.use("/api/v1/", blogs);
// Use the brands routes
app.use("/api/v1/", brands);

// Serve static files from the 'images' directory
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", (res, req) => {
  res.send("Welcome to Api");
});

// handling middleware to catch any unhandled routes
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack); // Log the full error stack to see the issue
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});

// app.listen(process.env.PORT, () => {
//   console.log(
//     `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`
//   );
// });
