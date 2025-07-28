import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "Python", "Java"]
    },
    {
      title: "Frontend",
      skills: ["HTML5/CSS3", "JavaScript" , "React"]
    },
    {
      title: "Backend", 
      skills: [ "Spring Boot", "REST APIs"]
    },
    {
      title: "Database",
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Others",
      skills: ["Git", "VS Code", "AWS", "IntelliJ IDEA", "Postman", "Figma"]
    }
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-card rounded-xl p-6 border border-border">
            <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;