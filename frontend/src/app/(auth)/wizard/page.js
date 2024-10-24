"use client"

import { useEffect } from "react";
import { AuthUserHeader } from "../../../components/shared";
import { useRouter } from "next/navigation"
import { useUser } from "../../../store";

const CVWizardPage = () => {

    const { push } = useRouter();
    const setAuth = useUser((state) => state.setAuth)

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const refreshToken = localStorage.getItem('refreshToken');
        
        if (accessToken && refreshToken) {
            setAuth(true);
        } else {
            push('/auth/registration');
        }
    }, [setAuth]);

    return (
        <div className="p-0 m-0 w-full">
          <AuthUserHeader />  
        </div>
    )
}

export default CVWizardPage;