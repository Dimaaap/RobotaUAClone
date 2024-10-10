import { CitiesByRegionsContainer, JobsearchCategory, CartCities } from "../../../../components";

export default function RegionsJobsearch () {
    return (
        <div className="w-full h-full p-0 m-0">
                <JobsearchCategory />
                <CartCities /> 
                <CitiesByRegionsContainer />
        </div>
        
    )
}