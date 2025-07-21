import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import Category from "../pages/Category.jsx";
import About from "../pages/About.jsx";
import Contacts from "../pages/Contacts.jsx";


const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      }
    ]
  }
];

export default routes;
