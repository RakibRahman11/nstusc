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
      }
    ]
  },
]);