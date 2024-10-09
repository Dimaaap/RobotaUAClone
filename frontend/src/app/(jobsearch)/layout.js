import { JobsearchHeader, JobsearchCategory, CartCities, Footer } from "../../components";

export default function JobsearchLayout({ children }) {
    return (
        <div className="">
          <JobsearchHeader />
          <JobsearchCategory />
          <div className="bg-gray-100 w-full min-h-screen 
            py-4">
               <CartCities /> 
               { children }
          </div>
          <Footer />
        </div>
    );
  }