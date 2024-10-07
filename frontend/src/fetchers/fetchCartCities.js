const CART_CITIES_BACKEND_URL = "http://127.0.0.1:8000/api/v1/cities/carts-cities";

export async function getCartCities() {
    const res = await fetch(CART_CITIES_BACKEND_URL);
    if(!res.ok){
        throw new Error("Failed to get cart cities");
    }
    return res.json();
}