import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection/>
      <FeaturedCourses/>
    </main>
  );
}
