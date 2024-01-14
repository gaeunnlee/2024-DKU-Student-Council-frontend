import { create } from 'zustand';

export interface GnhState {
   heading: string | null;
   setHeading: (heading: string | null) => void;
   subHeading: string | null;
   setSubHeading: (subHeading: string | null) => void;
   rounded: boolean;
   setRounded: (rounded: boolean) => void;
}

export const gnhState = create<GnhState>((set) => ({
   heading: null,
   setHeading: (heading: string | null) => set({ heading }),
   subHeading: null,
   setSubHeading: (subHeading: string | null) => set({ subHeading }),
   rounded: false,
   setRounded: (rounded: boolean) => set({ rounded }),
}));
