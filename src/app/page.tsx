import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Team from "@/components/sections/Team";
import Projects from "@/components/sections/Projects";
import Updates from "@/components/sections/Updates";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex flex-col w-full overflow-x-hidden">
      
      {/* 1. Home / Hero Section */}
      <Hero id="home" />

      {/* 2. About Us Section */}
      <About id="about" />

      {/* 3. Our Team (Often placed right after About)*/}
      <Team id="team" /> 

      {/* 4. Our Work / Projects */}
      <Projects id="projects" />

      {/* 5. Updates / Announcements */}
      <Updates id="updates" />

      {/* 6. Gallery / Media */}
      <Gallery id="gallery" />

     

      {/* 7. Contact Us */}
      <Contact id="contact" />

    </main>
  );
}