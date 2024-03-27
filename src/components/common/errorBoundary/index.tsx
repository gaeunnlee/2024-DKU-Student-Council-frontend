import { ErrorProps } from '@components/errorFallback';
import { AxiosError } from 'axios';
import React, { Component, ComponentType } from 'react';

import HTTPError from '@/types/statusError';

export interface ErrorBoundaryProps {
   Fallback: ComponentType<ErrorProps>;
   onReset?: (error: Error | HTTPError) => void;
}

export interface ErrorBoundaryState {
   hasError: boolean;
   error: Error | HTTPError | null;
}

const initialState: ErrorBoundaryState = {
   hasError: false,
   error: null,
};

class ErrorBoundary extends Component<React.PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
   state: ErrorBoundaryState = initialState;

   static getDerivedStateFromError(error: Error | HTTPError): ErrorBoundaryState {
      return { hasError: true, error };
   }

   public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error(error, errorInfo);
   }

   resetErrorBoundary = () => {
      const { onReset } = this.props;
      const { error } = this.state;

      onReset?.(error!);
      this.setState(initialState);
   };

   render() {
      const { Fallback, children } = this.props;
      const { error } = this.state;

      if (error && error instanceof AxiosError) {
         return <Fallback statusCode={error.response?.status} resetError={this.resetErrorBoundary} />;
      }
      return children;
   }
}

export default ErrorBoundary;
