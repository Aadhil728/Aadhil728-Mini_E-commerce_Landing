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

// Use the cors middleware
app.use(
  cors({
    origin: ["https://aadhil728-mini-e-commerce-landing.vercel.app"],
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

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server is running on port ${process.env.PORT} in ${process.env.NODE_ENV}`
  );
  databaseConnection();
});
