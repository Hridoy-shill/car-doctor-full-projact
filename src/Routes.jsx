import { createBrowserRouter } from "react-router-dom";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/LoginPage";
import SingUp from "./Pages/SingUp/SingUp";

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
    },
    {
      path:'/singup',
      element:<SingUp></SingUp>
    }
  ]);

export default router