// services/slider.js
import axiosInstance from "../axios.config";

const PRODUCTS_API_ENDPOINT = `/products`;
const LATEST_PRODUCTS_API_ENDPOINT = `/products/latest`;

export const fetchProductsData = async () => {
  try {
    const response = await axiosInstance.get(PRODUCTS_API_ENDPOINT);
    return response.data.data; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching the banner data:", error);
    throw error;
  }
};

export const fetchLatestProducts = async () => {
  try {
    const response = await axiosInstance.get(LATEST_PRODUCTS_API_ENDPOINT);
    return response.data.data; // Adjust based on your API response structure
  } catch (error) {
    console.error("Error fetching the banner data:", error);
    throw error;
  }
};
