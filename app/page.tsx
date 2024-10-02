import HeroSection from './components/HomeHeroSection';
import BenefitSection from './components/HomeBenefitSection';
import FeatureSection from './components/HomeFeatureSection';
import Nav from './components/Nav';

export default async function Home() {

  return (
    <div className='home h-full'>
      <script src="https://accounts.google.com/gsi/client" async></script>

        <Nav />
        <HeroSection
          text='Welcome to Wasteless Kitchen!'
          subtext='Build sustainable cooking habits with recipe suggestions and notifications'
        />
      <BenefitSection />
      <FeatureSection />
    </div>
  );
}
