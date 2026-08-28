/* eslint-disable no-unused-vars */
import Navbar from '../../components/common/Navbar.jsx';
import HeroSection from '../../components/common/HeroSection.jsx';
import HeroSectionSwitcher from '../../components/common/HeroSectionSwitcher.jsx';
import InfiniteTemplateGallery from '../../features/templates/InfiniteTemplateGallery.jsx';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSectionSwitcher />
      {/* <HeroSection /> */}
      <InfiniteTemplateGallery />
      {/* <h1
        style={{ textAlign: 'center', fontFamily: 'Inter', fontSize: '2rem', fontWeight: 'bold' }}
      >
        Home Page
      </h1> */}
    </div>
  );
};

export default HomePage;
