import './App.css';

import LoginSection from './Sections/LoginSection'
import RegisterSection from './Sections/RegisterSection'
import HomeSection from './Sections/HomeSection'
import ErrorSection from './Sections/ErrorSection'
import { useNavigate, useRoutes } from "react-router-dom";
import ProtectedRoute from './Sections/ProtectedRoute';

export default function App() {
  let navigate = useNavigate()
  let Pages = useRoutes([
    {
      path: "/",
      element: <ProtectedRoute navigate={navigate} />,
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

