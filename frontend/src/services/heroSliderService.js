// services/slider.js
import axiosInstance from "../axios.config";

const API_ENDPOINT = `/hero-slider`;

export const fetchSliderData = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT);
    return response.data.data; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching the slider data:", error);
    throw error;
  }
};
