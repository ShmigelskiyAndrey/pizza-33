import axios from "axios";

export const fetchProductsApi = () => {
  return axios.get("/api/products");
};

export const fetchProductByIdApi = (id: string | number) => {
  return axios.get(`/api/products/${id}`);
};
