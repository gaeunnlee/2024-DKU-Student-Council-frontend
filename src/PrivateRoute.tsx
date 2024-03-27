import { ROUTES } from '@constants/route';
import { isLoggedIn } from '@utils/token';
import React from 'react';
import { Navigate } from 'react-router-dom';

import { WithReactChildren } from '@/types/default-interfaces';

export default function PrivateRoute({ children }: WithReactChildren) {
   return isLoggedIn ? <>{children}</> : <Navigate to={ROUTES.LOGIN} replace={true} />;
}
