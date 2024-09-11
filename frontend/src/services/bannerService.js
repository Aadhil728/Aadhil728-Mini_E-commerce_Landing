// services/slider.js
import axiosInstance from "../axios.config";

export const fetchBannerData = async () => {
  try {
    const response = await axiosInstance.get("/banner");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching the banner data:", error);
    throw error;
  }
};
