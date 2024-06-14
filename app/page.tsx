import HeroSection from '../components/HomeHeroSection';
import BenefitSection from '../components/HomeBenefitSection';
import FeatureSection from '../components/HomeFeatureSection';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div className='home h-full'>
        <Nav />
        <HeroSection
          text='Welcome to Wasteless Kitchen!'
          subtext='Build sustainable cooking habits with recipe suggestions and notifications'
        />
      <div className='info'>

      </div>
      <BenefitSection />
      <div className='features'>
        <FeatureSection />
      </div>
    </div>
  );
}
