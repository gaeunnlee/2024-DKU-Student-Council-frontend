import { create } from 'zustand';

interface EnrollmentState {
   enrollment: boolean | null;
   setEnrollment: (data: boolean | null) => void;
}

export const useEnrollmentStore = create<EnrollmentState>((set) => ({
   enrollment: null,
   setEnrollment: (data: boolean | null) => {
      set({ enrollment: data });
   },
}));
