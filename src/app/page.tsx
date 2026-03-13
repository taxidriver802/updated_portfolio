import Hero from "@/sections/Hero";
import FeaturedProjects from "@/sections/FeaturedProjects";
import TechStack from "@/sections/TechStack";
import CurrentlyBuilding from "@/sections/CurrentlyBuilding";
import OtherProjects from "@/sections/OtherProjects";
import Contact from "@/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <TechStack />
      <CurrentlyBuilding />
      <OtherProjects />
      <Contact />
    </>
  );
}