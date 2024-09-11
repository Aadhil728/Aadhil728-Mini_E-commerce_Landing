// services/slider.js
import { bannerData } from "../data";

export const fetchBannerData = async () => {
  try {
    return bannerData;
  } catch (error) {
    console.error("Error fetching the banner data:", error);
    throw error;
  }
};
