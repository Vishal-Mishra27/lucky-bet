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
import Result from "../MyComponent3/Result";
import LiveCasino from "../MyComponents4/LiveCasino";
import GamePage from "../MyComponents5/GamePage";
import VirtualSports from "../MyComponents6/VirtualSports";
import ESports from "../MyComponents7/ESports";
import ResultEsport from "../MyComponents8/ResultEsport";
import Upcoming from "../MyComponents9/Upcoming";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        // element: <Home />,
        // element: <LiveCalender />,
        // element: <Livepage />,
        // element: <Result />,
        // element: <LiveCasino />,
        // element: <GamePage />,
        // element:<VirtualSports />
        // element:<ESports />
        element:<ResultEsport />
          //  element:<Upcoming />,
      },
    ],
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
        <ProtectedRoute>
      <Layout />
         </ProtectedRoute>
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
      {
        path: "/liveCalender",
        element: <LiveCalender />,
      },
      {
        path: "/result",
        element: <Result />,
      },
    ],
  },
]);
