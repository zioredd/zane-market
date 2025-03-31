import axios from "axios";

const API_BASE_URL = "http://localhost:3000";

export const getProducts = async () => {
  const response = await axios.get(`${API_BASE_URL}/products`);
  return response.data;
};

console.log("API_BASE_URL", API_BASE_URL);
console.log("getProducts", getProducts);

// export const getProduct = async (id: string) => {
//   const response = await axios.get(`${API_BASE_URL}/${id}`);
//   return response.data;
// };

// export const createProduct = async (productData: any) => {
//   const response = await axios.post(API_BASE_URL, productData);
//   return response.data;
// };

// export const updateProduct = async (id: string, updatedData: any) => {
//   const response = await axios.put(`${API_BASE_URL}/${id}`, updatedData);
//   return response.data;
// };

// export const deleteProduct = async (id: string) => {
//   return axios.delete(`${API_BASE_URL}/${id}`);
// };
