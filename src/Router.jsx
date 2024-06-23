import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./components/About/About";
import HomePage from "./components/Home/HomePage";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path:'*',
        element:<Navigate to={""}/> 
      }
    ],
  },
]);
