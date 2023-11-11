import { create } from 'zustand'

export const useMenuStore = create((set) => ({
  activeStyleState: 'addActive',
  setActiveStyleState: (activeStyleState) => set({activeStyleState})
}))
