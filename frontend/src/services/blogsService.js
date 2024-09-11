// services/slider.js
import { blogsData } from "../data";

export const fetchBlogsData = async () => {
  try {
    return blogsData;
  } catch (error) {
    console.error("Error fetching the blogs data:", error);
    throw error;
  }
};
