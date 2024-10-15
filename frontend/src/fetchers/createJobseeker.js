const CREATE_JOBSEEKER_URL = "https://127.0.0.1:800/api/auth/register/jobseeker"

export async function createJobseekerHandler(req) {
    const response = await fetch(CREATE_JOBSEEKER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body)
    })
    if(!response.ok){
        throw new Error("Failed to create a new jobseeker")
    }
    return response.json();
}