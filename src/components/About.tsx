const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <div className="mb-16 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Professional summary */}
          <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-primary/10 animate-fade-up">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              Results-driven <span className="text-primary font-semibold">Front-End Developer</span> with a 
              Bachelor's in Computer Science and hands-on experience in building responsive, user-friendly web 
              applications using <span className="text-primary font-semibold">React, JavaScript, and Tailwind CSS</span>.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-8">
              Passionate about crafting intuitive interfaces and solving complex problems through clean, 
              maintainable code. Combines technical expertise with strong communication skills honed in 
              customer-facing roles.
            </p>
            
            {/* Key highlights */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="text-center p-6 rounded-xl bg-white/50 border border-primary/10 hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">2024</div>
                <div className="text-sm text-muted-foreground">Graduate</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-white/50 border border-primary/10 hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;