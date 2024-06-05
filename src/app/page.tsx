import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <Testimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
