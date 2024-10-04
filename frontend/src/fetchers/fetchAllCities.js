const ALL_CITIES_BACKEND_URL = "http://localhost:8000/api/v1/cities/";

export async function getAllCities() {
    const res = await fetch(ALL_CITIES_BACKEND_URL);
    if(!res.ok){
        throw new Error("Failed to get all cities")
    }
    return res.json();
}