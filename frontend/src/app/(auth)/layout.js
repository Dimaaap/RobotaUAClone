import { AuthHeader } from "../../components"

export default function AuthLayout({ children }) {
    return (
        <div className="bg-gray-100 px-10 py-5
        min-h-screen">
          { children }
        </div>
    );
  }