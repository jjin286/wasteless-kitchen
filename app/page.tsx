import HeroSection from '../components/HomeHeroSection';
import BenefitSection from '../components/HomeBenefitSection';
import FeatureSection from '../components/HomeFeatureSection';
import Nav from '../components/Nav';
import { createClient } from '@supabase/supabase-js';

export default function Home() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  return (
    <div className='home h-full'>
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
