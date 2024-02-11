import { create } from 'zustand';
import { persist } from 'zustand/middleware';
const StorageKey = 'storage-key';

interface EnrollmentState {
   enrollment: boolean | undefined;
   setEnrollment: (data: boolean | undefined) => void;
}

export const useEnrollmentStore = create(
   persist<EnrollmentState>(
      (set) => ({
         enrollment: undefined,
         setEnrollment: (data: boolean | undefined) => {
            set({ enrollment: data });
         },
      }),
      {
         name: StorageKey,
      },
   ),
);
