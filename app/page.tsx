import HeroSection from '../components/HomeHeroSection';
import BenefitSection from '../components/HomeBenefitSection';

export default function Home() {
  return (
    <div className='home'>
        <HeroSection text='Welcome to Wasteless Kitchen!'/>
      <div className='info'>

      </div>
      <BenefitSection />
      <div className='features'>

      </div>
    </div>
  );
}
