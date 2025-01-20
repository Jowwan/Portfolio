import AboutMe from "@/components/AboutMe";
import Dots from "@/components/Dots/Dots";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero/Hero";
import { FloatingNav } from "@/components/Nav";
import RecentProjects from "@/components/Projects";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export default function Home() {
  return (
    <div className="">
      <FloatingNav navItems={navItems} />
      <Dots>
        <Hero />
      </Dots>
      <AboutMe />
      <RecentProjects />
      <Footer />
    </div>
  );
}
