import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {FaGithub, FaGitlab, FaLinkedin} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-primary-glow/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Work Together
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
            <p className="text-lg text-white/80 mt-6 max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
            </p>
          </div>
          
          {/* Contact information */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Email */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift transition-smooth animate-fade-up hover:bg-white/30">
                <a href="mailto:alialaa144144@gmail.com">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                    <p className="text-white/80 hover:text-white transition-smooth">
                        alialaa144144@gmail.com
                    </p>
                </a>
            </div>
            
            {/* Phone */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift transition-smooth animate-fade-up hover:bg-white/30" style={{ animationDelay: '0.1s' }}>
              <a href="tel:+201112055710">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-white/80 hover:text-white transition-smooth">
                    (+20) 111-205-5710
                </p>
              </a>
            </div>
            
            {/* Location */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover-lift transition-smooth animate-fade-up hover:bg-white/30" style={{ animationDelay: '0.2s' }}>
              <a href={'https://www.google.com/maps/place/%D8%B9%D9%85%D8%A7%D8%AF+1111%E2%80%AD/@29.9608151,31.1429065,21z/data=!4m9!1m2!10m1!1e2!3m5!1s0x14584f0059984491:0xe85d17cc982909b3!8m2!3d29.9607645!4d31.1429595!16s%2Fg%2F11vwjwbd_5?authuser=0&entry=ttu&g_ep=EgoyMDI1MTExMi4wIKXMDSoASAFQAw%3D%3D'}>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
                <p className="text-white/80 hover:text-white transition-smooth">
                    Giza, Egypt
                </p>
              </a>
            </div>
          </div>
          
          {/* Social links */}
          <div className="flex items-center justify-center gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a 
              href="https://www.linkedin.com/in/alialaa-eldinmahmoud"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover-lift hover-glow transition-smooth group"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://github.com/Alito1998"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover-lift hover-glow transition-smooth group"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
            <a 
              href="https://gitlab.com/ALITO1998"
              className="p-4 bg-white/10 backdrop-blur-sm rounded-full text-white hover-lift hover-glow transition-smooth group"
              aria-label="GitLab Profile"
            >
              <FaGitlab className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
          
          {/* CTA */}
          <div className="animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-elegant px-8 py-3 text-lg font-medium"
              asChild
            >
              <a href="mailto:alialaa144144@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;