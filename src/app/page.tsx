import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
    </main>
  );
}
