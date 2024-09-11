// services/slider.js
import { heroSliderData } from "../data";

export const fetchSliderData = async () => {
  try {
    return heroSliderData;
  } catch (error) {
    console.error("Error fetching the slider data:", error);
    throw error;
  }
};
