import './App.css';

import LoginSection from './Sections/LoginSection'
import RegisterSection from './Sections/RegisterSection'
import HomeSection from './Sections/HomeSection'
import { useNavigate, useRoutes } from "react-router-dom";

export default function App() {
  let navigate = useNavigate()
  let Pages = useRoutes([
    {
      path: "/",
      element: <LoginSection navigate={navigate} />,
    }, {
      path: "/register",
      element: <RegisterSection navigate={navigate} />,
    }, {
      path: "/mainPage",
      element: <HomeSection navigate={navigate} />,
    },
  ]);

  return (
    <div className="App">
      {Pages}
    </div>
  )
}

