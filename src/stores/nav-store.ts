import { create } from 'zustand';

interface NavState {
   fullscreen: boolean;
   setFullscreen: (fullscreen: boolean) => void;
}

export const navStore = create<NavState>((set) => ({
   fullscreen: false,
   setFullscreen: (fullscreen) => set({ fullscreen }),
}));
