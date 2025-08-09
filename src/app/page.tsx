import NavBar from "./_utils/nav_bar";
import HeroSection from "./_components/home/hero-section";
import OpeningsSection from "./_components/home/openings-section";
import { BlogSection } from "./_components/home/blog-section";
import ReviewSection from "./_components/home/review-section";

export default async function HomePage() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection id="hero"></HeroSection>
      <OpeningsSection id="openings"></OpeningsSection>
      <BlogSection id="blog"></BlogSection>
      <ReviewSection id="services"></ReviewSection>
    </>
  );
}
