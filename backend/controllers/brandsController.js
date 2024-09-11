exports.getBrandsData = async (req, res, next) => {
  try {
    const products = await brandModel.find({});
    res.json({
      success: true,
      message: "Brands fetched successfully",
      data: products,
    });
  } catch (error) {
    console.error("Error fetching brands:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch brands",
    });
  }
};
