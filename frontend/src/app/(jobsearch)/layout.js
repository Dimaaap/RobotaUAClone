import { JobsearchHeader } from "../../components";

export default function JobsearchLayout({ children }) {
    return (
        <div className="">
          <JobsearchHeader />
          { children }
        </div>
    );
  }