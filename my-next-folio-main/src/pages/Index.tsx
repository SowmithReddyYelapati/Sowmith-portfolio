import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <CertificationsSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <div className="h-16"></div>
    </div>
  );
};

export default Index;
