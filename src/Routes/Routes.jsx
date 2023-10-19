import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/HomeScreen/Home/Home";
import AllPrevEvents from "../pages/HomeScreen/Events/PrevEvents/AllPrevEvents";
import AllUpEvents from "../pages/HomeScreen/Events/UpEvents/AllUpEvents";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../pages/Shared/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import VisionMission from "../pages/Shared/VisionMission/VisionMission";
import Gallery from "../pages/Gallery/Gallery";
import Founder from "../pages/HomeScreen/Massage/Founder";
import OurTeam from "../pages/Committee/OurTeam";
import FirstCommittee from "../pages/Committee/FirstCommittee";
import SecondCommittee from "../pages/Committee/SecondCommittee";
import Advisor from "../pages/Committee/Advisor";

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
        element: <PrivateRoute><Founder></Founder></PrivateRoute>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
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
        path: '/prevEvents',
        element: <PrivateRoute><AllPrevEvents></AllPrevEvents></PrivateRoute>
      },
      {
        path: '/upEvents',
        element: <PrivateRoute><AllUpEvents></AllUpEvents></PrivateRoute>
      },
      {
        path: '/teamList',
        element: <OurTeam></OurTeam>
      },
      {
        path: '/firstCommittee',
        element: <PrivateRoute><FirstCommittee></FirstCommittee></PrivateRoute>
      },
      {
        path: '/secondCommittee',
        element: <PrivateRoute><SecondCommittee></SecondCommittee></PrivateRoute>
      },
      {
        path: '/advisorCommittee',
        element: <PrivateRoute><Advisor></Advisor></PrivateRoute>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
]);