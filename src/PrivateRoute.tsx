import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { IWithReactChildren } from 'shared/interfaces/default-interfaces';
import { Navigate } from 'react-router-dom';
import { ROUTES } from 'constant';

export default function PrivateRoute({ children }: IWithReactChildren) {
   const { isLoggedIn } = useAuth();

   return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace={true} />;
}
