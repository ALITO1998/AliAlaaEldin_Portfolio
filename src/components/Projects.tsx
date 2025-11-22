import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {FaGithub} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Al-Yaqout E-commerce App",
      description: "A natural leather products e-commerce platform built with React and Redux Toolkit. Features JSON Server for data storage and React Hook Form for validation.",
      technologies: ["React", "Redux Toolkit", "TypeScript", "React Hook Form", "React Query"],
      githubUrl: "https://github.com/ALITO1998/al-yaqout_e-commerce",
      liveUrl: "https://al-yaqout-e-commerce.vercel.app/",
      featured: false
    },
    {
      title: "Book Store System",
      description: "A CRUD-based dashboard to manage books with full create, read, update, and delete functionality. Built with modern React patterns.",
      technologies: ["React", "Redux Toolkit", "TypeScript"],
      githubUrl: "https://github.com/ALITO1998/EduLite_Team_Trust_Task/tree/main/frontend/submissions/alito1998/books-store-system",
      liveUrl: "https://edu-lite-team-trust-task.vercel.app/",
      featured: true
    },
    {
      title: "To-Do App",
      description: "A task management web application with state persistence, featuring a clean interface and efficient state management.",
      technologies: ["React", "Redux Toolkit", "MUI"],
      githubUrl: "https://github.com/ALITO1998/todolist",
      liveUrl: "https://todolist-rouge-three.vercel.app/",
      featured: false
    },
    {
      title: "Mosabaket Al-Quran Al-Kareem",
      description: "A teacher dashboard to track student progress in Quran memorization, built with vanilla JavaScript and modern DOM manipulation.",
      technologies: ["Vanilla JavaScript", "HTML5", "CSS3"],
      githubUrl: "https://github.com/ALITO1998/Mosabaket_Quraan.io",
      liveUrl: "https://alito1998.github.io/Mosabaket_Quraan.io/",
      featured: true
    },

  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
                Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              A showcase of my recent work in web development, featuring modern React applications
            </p>
          </div>
          
          {/* Featured projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group bg-gradient-card border-primary/10 hover-lift shadow-card transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <a 
                        href={project.githubUrl}
                        className="p-2 rounded-lg bg-white/50 text-muted-foreground hover:text-primary hover:bg-white transition-smooth"
                        aria-label="View source code"
                      >
                        <FaGithub className="w-4 h-4" />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="p-2 rounded-lg bg-white/50 text-muted-foreground hover:text-primary hover:bg-white transition-smooth"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full border border-primary/10 group-hover:border-primary/20 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="bg-gradient-primary hover:shadow-glow transition-smooth"
                      asChild
                    >
                      <a href={project.liveUrl}>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl}>
                        <FaGithub className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Other projects */}
          <div className="mb-8 animate-fade-up">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              More Projects
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={project.title}
                className="group bg-gradient-card border-primary/10 hover-lift shadow-card transition-smooth animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <a 
                        href={project.githubUrl}
                        className="p-1.5 rounded-md bg-white/50 text-muted-foreground hover:text-primary hover:bg-white transition-smooth"
                        aria-label="View source code"
                      >
                        <FaGithub className="w-3.5 h-3.5" />
                      </a>
                      <a 
                        href={project.liveUrl}
                        className="p-1.5 rounded-md bg-white/50 text-muted-foreground hover:text-primary hover:bg-white transition-smooth"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed mb-4">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-primary/10 group-hover:border-primary/20 transition-smooth"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
