import { Download, MapPin, Calendar, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Years Experience', value: '5+' },
    { icon: Coffee, label: 'Projects Completed', value: '50+' },
    { icon: MapPin, label: 'Based In', value: 'Addis Ababa' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the code
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image and Stats */}
            <div className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-80 h-80 mx-auto relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl rotate-6"></div>
                  <div className="absolute inset-0 glass rounded-2xl -rotate-3"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center">
                    <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-primary">DW</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center p-4 glass rounded-lg hover-glow">
                      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">
                  Crafting Digital Experiences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate full-stack developer with over 5 years of experience creating 
                  digital solutions that make a difference. My journey began with a curiosity about 
                  how things work, which led me to fall in love with the art of coding.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in React, Vue.js, Laravel and modern web technologies. When I'm not coding, 
                  you'll find me exploring new technologies, contributing to open-source projects, 
                  or enjoying a good cup of coffee while sketching out my next big idea.
                </p>
              </div>

              {/* Key Points */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">What drives me:</h4>
                <ul className="space-y-2">
                  {[
                    'Creating intuitive user experiences',
                    'Writing clean, maintainable code',
                    'Solving complex problems with simple solutions',
                    'Continuous learning and growth'
                  ].map((point, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Download Resume Button */}
              <div className="pt-4">
                <button className="flex items-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover-glow transition-all duration-300 hover:scale-105">
                  <Download className="w-5 h-5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-full opacity-50"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent/5 rounded-lg rotate-45 opacity-50"></div>
    </section>
  );
};

export default About;