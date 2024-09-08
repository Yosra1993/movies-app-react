import axios from "axios";

// Define the base URL of the API
const API_BASE_URL =
  "http://ec2-15-237-160-101.eu-west-3.compute.amazonaws.com:8828/kata";

// Create an Axios instance with default configurations
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Function to fetch movies by page
export const getMoviesByPage = async (page: number, size: number) => {
  try {
    const response = await apiClient.get(`/movies?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies by page:", error);
    throw error;
  }
};

// Function to fetch persons (actors or directors) by page
export const getPersonsByPage = async (page: number, size: number) => {
  try {
    const response = await apiClient.get(`/persons?page=${page}&size=${size}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching persons by page:", error);
    throw error;
  }
};

// Function to fetch a person by their ID
export const getPersonById = async (id: number) => {
  try {
    const response = await apiClient.get(`/persons/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching person by ID:", error);
    throw error;
  }
};
