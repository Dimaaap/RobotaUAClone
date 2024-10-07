import { CartCities, JobsearchCategory } from "../../../../components"


export default function CitiesJobsearch () {
    return (
        <div className="w-full h-full p-0 m-0">
            <JobsearchCategory />
            <div className="bg-gray-100 w-full min-h-screen 
            py-4">
               <CartCities /> 
            </div>
            
        </div>
    )
}