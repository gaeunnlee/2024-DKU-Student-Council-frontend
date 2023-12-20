import { create } from 'zustand';

export interface GnhState {
   heading: string | null;
   setHeading: (heading: string | null) => void;
   subHeading: string | null;
   setSubHeading: (subHeading: string | null) => void;
}

export const gnhState = create<GnhState>((set) => ({
   heading: null,
   setHeading: (heading: string | null) => set({ heading }),
   subHeading: null,
   setSubHeading: (subHeading: string | null) => set({ subHeading }),
}));
