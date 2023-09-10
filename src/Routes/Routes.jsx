import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomeScreen/Home/Home";
import AllPrevEvents from "../pages/HomeScreen/Events/PrevEvents/AllPrevEvents";
import AllUpEvents from "../pages/HomeScreen/Events/UpEvents/AllUpEvents";
import BoardCommittee from "../pages/Committee/BoardCommittee";
import ExecutiveCommittee from "../pages/Committee/ExecutiveCommittee";
import RunningCommittee from "../pages/Committee/RunningCommittee";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../pages/Shared/Secret/Secret";
import AboutUs from "../pages/Shared/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import VisionMission from "../pages/Shared/VisionMission/VisionMission";
import Gallery from "../pages/Gallery/Gallery";
import Founder from "../pages/HomeScreen/Massage/Founder";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/founder',
        element: <Founder></Founder>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>
      },
      {
        path: '/visionMission',
        element: <VisionMission></VisionMission>
      },
      {
        path: 'prevEvents',
        element: <AllPrevEvents></AllPrevEvents>
      },
      {
        path: 'upEvents',
        element: <AllUpEvents></AllUpEvents>
      },
      {
        path: 'boardCommittee',
        element: <BoardCommittee></BoardCommittee>
      },
      {
        path: 'executiveCommittee',
        element: <ExecutiveCommittee></ExecutiveCommittee>
      },
      {
        path: 'runningCommittee',
        element: <RunningCommittee></RunningCommittee>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PrivateRoute><Secret></Secret></PrivateRoute>
      }
    ]
  },
]);