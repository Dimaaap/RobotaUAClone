import { CartCities, CitiesByTitleContainer, Footer, JobsearchCategory } from "../../../../components"


export default function CitiesJobsearch () {
    return (
        <div className="w-full h-full p-0 m-0">
                <JobsearchCategory />
                <CartCities /> 
                <CitiesByTitleContainer />
        </div>
    )
}