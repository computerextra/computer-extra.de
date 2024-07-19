import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import routes from "./routes";

export default function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {routes.map((route, idx) => (
          <Route path={route.path} element={<route.element />} key={idx} />
        ))}
      </Routes>
    </AnimatePresence>
  );
}
