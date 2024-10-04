import { create } from "zustand";

export const useAllCitiesStore = create((set) => ({
    allCities: [],
    setAllCities: (cities) => set({ allCities: cities })
}))