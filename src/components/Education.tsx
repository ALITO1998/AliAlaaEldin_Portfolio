import { GraduationCap, Award, BookOpen } from "lucide-react";
import {FaJava, FaJs, FaPython, FaReact} from "react-icons/fa";
import {FaC} from "react-icons/fa6";

const Education = () => {
  const certifications = [
    {
      title: "Frontend Development: React",
      provider: "Kimz Code",
      category: "Frontend Development",
      icon: "FaReact",
    },
    {
      title: "JavaScript Complete Course",
      provider: "Elzero Web School",
      category: "Frontend Development",
      icon: "FaJavaScript"
    },
    {
      title: "MERN Stack Development",
      provider: "One Million Arab Coders",
      category: "Full-Stack",
      icon: "FaJavaScript"
    },
    {
      title: "Python Programming",
      provider: "One Million Arab Coders",
      category: "Full-Stack",
      icon: "FaPython"
    },
    {
      title: "Data Structures (C)",
      provider: "Computer Science Program",
      category: "Core CS",
      icon: "FaC"
    },
    {
      title: "Object-Oriented Programming (Java)",
      provider: "Computer Science Program",
      category: "Core CS",
      icon: "FaJava"
    },
    {
        title: "Odoo Development: Odoo",
        provider: "Muhammad Nasser",
        category: "Odoo Development",
        icon: "FaPython"
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Education */}
          <div className="mb-16 animate-fade-up">
            <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-primary/10 max-w-4xl mx-auto">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    Bachelor of Computer Science
                  </h3>
                  <p className="text-lg text-muted-foreground mb-2">
                    Helwan University – Faculty of Computers and Artificial Intelligence
                  </p>
                  <p className="text-primary font-semibold text-lg">
                    Graduated 2024
                  </p>
                  <p className="text-muted-foreground mt-4 leading-relaxed">
                    Comprehensive study in computer science fundamentals including algorithms, data structures, 
                    software engineering, and modern programming paradigms. Strong foundation in both theoretical 
                    concepts and practical application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Certifications */}
          <div className="animate-fade-up">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.title}
                  className="bg-gradient-card rounded-xl p-6 shadow-card border border-primary/10 hover-lift transition-smooth animate-fade-up group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                      {cert.icon === 'FaPython' && <FaPython className="w-5 h-5 text-primary" />}
                      {cert.icon === 'FaReact' && <FaReact className="w-5 h-5 text-primary" />}
                      {cert.icon === 'FaJava' && <FaJava className="w-5 h-5 text-primary" />}
                      {cert.icon === 'FaJavaScript' && <FaJs className="w-5 h-5 text-primary" />}
                      {cert.icon === 'FaC' && <FaC className="w-5 h-5 text-primary" />}
                    </div>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                      {cert.category}
                    </span>
                  </div>
                  
                  <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-smooth">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {cert.provider}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional experience note */}
          <div className="mt-16 text-center animate-fade-up">
            <div className="bg-gradient-card rounded-xl p-8 border border-primary/10 max-w-3xl mx-auto">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                Additional Experience
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-primary">Customer Support & Sales:</strong> Developed strong communication 
                skills and client-centric problem-solving abilities through hands-on experience in customer-facing roles. 
                This background enhances my ability to understand user needs and create intuitive, user-friendly interfaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;