import { ROUTES } from '@constants/route';
import { useAuth } from '@hooks/useAuth';
import { IWithReactChildren } from '@shared/interfaces/default-interfaces';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }: IWithReactChildren) {
   const { isLoggedIn } = useAuth();

   return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace={true} />;
}
