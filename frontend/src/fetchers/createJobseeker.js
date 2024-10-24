const CREATE_JOBSEEKER_URL = "http://127.0.0.1:8000/api/auth/register/jobseeker"

export async function createJobseekerHandler(req) {
    const response = await fetch(CREATE_JOBSEEKER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        credentials: 'include'
    })
    if(!response.ok){
        throw new Error("Failed to create a new jobseeker")
    }
    const data = await response.json();
    localStorage.setItem("accessToken", data.tokens.access);
    localStorage.setItem("refreshToken", data.tokens.refresh)
    return data
}