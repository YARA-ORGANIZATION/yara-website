import HeroSection from "@/components/HeroSection/HeroSection";
import Fellowship from "@/components/HomePages/Fellowship";
import Empowerment from "@/components/HomePages/Empowerment";
import WhatsNew from "@/components/HomePages/WhatsNew";
import WhyAfrica from "@/components/HomePages/WhyAfrica";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Fellowship />
      <Empowerment />
      <WhyAfrica />
      <WhatsNew />
    </>
  );
}
