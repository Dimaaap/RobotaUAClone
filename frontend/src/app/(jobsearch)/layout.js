import { JobsearchHeader, Footer } from "../../components";

export default function JobsearchLayout({ children }) {
    return (
        <div className="">
          <JobsearchHeader />
          <div className="bg-gray-100 w-full min-h-screen 
            py-4">
               { children }
          </div>
          <Footer />
        </div>
    );
  }