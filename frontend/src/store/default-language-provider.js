import { create } from "zustand";

export const useDefaultLanguageStore = create((set) => ({
    language: "Українська",
    setLanguage : (newLanguage) => set({ language: newLanguage })
}))