import { create } from 'zustand';

interface GnbState {
   title: string;
   setTitle: (title: string) => void;
   backButton: boolean;
   setBackButton: (backButton: boolean) => void;
}

export const gnbState = create<GnbState>((set) => ({
   title: '',
   setTitle: (title: string) => set({ title }),
   backButton: false,
   setBackButton: (backButton: boolean) => set({ backButton }),
}));
