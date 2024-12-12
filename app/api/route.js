export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getProducts = async () => {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) throw new Error("Error! status: ", res.status, res.statusText);

    const data = await res.json();
    console.log("Response: ", data);

    return data.products;
  } catch (error) {
    console.error("Error getting products", error);
  }
};

export const getProductById = async ({ id }) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);

    if (!res.ok) throw new Error("Error! status: ", res.status, res.statusText);

    const data = await res.json();

    console.log("Get product by id response: ", data);

    return data;
  } catch (error) {
    console.error("Error getting product by id", error);
  }
};
