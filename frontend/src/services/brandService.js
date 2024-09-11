// services/slider.js
import { brandsData } from "../data";

export const fetchBrandsData = async () => {
  try {
    return brandsData;
  } catch (error) {
    console.error("Error fetching the brands data:", error);
    throw error;
  }
};
