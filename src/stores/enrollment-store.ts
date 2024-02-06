import { create } from 'zustand';

interface EnrollmentState {
   enrollment: boolean;
   setEnrollment: (data: boolean) => void;
}

export const useEnrollmentStore = create<EnrollmentState>((set) => ({
   enrollment: false,
   setEnrollment: (data: boolean) => {
      set({ enrollment: data });
   },
}));
