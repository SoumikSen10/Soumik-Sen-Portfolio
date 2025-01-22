import "./App.css";
import Cursor from "./components/Cursor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SidebarDemo from "./components/SidebarDemo";


import {
  HeroPage,
  AboutPage,
  SkillsPage,
  ProjectsPage,
  ContactPage,
} from "./pages";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
      <Cursor />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SidebarDemo component={<><HeroPage /><Footer/></>} />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <SidebarDemo component={<AboutPage />} />
              </>
            }
          />
          <Route
            path="/skills"
            element={
              <>
                <SidebarDemo component={<SkillsPage />} />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <SidebarDemo component={<ProjectsPage />} />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <SidebarDemo component={<ContactPage />} />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
