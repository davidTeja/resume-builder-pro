import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import FillDetailsPage from "../pages/FillDetails/FillDetailsPage";
import PreviewPage from "../pages/Preview/PreviewPage";
import AboutPage from "../pages/About/AboutPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fill-details" element={<FillDetailsPage />} />
      <Route path="/preview" element={<PreviewPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default AppRoutes;