import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
    {
      path:'/login',
      element:<LoginPage></LoginPage>
    }
  ]);

export default router