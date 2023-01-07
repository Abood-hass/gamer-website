import './App.css';

import LoginSection from './Sections/LoginSection'
import RegisterSection from './Sections/RegisterSection'
import HomeSection from './Sections/HomeSection'
import ErrorSection from './Sections/ErrorSection'
import { useNavigate, useRoutes } from "react-router-dom";
import GetData from './Sections/GetData/GetData';

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
      // element: <GetData />
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

