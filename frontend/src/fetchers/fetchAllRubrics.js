const ALL_RUBRICS_BACKEND_URL = "http://127.0.0.1:8000/api/v1/profession-rubrics"

export async function getAllRubrics() {
    const res = await fetch(ALL_RUBRICS_BACKEND_URL);
    if(!res.ok){
        throw new Error("Failed to get rubrics");
    }
    return res.json();
}