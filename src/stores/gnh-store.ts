import { create } from 'zustand';

export interface GnhState {
   heading: string | null;
   setHeading: (heading: string | null) => void;
   subHeading: string | null;
   setSubHeading: (subHeading: string | null) => void;
   headingStyle: string;
   setHeadingStyle: (headingStyle: string) => void;
   subHeadingStyle: string;
   setsubHeadingStyle: (subHeadingStyle: string) => void;
}

export const gnhState = create<GnhState>((set) => ({
   heading: null,
   setHeading: (heading: string | null) => set({ heading }),
   subHeading: null,
   setSubHeading: (subHeading: string | null) => set({ subHeading }),
   headingStyle: '',
   setHeadingStyle: (headingStyle: string) => set({ headingStyle }),
   subHeadingStyle: '',
   setsubHeadingStyle: (subHeadingStyle: string) => set({ subHeadingStyle }),
}));
