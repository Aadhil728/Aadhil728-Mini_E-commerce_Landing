// services/slider.js
import axiosInstance from "../axios.config";

const API_ENDPOINT = `/blogs`;

export const fetchBlogsData = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINT);
    return response.data.data; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching the blogs data:", error);
    throw error;
  }
};
