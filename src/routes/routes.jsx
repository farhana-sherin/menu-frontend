import {
    createBrowserRouter,
   
  } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

import { ShowMenuQR } from "../pages/Qr";
import Home from "../pages/home";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path:"/home",
          element:<Home/>
        },
        {
          path:"/",
          element:<ShowMenuQR/>
        },
      ],
    },
  ]);