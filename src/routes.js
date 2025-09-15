import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/projects", element: <Projects /> },
  { path: "/contact", element: <Contact /> },
  { path: "/experience", element: <Experience /> },
];

export default routes;
