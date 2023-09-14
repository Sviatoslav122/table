import React from 'react';
import { Route, RouteProps, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface PrivateRouteProps extends RouteProps {
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const role = useSelector((state: RootState) => state.auth.role);

    return (
        <Route
            {...rest}
            element={role === 'admin' ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
