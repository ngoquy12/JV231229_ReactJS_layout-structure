import About from "../../pages/about";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import Login from "../../pages/login";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

export default publicRoutes;
