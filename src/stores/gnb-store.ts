import { create } from 'zustand';

interface GnbState {
   title: string | null;
   setTitle: (title: string | null) => void;
   backButton: boolean;
   setBackButton: (backButton: boolean) => void;
}

export const gnbState = create<GnbState>((set) => ({
   title: null,
   setTitle: (title: string | null) => set({ title }),
   backButton: false,
   setBackButton: (backButton: boolean) => set({ backButton }),
}));
