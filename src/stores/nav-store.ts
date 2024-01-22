import { create } from 'zustand';

interface NavState {
   fullscreen: boolean;
   setFullscreen: (fullscreen: boolean) => void;
   rounded: boolean;
   setRounded: (rounded: boolean) => void;
   margin: string;
   setMargin: (margin: string) => void;
}

export const navStore = create<NavState>((set) => ({
   fullscreen: false,
   setFullscreen: (fullscreen) => set({ fullscreen }),
   rounded: false,
   setRounded: (rounded: boolean) => set({ rounded }),
   margin: '',
   setMargin: (margin: string) => set({ margin }),
}));
