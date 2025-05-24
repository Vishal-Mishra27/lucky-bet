import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/home/Home";
import ProtectedRoute from "../features/auth/ProtectedRoute";
import AvitatorLayout from "../pages/AviatorGame/AvitatorLayout";
import ComingSoon from "../reusableComponents/ComingSoon";
import LiveHome from "../pages/Live/LiveHome";
import SportsHome from "../pages/sports/SportsHome";
import CasinoHome from "../pages/casino/CasinoHome";
import Livepage from "../MyComponent/Livepage";
import LiveCalender from "../MyComponents2/LiveCalender";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        // element: <Home />,
        element: <LiveCalender />,
        // element: <Livepage />,
      },
    ],
  },
  {
    path:"/liveCalender",
    element: <LiveCalender />
  },
  //   {
  //     path: "/livepagemy",
  //     element: <Livepage />,
  //     children: [
  //         {
  //             path: "/",
  //             element: <Home />,
  //         },
  //     ],
  //   },
  {
    path: "/",
    element: (
      //   <ProtectedRoute>
      <Layout />
      //   </ProtectedRoute>
    ),
    children: [
      {
        path: "/aviator",
        element: <AvitatorLayout />,
      },
      {
        path: "/comingsoon",
        element: <ComingSoon />,
      },
      // {
      //     path: "/live",
      //     element: <LiveHome />,
      // },
      {
        path: "/livepagemy",
        element: <Livepage />,
      },
      {
        path: "/sports",
        element: <SportsHome />,
      },
      {
        path: "/casino",
        element: <CasinoHome />,
      },
    ],
  },
]);
