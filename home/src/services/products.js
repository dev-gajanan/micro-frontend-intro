const API_PATH = "http://localhost:8080";

export const getProducts = () => 
    fetch(`${API_PATH}/products`).then((res) => res.json());

export const getProductById = (id) => 
    fetch(`${API_PATH}/products/${id}`).then((res) => res.json());

export const currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
})