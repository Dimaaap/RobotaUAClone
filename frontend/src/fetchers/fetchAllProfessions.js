const ALL_PROFESSIONS_BACKEND_URL = "http://127.0.0.1:8000/api/v1/professions";

export async function getAllProfessions() {
    const res = await fetch(ALL_PROFESSIONS_BACKEND_URL);
    if(!res.ok) {
        throw new Error("Failed to fetch professions", error)
    }
    return res.json();
}