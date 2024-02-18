import { create } from 'zustand';

interface MenuState {
   menuOpen: boolean;
   setMenuOpen: (menuOpen: boolean) => void;
}

export const menuStore = create<MenuState>((set) => ({
   menuOpen: false,
   setMenuOpen: (menuOpen) => set({ menuOpen }),
}));
