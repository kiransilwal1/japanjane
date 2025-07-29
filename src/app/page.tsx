import NavBar from "./_utils/nav_bar";
import HeroSection from "./_components/home/hero-section";
import OpeningsSection from "./_components/home/openings-section";

export default async function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <OpeningsSection></OpeningsSection>
    </>
  );
}
