import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ user, children, navigateTo = "/" }) => {
  if (!user) {
    return <Navigate to={navigateTo} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
