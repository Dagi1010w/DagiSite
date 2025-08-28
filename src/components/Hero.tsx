import { useState, useEffect, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = useMemo(() => [
    'Full Stack Developer',
    'React Specialist',
    'Vue Developer',
    'UI/UX Designer',
    'Problem Solver'
  ], []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="mb-6 opacity-0 animate-[fade-in_1s_ease-out_0.5s_forwards]">
            <span className="text-lg text-muted-foreground">Hello, I'm</span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-[fade-in_1s_ease-out_1s_forwards]">
            <span className="gradient-text">Dagim Worku</span>
          </h1>

          {/* Animated title */}
          <div className="mb-8 opacity-0 animate-[fade-in_1s_ease-out_1.5s_forwards]">
            <h2 className="text-2xl md:text-4xl font-medium text-foreground/90 h-16 flex items-center justify-center">
              <span className="mr-2">I'm a</span>
              <span className="text-primary font-semibold min-w-[300px] text-left">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-[fade-in_1s_ease-out_2s_forwards]">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through clean code and thoughtful design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-[fade-in_1s_ease-out_2.5s_forwards]">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="opacity-0 animate-[fade-in_1s_ease-out_3s_forwards]">
            <button
              onClick={() => scrollToSection('about')}
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-300 mx-auto"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent/20 rotate-45 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-24 h-24 border border-primary/10 rounded-full float" style={{ animationDelay: '1.5s' }} />
    </section>
  );
};

export default Hero;