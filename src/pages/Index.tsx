import { ThemeProvider } from "@/components/ThemeProvider"
import { ThemeToggle } from "@/components/ThemeToggle"
import { Navigation } from "@/components/Navigation"
import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { SkillsSection } from "@/components/SkillsSection"
import { ProjectsSection } from "@/components/ProjectsSection"
import { BlogSection } from "@/components/BlogSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { TimelineSection } from "@/components/TimelineSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background">
        <Navigation />
        <ThemeToggle />
        
        <main>
          <HeroSection />
          <section id="about">
            <AboutSection />
          </section>
          <section id="skills">
            <SkillsSection />
          </section>
          <section id="projects">
            <ProjectsSection />
          </section>
          <section id="blog">
            <BlogSection />
          </section>
          <TestimonialsSection />
          <section id="timeline">
            <TimelineSection />
          </section>
          <section id="contact">
            <ContactSection />
          </section>
        </main>
        
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
};

export default Index;
