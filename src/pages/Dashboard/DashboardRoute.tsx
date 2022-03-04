import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, Navigate } from "react-router-dom";
import { RootState } from '../../redux/reducers/rootReducer';

export function DashboardRoute({ component }: { component: JSX.Element }) {
  const isLoggedIn = useSelector<RootState>((state) => state.user['isLoggedIn'])
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return component;
  }
}
export default React.memo(DashboardRoute);