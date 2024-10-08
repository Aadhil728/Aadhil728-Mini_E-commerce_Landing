const mongoose = require("mongoose");

const blogsSchema = new mongoose.Schema({
  title: String,
  description: String,
  published: String,
  image: String,
});

const blogsModel = mongoose.model("blogs", blogsSchema);

module.exports = blogsModel;
