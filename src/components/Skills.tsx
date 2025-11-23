const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "JavaScript (ES6+)", level: 75 },
        { name: "TypeScript", level: 70},
        { name: "Python", level: 55 },
        { name: "Java", level: 50 },
        { name: "C", level: 60 }
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 80 },
        { name: "Redux Toolkit", level: 80 },
        { name: "Tailwind CSS", level: 90 },
        { name: "HTML5 & CSS3", level: 95 },
        { name: "Bootstrap", level: 70 },
        { name: "Material-UI", level: 85 }
      ]
    },
    {
      title: "Tools & Libraries",
      skills: [
        { name: "React Router", level: 55 },
        { name: "React Query", level: 50 },
        { name: "React Hook Form", level: 75 },
        { name: "Git", level: 90 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 55 }
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Proficient in modern web technologies with hands-on experience building production-ready applications
            </p>
          </div>
          
          {/* Skills grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title} 
                className="bg-gradient-card rounded-2xl p-8 shadow-card border border-primary/10 hover-lift animate-fade-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-smooth">
                          {skill.name}
                        </span>

                      </div>
                      
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-glow"
                          style={{ 
                            width: `${skill.level}%`,
                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional note */}
          <div className="text-center mt-12 animate-fade-up">
            <p className="text-muted-foreground italic">
              Continuously learning and staying updated with the latest web development trends
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;