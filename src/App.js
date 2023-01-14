import './App.css';

import LoginSection from './Sections/LoginSection'
import RegisterSection from './Sections/RegisterSection'
import HomeSection from './Sections/HomeSection'
import AdminDashboard from './Sections/AdminDashboard'
import ErrorSection from './Sections/ErrorSection'
import UserProfile from './Sections/UserProfile'
import { useNavigate, useRoutes } from "react-router-dom";
import { ProtectedRouteDashboard, ProtectedRouteLogin } from './Sections/ProtectedRoute';

export default function App() {
  let navigate = useNavigate()
  let Pages = useRoutes([
    {
      path: "/",
      element: <ProtectedRouteLogin navigate={navigate} />,
    }, {
      path: "/login",
      element: <LoginSection navigate={navigate} />,
    }, {
      path: "/register",
      element: <RegisterSection navigate={navigate} />,
    }, {
      path: "/mainPage",
      element: <HomeSection navigate={navigate} />,
    }, {
      path: "/profile",
      element: <UserProfile navigate={navigate} />,
    }, {
      path: "/DashboardPort",
      element: <ProtectedRouteDashboard navigate={navigate} />,
    }, {
      path: "/dashboard",
      element: <AdminDashboard navigate={navigate} />,
    }, {
      path: "*",
      element: <ErrorSection navigate={navigate} />,
    },
  ]);

  return (
    <div className="App">
      {Pages}
    </div>
  )
}

