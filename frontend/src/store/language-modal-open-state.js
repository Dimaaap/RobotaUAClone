import { create } from "zustand";

export const useLanguageOpen = create((set) => ({
    chooseLanguageOpen: false,
    toggleChooseLanguageOpen: () =>
      set((state) => ({ chooseLanguageOpen: !state.chooseLanguageOpen })),
    closeChooseLanguageOpen: () => set({ chooseLanguageOpen: false })
  }));