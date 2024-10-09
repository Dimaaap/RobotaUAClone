const TOP_CITIES_BACKEND_URL = "http://127.0.0.1:8000/api/v1/top-cities"

export async function getTopCities() {
    const res = await fetch(TOP_CITIES_BACKEND_URL);
    if(!res.ok){
        throw new Error("Failed to fetch data")
    }
    return res.json();
}