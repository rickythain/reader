import axios from 'axios';

// global vars
const API_BACKEND_URL = "http://localhost:5000";

export const getBooks = async () => {
  try {
    const response = await axios.get(`${API_BACKEND_URL}/books`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving books:", error);
    throw error;
  }
};