import {create} from "zustand";

export const useUser = create((set) => ({
    isAuthenticated: false,
    user: null,
    setAuth: (authState, userData) => set({ isAuthenticated: authState, user: userData }),
    logout: () => set({ isAuthenticated: false, user: null }) 
}))