// services/slider.js
import { latestProductsData } from "../data";

export const fetchProductsData = async () => {
  try {
    return latestProductsData;
  } catch (error) {
    console.error("Error fetching the banner data:", error);
    throw error;
  }
};

export const fetchLatestProducts = async () => {
  try {
    return latestProductsData;
  } catch (error) {
    console.error("Error fetching the banner data:", error);
    throw error;
  }
};
