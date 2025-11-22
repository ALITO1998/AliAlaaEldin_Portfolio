import { Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaGitlab } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center animate-fade-up">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="/lovable-uploads/d4d2c2a7-64df-4606-b9e1-a807b98f50e4.png"
                alt="Ali Alaa-Eldin"
                className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-elegant hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-b from-transparent to-primary/20"></div>
            </div>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Ali Alaa-Eldin
          </h1>
          
          {/* Subtitle with gradient */}
          <div className="text-2xl md:text-3xl font-medium mb-8">
            <span className="text-white/90">Front-End Developer</span>
          </div>
          
          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-white/80 mb-8">
            <a
                href={'https://www.google.com/maps/place/%D8%B9%D9%85%D8%A7%D8%AF+1111%E2%80%AD/@29.9608151,31.1429065,21z/data=!4m9!1m2!10m1!1e2!3m5!1s0x14584f0059984491:0xe85d17cc982909b3!8m2!3d29.9607645!4d31.1429595!16s%2Fg%2F11vwjwbd_5?authuser=0&entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover-glow transition-smooth hover:bg-white/20"
            >
              <MapPin className="w-5 h-5" />
              <span>Giza, Egypt</span>
            </a>
          </div>
          
          {/* Contact links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:alialaa144144@gmail.com"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover-glow transition-smooth hover:bg-white/20"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">alialaa144144@gmail.com</span>
              <span className="sm:hidden">Email</span>
            </a>
            
            <a 
              href="tel:+201112055710"
              className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover-glow transition-smooth hover:bg-white/20"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">(+20) 111-205-5710</span>
              <span className="sm:hidden">Phone</span>
            </a>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/alialaa-eldinmahmoud"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover-lift hover-glow transition-smooth"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Alito1998" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover-lift hover-glow transition-smooth"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://gitlab.com/ALITO1998" 
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover-lift hover-glow transition-smooth"
              aria-label="GitLab Profile"
            >
              <FaGitlab className="w-6 h-6" />
            </a>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 hover:shadow-glow transition-all duration-300 shadow-elegant px-8 py-3 text-lg font-medium group"
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
            >
              <span className="group-hover:mr-1 transition-all duration-300">View My Work</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/20 border-white/40 text-white hover:bg-white/30 hover:scale-105 hover:shadow-glow backdrop-blur-sm transition-all duration-300 px-8 py-3 text-lg group"
              onClick={() => {
                // Create a temporary link to download CV
                const link = document.createElement('a');
                link.href = 'https://drive.google.com/file/d/1O5d6aKWWq-n8UuyKzfNCg8S_6-6BVCQs/view?usp=sharing';
                link.download = 'Ali_Alaa_Eldin_CV.pdf';
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              <span className="group-hover:mr-1 transition-all duration-300">Download CV</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;