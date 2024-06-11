import HeroSection from '../components/HomeHeroSection';
import BenefitSection from '../components/HomeBenefitSection';
import FeatureSection from '../components/HomeFeatureSection';

export default function Home() {
  return (
    <div className='home'>
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
