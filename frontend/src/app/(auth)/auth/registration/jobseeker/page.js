import { JobseekerRegistrationForm, UserAuthHeader, NoticeInfo } from "../../../../../components"

const JobseekerAuthPage = () => {
    return(
        <div className="bg-gray-100 min-h-screen px-5 py-10">
            <UserAuthHeader />
            <JobseekerRegistrationForm />
            <NoticeInfo />
        </div>
    )
}

export default JobseekerAuthPage