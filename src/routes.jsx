import Home from "../components/Home.jsx";
import Actors from "./components/Actors.jsx";
import Directors from "./components/Directors.jsx";
import Movie from "../components/Movie.jsx";
import NotFound from "./components/NotFound.jsx";

const routes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  },
  {
    path: "*",
    element: <NotFound />
  }
];

export default routes;
