import Navbar from "../../components/common/Navbar.jsx";
import HeroSection from "../../components/common/HeroSection.jsx";
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <h1 style={{ textAlign: "center", fontFamily: "Inter", fontSize: "2rem", fontWeight: "bold" }}>Home Page</h1>
    </div>
  );
};

export default HomePage;