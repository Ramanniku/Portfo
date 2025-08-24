import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="page-content">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
