import HeroSection from '../components/HomeHeroSection';
import BenefitSection from '../components/HomeBenefitSection';
import FeatureSection from '../components/HomeFeatureSection';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className='home'>
        <Nav />
        <HeroSection text='Welcome to Wasteless Kitchen!'/>
      <div className='info'>

      </div>
      <BenefitSection />
      <div className='features'>
        <FeatureSection />
      </div>
    </div>
  );
}
