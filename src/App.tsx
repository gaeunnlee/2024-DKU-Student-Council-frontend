import ErrorBoundary from '@components/common/errorBoundary';
import Error from '@components/errorFallback';
import ModalProvider from '@components/ui/modal/modal-provider';
import { Spinner } from '@components/ui/spinner/indext';
import { Toaster } from '@components/ui/toast/toaster';
import { useResetError } from '@hooks/useResetErrorBoundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from '@/Router';
const DefaultLayout = lazy(() => import('@components/layouts/DefaultLayout'));


const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         retry: 0,
         refetchOnWindowFocus: false,
         throwOnError: true,         
      },
   },
});

const App = () => {
   const { handleErrorReset } = useResetError();
   return (
      <QueryClientProvider client={queryClient}>
         <ModalProvider>
            <Toaster />
            <BrowserRouter>
               <ErrorBoundary onReset={handleErrorReset} Fallback={Error}>
                  <Suspense fallback={<Spinner />}>
                     <DefaultLayout>
                        <Router />
                     </DefaultLayout>
                  </Suspense>
               </ErrorBoundary>
            </BrowserRouter>
         </ModalProvider>
      </QueryClientProvider>
   );
};

export default App;