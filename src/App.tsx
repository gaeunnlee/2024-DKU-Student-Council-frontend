// import ErrorBoundary from '@components/common/errorBoundary';
// import Error from '@components/errorFallback';
import ModalProvider from '@components/ui/modal/modal-provider';
// import { useResetError } from '@hooks/useResetErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 1,
      },
   },
});

export default function App() {
   // const { handleErrorReset } = useResetError();

   return (
      <QueryClientProvider client={queryClient}>
         <ModalProvider>
            {/* <ErrorBoundary Fallback={Error} onReset={handleErrorReset}> */}
            <Suspense>
               <Outlet />
            </Suspense>
            {/* </ErrorBoundary> */}
         </ModalProvider>
      </QueryClientProvider>
   );
}
