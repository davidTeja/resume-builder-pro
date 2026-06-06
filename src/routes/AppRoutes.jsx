import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import ResumeBuilderPage from "../pages/ResumeBuilder/ResumeBuilderPage";
import PreviewPage from "../pages/Preview/PreviewPage";
import AboutPage from "../pages/About/AboutPage";
import MyResumesPage from "../pages/MyResumes/MyResumesPage";
import TemplatesPage from "../pages/Templates/TemplatesPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/build-resume" element={<ResumeBuilderPage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/my-resumes" element={<MyResumesPage />} />
      <Route path = "/templates" element = {<TemplatesPage />} />
    </Routes>
  );
};

export default AppRoutes;