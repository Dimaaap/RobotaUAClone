import { create } from "zustand";

export const useChooseLocationOpen = create((set) => ({
    chooseLocationOpen: false,
    toggleChooseLocationOpen: () => 
        set((state) => ({ chooseLocationOpen: !state.chooseLocationOpen }))
}))